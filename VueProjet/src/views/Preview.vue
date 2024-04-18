<script>
import HomeView from './HomeView.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { login } from '../services/authService'
import Loading from '../components/icons/Loading.vue'

export default {
  components: {
    HomeView,
    Loading
  },
  setup() {
    const reponse = ref('')
    const show = ref(false)
    const showError = ref(false)
    const count = ref(0)
    const loading = ref(false)
    var timeOut = ''

    const submitCode = async () => {
      loading.value = true
      const response = await login({ password: reponse.value })
      loading.value = false
      if (response.status === 200 && response.message === 'Authentication successful')
        show.value = true
      else {
        reponse.value = ''
        showError.value = true
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
      showError,
      loading
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
        <button>
          <div v-if="loading">
            <Loading />
            <span>Loading...</span>
          </div>
          <span v-else>S'authentifier</span>
        </button>
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
  border: 1px solid white;
  padding: 0px 5px;
}
.preview form button {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #16c953;
  color: white;
}
.preview form button div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.alert-danger {
  background-color: rgb(93, 33, 33);
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  width: 100%;
  margin: 10px 0px;
  color: rgb(226, 97, 97);
}
</style>
