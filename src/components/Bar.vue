<template>
  <div style="font-size:50px; color:blue">
    Bar
    {{param}}
  </div>
</template>

<script>
export default {
  name: 'Bar',
  computed:{
    param(){
      return this.$route.params
    }
  }
}
</script>