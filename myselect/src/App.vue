<template>
  <div id="app">
    <my-select
    :option="getCityData"
    v-model="cityNum"
    ></my-select>
    <my-select
    :option="getAreaData"
    v-model="areaNum"
    ></my-select>
    {{ getZipData }}
  </div>
</template>

<script>
import MySelect from './components/my-select.vue'

export default {
  name: 'app',
  components: {
    MySelect
  },
  data () {
    return {
      cityData: [
        {
          name: '基隆市',
          areas: [
            { name: '仁愛區', zip: '200' },
            { name: '信義區', zip: '201' },
            { name: '中正區', zip: '202' },
            { name: '中山區', zip: '203' },
            { name: '安樂區', zip: '204' },
            { name: '暖暖區', zip: '205' },
            { name: '七堵區', zip: '206' },
          ],
        },
        {
          name: '台北市',
          areas: [
            { name: '中正區', zip: '300' },
            { name: '大同區', zip: '301' },
            { name: '中山區', zip: '302' },
            { name: '松山區', zip: '303' },
            { name: '大安區', zip: '304' },
            { name: '萬華區', zip: '305' },
            { name: '信義區', zip: '306' },
            { name: '士林區', zip: '307' },
            { name: '北投區', zip: '308' },
            { name: '內湖區', zip: '309' },
            { name: '南港區', zip: '310' },
            { name: '文山區', zip: '311' },
          ],
        },
        {
          name: '新竹市',
          areas: [
            { name: '新竹市', zip: '400' },
          ],
        }
      ],
      cityNum: '',
      areaNum: ''
    }
  },
  computed: {
    getCityData () {
      return this.cityData.map(city => city.name)
    },
    getAreaData () {
      let area = this.cityData[this.cityNum]
      if (!area) return []
      return area.areas.map(area => area.name)
    },
    getZipData () {
      let area = this.cityData[this.cityNum]
      if (!area) return ''
      let zip = area.areas[this.areaNum]
      if (!zip) return ''
      return this.cityData[this.cityNum].areas[this.areaNum].zip
    }
  },
  watch: {
    cityNum () {
      this.areaNum = ''
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 45%; 
  display: flex;
}
</style>
