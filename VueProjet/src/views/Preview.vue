<script>
import HomeView from './HomeView.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { login } from '../services/authService'

export default {
  components: {
    HomeView
  },
  setup() {
    const reponse = ref('')
    const show = ref(false)
    const showError = ref(false)
    const count = ref(0)
    var timeOut = ''

    const submitCode = async () => {
      const response = await login({ password : reponse.value })
      if (response.status === 200 && response.message === "Authentication successful") show.value = true
      else {
        reponse.value = ''
        showError.value = true
        document.getElementsByClassName('code')[0].classList.add('danger')
      }
    }

    const changeImage = () => {
      if (!show.value) count.value = (count.value + 1) % 9
      else clearInterval(timeOut)
    }

    onMounted(() => {
      changeImage()
      timeOut = setInterval(changeImage, 1500)
    })

    return {
      reponse,
      submitCode,
      show,
      count,
      showError
    }
  }
}
</script>
<template>
  <div>
    <HomeView v-if="show" />
    <div class="preview" v-if="!show">
      <img src="../assets/chiffre1.png" id="image" v-if="count == 0" />
      <img src="../assets/chiffre2.png" id="image" v-if="count == 1" />
      <img src="../assets/chiffre3.png" id="image" v-if="count == 2" />
      <img src="../assets/chiffre4.png" id="image" v-if="count == 3" />
      <img src="../assets/chiffre5.png" id="image" v-if="count == 4" />
      <img src="../assets/chiffre6.png" id="image" v-if="count == 5" />
      <img src="../assets/chiffre7.png" id="image" v-if="count == 6" />
      <img src="../assets/chiffre8.png" id="image" v-if="count == 7" />
      <img src="../assets/chiffre9.png" id="image" v-if="count == 8" />
      <form class="preview_form" @submit.prevent="submitCode">
        <input type="password" placeholder="code secret" v-model="reponse" class="code" />
        <div class="alert-danger" v-if="showError">Le code secret est incorrect</div>
        <button>Envoyer</button>
      </form>
    </div>
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
  min-height: 100px;
  height: auto;
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
  box-shadow: 0px 0px 3px 1px rgba(148, 68, 68, 0.744);
  outline: rgba(148, 68, 68, 0.744);
  border: none;
}
.alert-danger {
  background-color: rgba(148, 68, 68, 0.744);
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  width: 100%;
  margin: 10px 0px;
  color : rgb(153, 14, 14);
}
</style>
