import { models } from "$lib/server/db"

export const load = async ({ fetch, params  }) => {
  const players = models.Player.findAll()

  return {
    players
  }
}

export const actions = {
  default: async({request})=>{
    const data = await request.formData()
    const id = data.get('id')
    
    models.Player.remove(id)

    return {
      message: `Player ${id} removed`
    }
  }
}

