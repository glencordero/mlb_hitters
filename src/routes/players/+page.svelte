<script>
    export let data
    const {hitters} = data
    // placeholder function warning. Add functionality later.
    function warning(){
      alert('Are you sure? This operation cannot be undone.')
    }
</script>

<h2>MLB Hitters Club</h2>

<ul>
    {#each hitters as hitter}
      <li>
        <p>{hitter.player}</p>
        <a href={`/players/${hitter.id}/view`} class="button-link">View Player</a>
        <button class="button-link" on:click={warning}>Remove</button>
      </li>
    {/each}
</ul>

<style>
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

</style>