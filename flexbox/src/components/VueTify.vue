<template>
<v-container fluid  class="main">
  <v-layout justify-center class="text">
    <v-flex xs1 class="item">
      <v-layout column justify-center class="text">
        <div>
          <span>HelloWorld</span>
          <button @click="getCss">go css</button>
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    getCss () {
      this.$emit('getvalue')
    }
  }
}
</script>
<style scoped>
.main {
  height: 100vh;
  text-align: center;
}
.text {
  height: 100%;
}
.item {
  height: 100%;
}
</style>
