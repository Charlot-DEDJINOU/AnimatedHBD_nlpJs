<script>
import { useStore } from 'vuex';
import { computed , ref } from 'vue';

export default {
  props: {
    devinette: String,
    numAnswer: String
  },
  setup(props, ctx) {
    const reponse = ref('')

    const store = useStore()

    const uniColor = ref(computed(()=> store.state.uniColor))

    async function submit() {
      try {
        const response = await fetch(
          'http://localhost:3000/api/correctAnswer?numDev=' +
            props.numAnswer +
            '&userAnswer=' +
            reponse.value
        )
        const data = await response.json()
        reponse.value = ''
        ctx.emit('backAnswer', data)
      } catch (error) {
        alert(error)
      }
    }

    return {
      reponse,
      submit , 
      uniColor
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
        <button :style="{backgroundColor : uniColor}">Envoyer</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.container_devinette {
  width: 940px;
  height: 250px;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 50px;
}
.container_devinette form {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container_devinette form .devinette {
  font-size: 20px;
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
  font-size: 25px;
}
.container_devinette form input[type='text']::placeholder {
  font-size: 20px;
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
  font-size: 25px;
  border: none;
  outline: none;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
}
</style>
