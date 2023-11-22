<script>
import Typewriter from 'typewriter-effect/dist/core'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))

    const startAnimation = () => {
      const name = document.getElementById('nom')
      const text = document.getElementsByClassName('bienvenue')[0]

      var typewriter = new Typewriter(name, {
        loop: false,
        delay: 200,
        cursorClassName: 'cursor_hearder'
      })

      typewriter
        .pauseFor(1000)
        .typeString(store.state.fullName)
        .pauseFor(500)
        .callFunction(() => {
          typewriter = new Typewriter(text, {
            loop: false,
            delay: 120,
            cursorClassName: 'cursor_hearder'
          })

          typewriter
            .typeString('Sois la bienvenue en ce lieu,<br />')
            .pauseFor(500)
            .typeString("Où l'on célèbre ta venue,<br />")
            .pauseFor(500)
            .typeString("Où l'amitié est célébrée,<br />")
            .pauseFor(500)
            .typeString('Je te souhaite un joyeux anniversaire.<br /><br />')
            .pauseFor(2000)
            .typeString('Chaque pixel résonne de bonheur,<br />')
            .pauseFor(500)
            .typeString('Comme un doux écho de notre cœur.<br />')
            .pauseFor(500)
            .typeString('Que cette journée soit pleine de sourires,<br />')
            .pauseFor(500)
            .typeString('À toi, qui mérites les plus beaux souvenirs !<br />')
            .start()
        })
        .start()
    }

    const url_image = ref(null)
    const InputChange = (event) => {
      const name_file = event.target.files[0]

      if (name_file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const selectedFile = e.target.result
          url_image.value = selectedFile
        }
        reader.readAsDataURL(name_file)
      } else {
        url_image.value = null
      }
    }

    onMounted(startAnimation)

    return {
      startAnimation,
      uniColor,
      InputChange,
      url_image
    }
  }
}
</script>
<template>
  <div class="header_site">
    <img :src="url_image" class="image" :style="{ borderColor: uniColor }" v-if="url_image" />
    <img
      src="../assets/saou2_profil.jpg"
      class="image"
      :style="{ borderColor: uniColor }"
      v-if="!url_image"
    />
    <div class="welcome">
      <div id="nom" :style="{ color: uniColor }"></div>
      <p class="bienvenue"></p>
    </div>
  </div>
  <input type="file" id="file2" @change="InputChange" accept="image/*" hidden />
</template>

<style>
.header_site {
  width: 600px;
  height: 290px;
  display: flex;
  justify-content: space-around;
  font-family: 'Marck Script';
  font-style: normal;
  font-size: 18px;
}
.header_site .image {
  width: 250px;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 0px 30px 0px;
  border: 10px solid black;
}
.header_site .welcome {
  width: 275px;
}
.header_site .welcome #nom {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 5px;
  line-height: 30px;
}
.cursor_hearder {
  opacity: 0;
}
@media (max-width: 900px) {
  .header_site {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header_site .image {
    margin: 20px 0px;
  }
  .header_site .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 100%;
  }
  .header_site .welcome .bienvenue {
    text-align: center;
  }
}
</style>
