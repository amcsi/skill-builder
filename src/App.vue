<template>
  <div id="main" class="skillgrid">

    <div>
      <button type="button" @click="createElement()">Create element</button>
    </div>

    <div class="rowAddButtons">
      <button type="button" @click="prependRow()">+</button>
    </div>

    <div class="skillgrid__middle">
      <div>
        <button type="button" @click="prependColumn()">+</button>
      </div>

      <div class="rowAddButtons">
        <grid :table="table"></grid>
      </div>

      <div>
        <button type="button" @click="addColumn()">+</button>
      </div>
    </div>

    <div class="rowAddButtons">
      <button type="button" @click="addRow()">+</button>
    </div>

  </div>
</template>

<script>
  import grid from './components/Grid.vue'
  import Element from './Element'
  import randomColor from './util/randomColor'

  const createEmptyValue = () => ({elements: []})
  const data = () => ({
    table: Array(4).fill(undefined).map(() => {
      return Array(4).fill(undefined).map(() => createEmptyValue())
    })
  })
  export default {
    data,
    components: { grid },
    created () {
      this.createRow = () => {
        const columns = this.table.length
          ? this.table[0].length
          : 0
        return Array(columns).fill(null).map(() => createEmptyValue())
      }
    },
    methods: {
      prependRow () {
        this.table.unshift(this.createRow())
      },
      addRow () {
        this.table.push(this.createRow())
      },
      prependColumn () {
        this.table.forEach(row => row.unshift(createEmptyValue()))
      },
      addColumn () {
        this.table.forEach(row => row.push(createEmptyValue()))
      },
      createElement () {
        if (this.table.length) {
          const row = this.table[0]
          if (row.length) {
            row[0].elements.push(new Element(randomColor()))
          }
        }
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
  position: relative;
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

.skillgrid__middle {
  display: flex;
  align-items: center;
}

  .rowAddButtons {
    text-align: center;
  }
</style>
