// i will return a player based on params.player_id
export const load = async ({ fetch, params  }) => {
    const response = await fetch(`http://localhost:4000/hitters/${params.player_id}`)
    const hitter = await response.json()
    console.log(hitter)
    return {
      hitter
    }
  }