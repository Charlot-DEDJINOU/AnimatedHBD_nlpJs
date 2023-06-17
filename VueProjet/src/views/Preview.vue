<script>
import HomeView from './HomeView.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import chiffre1 from '../assets/chiffre1.png'
import chiffre2 from '../assets/chiffre2.png'
import chiffre3 from '../assets/chiffre3.png'
import chiffre4 from '../assets/chiffre4.png'
import chiffre5 from '../assets/chiffre5.png'
import chiffre6 from '../assets/chiffre6.png'
import chiffre7 from '../assets/chiffre7.png'
import chiffre8 from '../assets/chiffre8.png'
import chiffre9 from '../assets/chiffre9.png'

export default {
  components: {
    HomeView
  },
  setup() {
    const reponse = ref('')
    const show = ref(false)
    const image = ref(chiffre1)
    const images = [chiffre9, chiffre1, chiffre2 , chiffre3, chiffre4, chiffre5, chiffre6, chiffre7 , chiffre8]
    var timeOut = ""

    const submitCode = () => {

      if (reponse.value === 'Nolan') show.value = true
      else {
        document.getElementsByClassName('code')[0].classList.add('danger')
      }
    }

    const changeImage = () => {
      if(!show.value) 
        image.value = images[(images.indexOf(image.value) + 1 ) % images.length]
      else 
        clearInterval(timeOut)
    }

    onMounted(() => {
      changeImage()
      timeOut = setInterval(changeImage, 1500)
    })

    return {
      reponse,
      submitCode,
      show ,
      image
    }
  }
}
</script>
<template>
  <HomeView v-if="show" />
  <div class="preview" v-if="!show">
    <img :src="image" id="image" />
    <form class="preview_form" @submit.prevent="submitCode">
      <input type="text" placeholder="code secret" v-model="reponse" class="code" />
      <button>Envoyer</button>
    </form>
  </div>
</template>
<style scoped>
.preview {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.preview img {
  width: 300px;
  height: 200px;
  object-fit: contain;
}
.preview form {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.preview form input {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0px 5px;
}
.preview form button {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: #16c953;
  color: white;
}
.danger {
  box-shadow: 0px 0px 3px 1px red;
  outline: red;
  border: none;
}
</style>
