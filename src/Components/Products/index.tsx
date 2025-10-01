'use client';

import {
  SectionContainer,
  SubTitle,
  MainTitle,
  GridContainer,
  Filter,
  Order,
  PriceForm,
} from './styles';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getPlants } from '../../Services/plants';

type Plant = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type SortOption = 'price' | 'name' | ''; // '' = predeterminada

export default function ProductSection() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [originalPlants, setOriginalPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [sortOption, setSortOption] = useState<SortOption>(''); // Ordenación predeterminada
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [priceInput, setPriceInput] = useState<string>(''); // input del form

  useEffect(() => {
    const fetchAndSetPlants = async () => {
      try {
        const data = await getPlants();
        const availablePlants = data.filter((plant) => plant.quantity > 0);
        setOriginalPlants(availablePlants); // guarda orden original
        setPlants(availablePlants);
      } catch (error) {
        console.error('Erro ao buscar plantas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetPlants();
  }, []);

  // Ordenar según opción seleccionada
  const getSortedPlants = (): Plant[] => {
    if (sortOption === '') {
      return originalPlants;
    }

    return [...plants].sort((a, b) => {
      if (sortOption === 'price') return a.price - b.price;
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  };

  // Filtrar por precio máximo
  const getFilteredPlants = (): Plant[] => {
    const sorted = getSortedPlants();
    if (maxPrice === null) return sorted;

    return sorted.filter((plant) => plant.price <= maxPrice);
  };

  const filteredPlants = getFilteredPlants();

  if (loading) return <p>Cargando plantas...</p>;

  return (
    <SectionContainer>
      <SubTitle>Nuestras</SubTitle>
      <MainTitle>plantas</MainTitle>

      {/* BLOQUE DE FILTROS */}
      <Filter>
        <Order>
          <label htmlFor="orderby">Ordenar por:</label>
          <select
            id="orderby"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="">Ordenación predeterminada</option>
            <option value="price">Precio</option>
            <option value="name">Nombre</option>
          </select>
        </Order>

        <PriceForm
          onSubmit={(e) => {
            e.preventDefault();
            const value = parseFloat(priceInput);
            if (!isNaN(value)) {
              setMaxPrice(value);
            } else {
              setMaxPrice(null);
            }
          }}
        >
          <label htmlFor="filter">Mostrar productos hasta $ </label>
          <input
            id="filter"
            type="number"
            min="0"
            placeholder="Ingrese un valor"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
          />
          <button type="submit">OK</button>
          {maxPrice !== null && (
            <button
              type="button"
              onClick={() => {
                setMaxPrice(null);
                setPriceInput('');
              }}
            >
              Limpiar
            </button>
          )}
        </PriceForm>
      </Filter>

      <GridContainer>
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <ProductCard
              key={plant.id}
              name={plant.name}
              price={`$ ${plant.price.toFixed()}`}
              imageSrc={`/images/${plant.img}`}
            />
          ))
        ) : (
          <p>Ninguna planta encontrada que cumpla con los filtros aplicados.</p>
        )}
      </GridContainer>
    </SectionContainer>
  );
}
