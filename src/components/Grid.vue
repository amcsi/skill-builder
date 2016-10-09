<template>
  <table class="skillgrid">
    <tr v-for="(row, index) in table">
      <td v-for="cell in row" class="skillgrid__td" v-dragula="cell.elements" bag="cell">
        <div v-for="element in cell.elements">
          <skill :element="element"></skill>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
  import Skill from './Grid/Skill'
  /** @class Grid */
  export default {
    components: {Skill},
    props: {
      table: Array
    },
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style>
  .skillgrid {
    table-layout: fixed;
    border-collapse: collapse;
  }

  .skillgrid__td {
    border: 1px solid grey;
    height: 50px;
    padding: 5px;
    position: relative;
    width: 50px;
  }
</style>
