<template>
  <div>
    PARAMETER : {{param}}
  </div>
</template>

<script>
export default {
  name: "PostPage",
  computed:{
    param(){
      return this.$route.params
    }
  },
  // created(){
  //   const id = this.$route.params.id;
  //   if(id===undefined){
  //   this.$router.go(-1);
  //   }
  // }
}
</script>

<style scoped>

</style>