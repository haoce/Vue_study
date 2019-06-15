<template>
  <div>
    <select @change="getValue" v-model="text">
      <option
      v-for="(item, index) in option"
      :key="item"
      :value="index"
      >{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['option', 'value'],
  data () {
    return {
      text: '',
    }
  },
  watch: {
    option () {
      this.text = ''
    }
  },
  methods: {
    getValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
select {
  width: 70px
}
</style>