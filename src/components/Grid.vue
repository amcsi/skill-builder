<template>
  <table class="skillgrid">
    <tr v-for="i in table" track-by="$index">
      <td v-for="elements in i" track-by="$index" class="skillgrid__td" bag="cell" v-dragula="elements">
        <div v-for="element in elements">
          <element :element="element"></element>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
  import Element from './Grid/Element.vue'
  /** @class Grid */
  export default {
    components: {Element},
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
