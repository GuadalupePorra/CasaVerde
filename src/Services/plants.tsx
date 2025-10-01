const API_URL = 'https://gist.githubusercontent.com/GuadalupePorra/7795d301b809b178e647019f35272e55/raw/b3977d83b022dc48a3a660ea364a26e734da712f/plants.json';

export const getPlants = async () => {
  try {
    const response = await fetch(API_URL, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Solo limitamos a 6 plantas, sin filtro por stock
    const limitedPlants = data.slice(0, 6);

    return limitedPlants;
  } catch (error) {
    console.error("Failed to fetch plants:", error);
    return [];
  }
};
