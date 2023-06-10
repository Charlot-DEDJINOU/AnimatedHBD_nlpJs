<script>
import Lune from './icons/Lune.vue'
import Solar from './icons/Solar.vue'
import SemiSolar from './icons/SemiSolar.vue'
import IconPaper from './icons/IconPaper.vue'
import { useTheme } from 'vuetify'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    Lune,
    Solar,
    SemiSolar,
    IconPaper
  },

  setup() {
    const theme = useTheme()
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))

    const toggleTheme = (fond) => {
      theme.global.name.value = fond
    }

    const toggleColor = (color) => {
      store.dispatch('Color', color)
    }

    const declancheClick = () => {
      const input_file = document.getElementById('file2')
      input_file.click()
    }

    return {
      toggleTheme,
      uniColor,
      toggleColor,
      declancheClick
    }
  }
}
</script>

<template>
  <div class="global">
    <div class="color">
      <span><Solar @click="toggleTheme('light')" /></span>
      <span><Lune @click="toggleTheme('dark')" /></span>
      <span class="color0" @click="toggleColor('pink')"></span>
      <span class="color1" @click="toggleColor('#16c953')"></span>
      <span class="color2" @click="toggleColor('#cc1e1e')"></span>
      <span class="color3" @click="toggleColor('#c916a2')"></span>
      <span class="color4" @click="toggleColor('#c0da17')"></span>
      <span class="color5" @click="toggleColor('#b24646')"></span>
      <span class="color6" @click="toggleColor('#094eff')"></span>
    </div>
    <div class="upload">
      <div class="file" @click="declancheClick">
        <span class="text">un fichier</span>
        <span><IconPaper class="paper" /></span>
      </div>
      <button class="button" :style="{ backgroundColor: uniColor }" @click="declancheClick">
        Changer photo
      </button>
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
  font-family: 'Marck Script';
  font-style: normal;
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
  background-color: #c0da17;
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
  background-color: rgba(255, 255, 255, 0.635);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.global .upload .file:hover {
  cursor: pointer;
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
  color: white;
  font-size: 25px;
  border: none;
}
.global .ballon3 {
  width: 100px;
  height: 200px;
  object-fit: contain;
}
</style>
