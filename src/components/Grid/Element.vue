<template>
  <div class="element" style="{{ 'background-color:#' + element.getColor() }}">

  </div>
</template>
<script>
  import ElementClass from '../../Element'
  /** @class Element */
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
  }
</style>
