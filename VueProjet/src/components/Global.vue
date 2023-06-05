<script>
import Lune from './icons/Lune.vue'
import Solar from './icons/Solar.vue'
import SemiSolar from './icons/SemiSolar.vue'
import IconPaper from './icons/IconPaper.vue'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

export default {
  components: {
    Lune,
    Solar,
    SemiSolar,
    IconPaper
  },

  setup() {
    const theme = useTheme()

    const toggleTheme = (fond) => {
      theme.global.name.value = fond ;
    }

    return {
      toggleTheme
  }
  }
}
</script>
<template>
  <div class="global">
    <div class="color">
      <span><Solar @click="toggleTheme('dark')"/></span>
      <span><Lune  @click="toggleTheme('light')"/></span>
      <span class="color0"></span>
      <span class="color1"></span>
      <span class="color2"></span>
      <span class="color3"></span>
      <span class="color4"></span>
      <span class="color5"></span>
      <span class="color6"></span>
    </div>
    <div class="upload">
      <div class="file">
        <span class="text">upload</span>
        <span><IconPaper class="paper" /></span>
      </div>
      <button class="button" @click="fake">Upload</button>
    </div>
    <img src="../assets/ballon2.png" class="ballon3" />
  </div>
</template>

<style>
.global {
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.global .color {
  width: 230px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.global .color span {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 5px 20px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.global .color .color0 {
  background-color: pink;
}
.global .color .color1 {
  background-color: #16c953;
}
.global .color .color2 {
  background-color: #cc1e1e;
}
.global .color .color3 {
  background-color: #c916a2;
}
.global .color .color4 {
  background-color: #dcff07;
}
.global .color .color5 {
  background-color: #b24646;
}
.global .color .color6 {
  background-color: #094eff;
}
.global .upload {
  width: 180px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.global .upload .file {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.global .upload .file .text {
  opacity: 0.5;
}
.global .upload .file .paper {
  transform: rotate(30deg);
  height: 20px;
  opacity: 0.5;
}
.global .upload .button {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: #16c953;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
}
.global .ballon3 {
  width: 100px;
  height: 200px;
  object-fit: contain;
}
</style>
