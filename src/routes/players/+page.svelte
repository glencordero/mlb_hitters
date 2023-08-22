<script>
    // import {onMount} from "svelte"
    // import {invalidateAll} from "$app/navigation"
    export let data
    export let form
    const {players} = data
    // onMount(() => {
    //   invalidateAll()
    // })
</script>

<h1 class="text-2xl font-bold pb-6">MLB Hitters Club</h1>

{form?.message || ""}

{ #each players as player }
  <div class="grid grid-cols-[200px_150px_40px] width-12 gap-4 my-10">
    <p>
      { player.name }
    </p>
    <a href={`/players/${player.id}/view`}>
      <span class="bg-green-300 text-center rounded-full py-2 px-5 border-2 border-green-700">View Player</span>
    </a>
    <form class="mt-[-8px]" method="post">
      <input type="hidden" value="{player.id}" name="id"/>
      <button class="bg-red-300 text-center rounded-full py-[0.4rem] px-5 border-2 border-red-700">
        Remove
      </button>
    </form>
  </div>
{ /each }

<!-- <ul>
    {#each players as player}
      <li>
        <p>{player.name}</p>
        <a href={`/players/${player.id}/view`} class="button-link">View Player</a>
        <form method="post">
          <input type="hidden" value="{player.id}" name="id"/>
          <button class="button-link">Remove</button>
        </form> 
      </li>
    {/each}
</ul> -->

<!-- <style>
  /* Shared styles for button and button-link */
  .button-link {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f4f4f4;
    color: #333;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

</style> -->