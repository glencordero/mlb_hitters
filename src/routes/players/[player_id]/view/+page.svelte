<!-- i receive a player, and will call Name component and About component -->
<script>
    import Name from "$lib/components/Name.svelte"
    import About from "$lib/components/About.svelte";
    export let data
    const {hitter} = data
</script>

<h2>Welcome to the MLB Hitters Club!</h2>

<h3>Introducing...</h3>

<Name name={hitter.player}></Name>

<About hof={hitter.hof} hits={hitter.hits}></About>
