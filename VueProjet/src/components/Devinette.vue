<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { predict } from '../services/devinetteService'
import Loading from './icons/Loading.vue'

export default {
  components: {
    Loading
  },
  props: {
    devinette: String,
    numAnswer: String
  },
  setup(props, ctx) {
    const reponse = ref('')
    const loading = ref(false)

    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))

    async function submit() {
      try {
        loading.value = true
        const response = await predict({
          userAnswer: reponse.value,
          numDev: props.numAnswer
        })
        loading.value = false
        reponse.value = ''

        ctx.emit('backAnswer', response)
      } catch (error) {
        alert(error)
      }
    }

    return {
      reponse,
      submit,
      uniColor,
      loading
    }
  }
}
</script>
<template>
  <div class="container_devinette">
    <div class="titre">
      <p><span>Devinette </span> avant de continuer</p>
      <img src="../assets/image1.png" />
      <img src="../assets/image1.png" />
    </div>
    <form @submit.prevent="submit">
      <p class="devinette">
        {{ devinette }}
      </p>
      <div>
        <input type="text" placeholder="Votre réponse" v-model="reponse" />
        <button :style="{ backgroundColor: uniColor }">
          <div v-if="loading">
            <Loading />
            <span>Loading...</span>
          </div>
          <span v-else>Envoyer</span>
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.container_devinette {
  width: 100%;
  height: 250px;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.container_devinette .titre {
  width: 90%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container_devinette .titre img {
  object-fit: contain;
  width: 200px;
  height: 90%;
}
.container_devinette .titre p {
  margin-bottom: -50px;
}
.container_devinette .titre p span {
  display: inline-block;
  font-size: 3rem;
}
@media (max-width: 600px) {
  .container_devinette .titre p span {
    font-size: 18px;
    font-weight: bold;
  }
}
.container_devinette form {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container_devinette form .devinette {
  font-size: 1.5rem;
  line-height: 20px;
  margin-bottom: 10px;
  width: 95%;
}
.container_devinette form div {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
}
.container_devinette form input[type='text'] {
  width: 80%;
  height: 50px;
  background-color: white;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 0px 0px 5px;
  border: none;
  outline: none;
  padding-left: 20px;
  font-family: 'Marck Script';
  font-style: normal;
  font-size: 1.2rem;
}
.container_devinette form input[type='text']::placeholder {
  font-size: 1rem;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
}
.container_devinette form button {
  width: 20%;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 5px 5px 0px;
  background-color: #16c953;
  color: white;
  font-size: 1.5rem;
  border: none;
  outline: none;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_devinette form button div {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 900px) {
  .container_devinette {
    width: 95%;
    font-size: 12px;
  }
  .container_devinette .titre {
    width: 100%;
  }
  .container_devinette .titre img {
    width: 100px;
  }
  .container_devinette form .devinette {
    font-size: 15px;
    line-height: 20px;
  }
}
</style>
