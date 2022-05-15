export async function getLocations() {
  const response = await fetch(
    `https://django-cloudrun-lsmeeds47a-uc.a.run.app/location/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: null,
    }
  );
  return await response.json();
}
