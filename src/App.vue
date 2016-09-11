<template>
  <div id="main">
    <div>
      Rows:
      <button type="button" @click="addRow()">+</button>
    </div>

    <div>
      Columns:
      <button type="button" @click="addColumn()">+</button>

    </div>
    <div>
      <table class="skillgrid">
        <tr v-for="i in table" track-by="$index">
          <td v-for="j in i" track-by="$index" class="skillgrid__td">
            &nbsp;
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const emptyValue = '&nbsp'
const data = () => ({
  table: Array(4).fill(undefined).map(() => {
    return Array(4).fill(undefined).map(() => emptyValue)
  })
})
export default {
  data,
  methods: {
    addRow () {
      const columns = this.table.length
        ? this.table[0].length
        : 0
      this.table.push(Array(columns).fill(emptyValue))
    },
    addColumn () {
      this.table.forEach(row => row.push(emptyValue))
    }
  }
}
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
    height: 50px;
  }
</style>
