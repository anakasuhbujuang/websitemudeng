<template>
  <div id="app">
    <h1>Put your mouse in the area below, click and drag</h1>
    <main-canvas/>
  </div>
</template>

<script>
import MainCanvas from '@/components/drawing/MainCanvas.vue'
export default {
  name: 'app',
  components: {
    MainCanvas
  }
}
</script>