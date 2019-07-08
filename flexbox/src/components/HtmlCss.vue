<template>
  <div class="main">
    <div class="text">
      <div>
        HelloWorld
      </div>
      <button @click="getVuetify">go vuetify</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getVuetify () {
      this.$emit('getvalue')
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
}
.text {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>