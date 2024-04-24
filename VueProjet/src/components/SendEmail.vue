<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import emailjs from 'emailjs-com'
import Crayon_email from './icons/Crayon_email.vue'

export default {
  components: {
    Crayon_email
  },

  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    })

    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))

    const showButton = ref(false)

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    const translateButton = () => {
      const btn = document.getElementsByClassName('button_translate')[0]
      const classes = btn.classList

      if (
        formData.value.name === '' ||
        !isValidEmail(formData.value.email) ||
        formData.value.message === ''
      ) {
        if (classes[1] === 'button_left') {
          btn.classList.remove('button_left')
          btn.classList.add('button_right')
        } else position_button()
      }
    }

    const position_button = () => {
      const btn = document.getElementsByClassName('button_translate')[0]
      btn.classList.remove('button_right')
      btn.classList.add('button_left')
    }

    const submitForm = () => {
      var templateParams = {
        object: formData.value.name,
        message: formData.value.message,
        from_name: 'Samira Bdl',
        reply_to: formData.value.email
      }

      const span = document.getElementsByTagName('span')[0]
      span.innerText = 'Envoie ...'

      emailjs
        .send('service_up5f76g', 'template_4b101yh', templateParams, 'XcmK66pe9381cmhPx')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text)
          span.innerText = 'Envoyer'
        })
        .catch((error) => {
          console.error('Failed to send email:', error)
          span.innerText = 'Echec'
        })

      formData.value.name = ''
      formData.value.email = ''
      formData.value.message = ''
    }

    return {
      formData,
      showButton,
      submitForm,
      translateButton,
      position_button,
      uniColor
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="container_email">
    <div class="enveloppe_email">
      <div class="contenu_email">
        <div class="form_input">
          <label for="name">Object : </label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            placeholder="object"
            @input="position_button"
            required
          />
        </div>
        <div class="form_input">
          <label for="email">Email : </label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            placeholder="votre email"
            @input="position_button"
          />
        </div>
        <textarea
          v-model="formData.message"
          id="message"
          placeholder="Rediger votre message ici"
          @input="position_button"
        ></textarea>
      </div>
    </div>
    <div class="after_email">
      <Crayon_email class="crayon-email" />
      <button
        type="submit"
        class="button_translate button_left"
        @mouseenter="translateButton"
        :style="{ backgroundColor: uniColor }"
      >
        <span>Envoyer</span>
      </button>
    </div>
  </form>
</template>

<style scoped>
.container_email {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  color: black;
  overflow: hidden;
}
.container_email .enveloppe_email {
  width: 375px;
  height: 86%;
  background-image: url(../assets/email.png);
  background-size: cover;
  display: flex;
  justify-content: center;
}
.container_email .enveloppe_email .contenu_email {
  width: 62%;
  height: 35%;
  margin-top: 10px;
  margin-left: 15px;
}
.container_email .enveloppe_email .contenu_email .form_input {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_email .enveloppe_email .contenu_email .form_input input {
  width: 80%;
  height: 100%;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  border: none;
  background: none;
  outline: none;
  color: black;
}
.container_email .enveloppe_email .contenu_email textarea {
  width: 100%;
  height: 80%;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  resize: none;
  border: none;
  outline: none;
}
::-webkit-scrollbar {
  width: 1px;
}
.form_input input :focus {
  background: none;
  outline: none;
}
.container_email .after_email {
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container_email .after_email .crayon-email {
  width: 52%;
  height: 200px;
}
.container_email .after_email .button_translate {
  width: 50px;
  height: 120px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button_left {
  margin-left: 0px;
  transition-property: all;
  transition-duration: 0.1ms;
}
.button_right {
  margin-left: 100px;
  transition-property: all;
  transition-duration: 0.1ms;
}
.container_email .after_email .button_translate span {
  display: inline-block;
  transform: rotate(-90deg);
  color: white;
  font-size: 15px;
  font-weight: bold;
}
@media (max-width: 900px) {
  .container_email .after_email {
    width: 40px;
  }
  .container_email .after_email .crayon-email {
    width: 100%;
  }
  .container_email .after_email .button_translate {
    width: 40px;
  }
}
</style>
