<script>
    export let form
</script>
  
  <h3>(For admin use only)</h3>
  <h1>Add New Hitter</h1>
  
  <form method="post">
    <p>{form?.message || ""}</p>
    <label>
      Player:
      <input type="text" name="player"/>
    </label>
    <label>
      Hits:
      <input type="number" name="hits"/>
    </label>
    <label>
      Hall of Fame:
      <input type="checkbox" name="hof"/>
    </label>
    <button type="submit">Add Hitter</button>
  </form>
