<script>
import Typewriter from 'typewriter-effect/dist/core'
import downloadImage from './untils'
import { ref } from 'vue'

export default {
  setup() {
    const showCrayon = ref(false)

    const startAnimation = () => {
      const targetElement = document.getElementById('target_rose')
      const destinateur = document.getElementsByClassName('destinateur_bouquet')[0]
      const recepteur = document.getElementsByClassName('recepteur_bouquet')[0]

      var typewriter = new Typewriter(targetElement, {
        loop: false,
        delay: 100,
        cursorClassName: 'cursor_bouquet'
      })

      typewriter
        .pauseFor(1000)
        .typeString(" En ce jour béni où tu grandis d'un an,<br />")
        .pauseFor(500)
        .typeString('Je veux te dire que tu es si importante, <br />')
        .pauseFor(500)
        .typeString('Ta présence est une bénédiction pour moi, <br />')
        .pauseFor(500)
        .typeString('Et je suis fier de te connaître chaque jour.<br /><br />')
        .pauseFor(2000)
        .typeString(' Joyeux anniversaire à toi, mon amie, <br />')
        .pauseFor(500)
        .typeString("Que ce jour soit à l'image de ta générosité,<br />")
        .pauseFor(500)
        .typeString('Et que chaque seconde de cette nouvelle année, <br />')
        .pauseFor(500)
        .typeString('Soit remplie de bonheur, de paix et de sérénité.<br /><br />')
        .pauseFor(2000)
        .typeString(' Que tous tes rêves se réalisent, <br />')
        .pauseFor(500)
        .typeString("Que chaque jour soit un cadeau qui t'enchante, <br />")
        .pauseFor(500)
        .typeString(" Et que cette nouvelle année soit emplie d'amour, <br />")
        .pauseFor(500)
        .typeString('Pour que ta vie soit toujours plus belle, toujours plus douce.')
        .pauseFor(1000)
        .callFunction(() => {
          stopAnimation(typewriter)

          const bouquet = document.getElementsByClassName('bouquet')[0]
          bouquet.id = 'scaled_bouquet'

          typewriter = new Typewriter(destinateur, {
            loop: false,
            delay: 100,
            cursorClassName: 'cursor_bouquet'
          })

          typewriter
            .pauseFor(1000)
            .typeString(' Message d’un admirateur secret ')
            .pauseFor(1000)
            .callFunction(() => {
              stopAnimation(typewriter)

              typewriter = new Typewriter(recepteur, {
                loop: false,
                delay: 200,
                cursorClassName: 'cursor_bouquet'
              })

              typewriter
                .pauseFor(1000)
                .typeString(' À Samira Bdl')
                .callFunction(() => {
                  stopAnimation(typewriter)

                  showCrayon.value = true
                })
                .start()
            })
            .start()
        })
        .start()
    }

    const stopAnimation = (n) => {
      const cursor = document.getElementsByClassName('cursor_bouquet')[0]
      cursor.classList.remove('cursor_bouquet')
      cursor.classList.add('after_typed')

      n.stop()
    }

    return {
      startAnimation,
      stopAnimation,
      showCrayon,
      downloadImage
    }
  }
}
</script>

<template>
    <div class="container_visuel_bouquet" @click="startAnimation" id="visuelRose">
      <div class="text" id="target_rose"></div>
      <div class="fin">
        <img src="../assets/bouquet.png" class="bouquet" />
        <div class="mot_de_fin">
          <span class="destinateur_bouquet"></span>
          <span class="recepteur_bouquet"></span>
        </div>
        <img src="../assets/crayon_bouquet_oblique.png" class="crayon" v-show="showCrayon" />
      </div>
    </div>
</template>

<style>
.container_visuel_bouquet {
  background-image: url(../assets/whitepaper.png);
  background-size: cover;
  width: 469px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 600;
  color: #000000;
}
.container_visuel_bouquet .text {
  width: 290px;
  height: 272px;
  font-size: 14px;
  line-height: 17px;
  margin-top: 60px;
  margin-left: -15px;
}
.container_visuel_bouquet .fin {
  margin-top: 15px;
  margin-left: 30px;
  width: 360px;
  height: 80px;
  display: flex;
}
.container_visuel_bouquet .fin .bouquet {
  width: 80px;
  height: 85px;
  transform: scale(0);
  transition: transform 2s ease-in-out;
  object-fit: cover;
}
#scaled_bouquet {
  transform: scale(1);
}
.container_visuel_bouquet .fin .mot_de_fin {
  width: 200px;
  height: 100%;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.container_visuel_bouquet .fin .crayon {
  width: 70px;
  height: 100px;
  object-fit: fill;
  margin-top: -30px;
}
.container_visuel_bouquet .fin .mot_de_fin .destinateur_bouquet {
  display: inline-block;
  font-size: 15px;
  line-height: 19px;
}
.container_visuel_bouquet .fin .mot_de_fin .recepteur_bouquet {
  display: inline-block;
  font-size: 30px;
  line-height: 37px;
}
.cursor_bouquet {
  color: white;
}
.cursor_bouquet::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 56px;
  height: 100px;
  background-image: url('../assets/crayon_bouquet.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate3d(2, -5, 2, 180deg);
  margin-left: 2px;
  animation: typing 1s infinite;
}

@keyframes typing {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
.after_typed {
  opacity: 0;
}
</style>
