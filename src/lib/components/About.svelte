<script>
    import Hof from "$lib/components/Hof.svelte"
    export let hits
    export let hof
</script>

<p>With {hits} hits in his career,</p>

<Hof hof={hof}></Hof>