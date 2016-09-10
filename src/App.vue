<template>
  <div id="main">
    <table class="skillgrid">
      <tr v-for="i in 4">
        <td v-for="j in 4" class="skillgrid__td">
          &nbsp;
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

  .skillgrid {
    table-layout: fixed;
    border-collapse: collapse;
  }

  .skillgrid__td {
    border: 1px solid grey;
    padding: 5px;
    width: 50px;
    height: 100px;
  }
</style>
