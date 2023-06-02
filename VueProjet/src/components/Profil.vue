<script>
import Typewriter from 'typewriter-effect/dist/core'
import { onMounted } from 'vue'

export default {
  setup() {
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
        .typeString('Charlot DEDJINOU')
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
            .typeString('Pour ton jour si spécial,<br />')
            .pauseFor(500)
            .typeString('Nous sommes là pour te gâter,<br /><br />')
            .pauseFor(2000)
            .typeString('Que cette journée soit festive,<br />')
            .pauseFor(500)
            .typeString('Et remplie de douceur sur mesure.<br/>')
            .pauseFor(500)
            .typeString("Où l'on célèbre ta venue,<br />")
            .pauseFor(500)
            .typeString('Pour ton jour si spécial,<br />')
            .start()
        })
        .start()
    }

    onMounted(startAnimation)

    return {
      startAnimation
    }
  }
}
</script>
<template>
  <div class="header_site" @click="startAnimation">
    <img src="../assets/open.jpg" class="image" />
    <div class="welcome">
      <h1 id="nom"></h1>
      <p class="bienvenue"></p>
    </div>
  </div>
</template>

<style>
.header_site {
  width: 600px;
  height: 290px;
  display: flex;
  justify-content: space-around;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 800;
  color: black;
}
.header_site .image {
  width: 250px;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 0px 30px 0px;
  border: 10px solid #16c953;
}
.header_site .welcome {
  width: 275px;
}
.header_site .welcome h1 {
  font-weight: bold;
  padding-bottom: 5px;
  line-height: 50px;
}
.cursor_hearder {
  opacity: 0;
}
</style>
