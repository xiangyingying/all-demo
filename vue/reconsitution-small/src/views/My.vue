<template>
  <div id="app">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
          <el-amap-circle-marker v-for="(marker,index) in markers" :key="index" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-circle-marker>
        </el-amap>
     </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg:"地图指引",
          zoom: 12,
          center: [114.504216, 30.552472],
          markers: [
            {
              center: [114.504216, 30.552472],
              radius: 20,
              fillOpacity: 1,
              fillColor: '#FF0000DD',
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ]
        }
      }
}
</script>

<style>
  .amap-page-container {
      height: 400px;
    }
</style>