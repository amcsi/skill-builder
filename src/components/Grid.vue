<template>
  <table class="skillgrid">
    <tr v-for="i in table" track-by="$index">
      <td v-for="j in i" track-by="$index" class="skillgrid__td">
        &nbsp;
      </td>
    </tr>
  </table>
</template>
<script>
  /** @class Grid */
  export default {
    props: {
      table: Array
    },
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style></style>
