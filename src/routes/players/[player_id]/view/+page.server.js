import {db} from "$lib/server/db"
import { error } from "@sveltejs/kit"



export const load = async ({ fetch, params  }) => {
  console.log(params.player_id)
  const player = db.Player.findByPK(params.player_id)
  if (!player){
    throw error(404, {
      message: "Player not found"
    })
  }  
  return {
    player
  }
}

// function getRecordById(id) {
//   const statement = db.prepare('SELECT * FROM your_table WHERE id = ?');
//   return statement.get(id);
// }