<script>
import { shallowReactive } from 'vue'
import HomeView from './HomeView.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
export default {
  components: {
    HomeView
  },
  setup() {
    const reponse = ref('')
    const show = ref(false)
    const images = ['chiffre9.png', 'chiffre1.png', 'chiffre2.png' ,'chiffre3.png','chiffre4.png','chiffre5.png','chiffre6.png','chiffre7.png' ,'chiffre8.png']
    var timeOut = ""

    const submitCode = () => {

      if (reponse.value === 'Nolan') show.value = true
      else {
        document.getElementsByClassName('code')[0].classList.add('danger')
      }
    }

    const changeImage = () => {
      if(!show.value) {
        const ele = document.getElementById('image')
        var src_array = ele.src.split('/')
        const new_chiffre =
        images[(images.indexOf(src_array[src_array.length - 1]) + 1) % images.length]
        src_array[src_array.length - 1] = new_chiffre
        const url = src_array.join('/')

        ele.src = url
      }
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
      show
    }
  }
}
</script>
<template>
  <HomeView v-if="show" />
  <div class="preview" v-if="!show">
    <img src="../assets/chiffre9.png" id="image" />
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
