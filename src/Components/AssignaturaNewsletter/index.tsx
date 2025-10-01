'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  NewsletterSection,
  NewsletterContent,
  TitleContainer,
  Title,
  Description,
  SubscriptionForm,
  InputGroup,
  EmailInput,
  SubscribeButton,
  SuccessMessage,
  ErrorMessage,
  ImageWrapper
} from './styles';

export default function AssinaturaNewsletter() {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = re.test(email);
    setIsValid(valid);

    if (valid) {
      setErrorMessage('');
    }
  }, [email]);

  const handleSubscribe = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isValid) {
      setErrorMessage('Por favor, ingresa un e-mail válido.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: 'Usuario',
        }),
      });

      if (response.ok) {
        setSuccessMessage(
          `Gracias por subscribirse, Recibiras nuestras novedades en: ${email}`
        );
        setEmail('');
        setErrorMessage('');
      } else {
        const errorData: { error?: string } = await response.json();
        setErrorMessage(errorData.error || 'Error al enviar email.');
      }
    } catch (error) {
      setErrorMessage('Error al enviar email.');
    }
  };

  return (
    <NewsletterSection>
      <NewsletterContent>
        <TitleContainer>
          <Title>
            Su casa con las
            <br />
            <strong>mejores <br /> plantas</strong>
          </Title>
          <Description>
            Encuentre aquí una amplia selección de plantas para decorar tu hogar y hacerte una persona más feliz en tu día a día. Introduce tu correo electrónico y suscríbete a nuestra newsletter para enterarte de las novedades de la marca.
          </Description>
        </TitleContainer>

        <SubscriptionForm action="/">
          <InputGroup>
            <EmailInput
              type="email"
              name="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSuccessMessage('');
              }}
            />
            <SubscribeButton onClick={handleSubscribe}>
              Suscribite al newsletter
            </SubscribeButton>
          </InputGroup>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </SubscriptionForm>
      </NewsletterContent>

      <ImageWrapper>
        <Image
          src="/images/hero-image.png"
          alt="Una planta grande"
          width={640}
          height={790}
          priority
        />
      </ImageWrapper>
    </NewsletterSection>
  );
}
