<template>
  <table class="skillgrid">
    <tr v-for="i in table" track-by="$index">
      <td v-for="elements in i" track-by="$index" class="skillgrid__td">
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
<style></style>
