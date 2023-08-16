export const load = async ({ fetch, params  }) => {
  const response = await fetch("http://localhost:4000/hitters")
  const hitters = response.json()
  return {
    hitters
  }
}