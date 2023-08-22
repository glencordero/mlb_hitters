import { models } from "$lib/server/db/index.js"

export const actions = {
    default: async({ request })=>{
        const data = await request.formData()
        const name = data.get('name')
        const hits = data.get('hits')
        const hof = data.get('hof')
        
        models.Player.add(name, hits, hof ? 1 : 0)
        
        return {
            message: `${ name } added.`
        }

    }
}
