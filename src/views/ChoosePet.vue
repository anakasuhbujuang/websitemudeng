<template>
  <div id="ControlVideo">
    <controlvideo/>
  </div>
</template>

<script>
import controlvideo from '@/components/controlvideo.vue'

export default {
  name: 'ChoosePet',
  components: {
    controlvideo
  }
}
</script>

<style>
#ControlVideo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>