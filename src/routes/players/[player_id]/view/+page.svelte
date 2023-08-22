<!-- i receive a player, and will call Name component and About component -->
<script>
    import Name from "$lib/components/Name.svelte"
    import About from "$lib/components/About.svelte";
    export let data
    const {player} = data
    console.log(player)
</script>

<h2>Welcome to the MLB Hitters Club!</h2>

<h3>Introducing...</h3>

<Name name={player.name} />

<About hof={player.hof} hits={player.hits} />
