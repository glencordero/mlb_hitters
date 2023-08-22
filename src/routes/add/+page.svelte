<script>
    export let form
</script>
  
  <h3>(For admin use only)</h3>
  <h1>Add New Player</h1>
  
  <form method="post">
    <p>{form?.message || ""}</p>
    <div class="grid grid-cols-1 gap-4">
      <label class="flex">
        <p class="w-16">Player:</p>
        <input class="border-slate-300 border-2" type="text" name="name"/>
      </label>
      <label class="flex">
        <p class="w-16">Hits:</p>
        <input class="border-slate-300 border-2" type="number" name="hits"/>
      </label>
      <label class="flex">
        <p class="mr-4">Hall of Fame:</p>
        <input type="checkbox" name="hof"/>
      </label>
      <div class="flex ml-20">
        <button class="rounded-full bg-indigo-200 px-6 py-2 text-indigo-800 font-bold text-lg border-2 border-indigo-800 hover:bg-indigo-500 hover:text-white hover:drop-shadow-2xl focus:outline-none focus:ring focus:ring-violet-300" type="submit">Add Player</button>
      </div>
    </div>
  </form>
