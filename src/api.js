

export async function getTraks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/" )

  const data = await response.json();
  return data;
}
