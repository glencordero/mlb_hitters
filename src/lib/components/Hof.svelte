<script>
    export let hof
</script>

{#if hof}
  <p>This player currently sits among fellow legends in the Baseball Hall of Fame</p>
{:else}
  <p>this player is not currently a member of the Baseball Hall of Fame</p>
{/if}