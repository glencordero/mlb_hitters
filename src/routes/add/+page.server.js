export const actions = {
    default: async({request})=>{
        const data = await request.formData()
        const player = data.get('player')
        const hits = data.get('hits')
        const hof = data.get('hof')
        const newPlayer = {
            hits,
            player,
            hof: hof ? true : false
        }
        
        fetch('http://localhost:4000/hitters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlayer)
        })

        return {
            message: "Player successfully added."
        }

    }
}