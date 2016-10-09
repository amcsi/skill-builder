<template>
  <div class="element" v-bind:style="{ backgroundColor: '#' + element.getColor() }">

  </div>
</template>
<script>
  import ElementClass from '../../Element'
  /** @class Skill */
  export default {
    props: {
      element: ElementClass
    }
  }
</script>
<style>
  .element {
    width: 50px;
    height: 50px;
    cursor: move;
  }
</style>
