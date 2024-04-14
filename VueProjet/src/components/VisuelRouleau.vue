<script>
import Typewriter from 'typewriter-effect/dist/core'
import { downloadImage } from './untils'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import Download from './icons/Download.vue'

export default {
  components: {
    Download
  },
  props: {
    triggerAnimationRouleau: Boolean
  },
  setup(props) {
    const showCrayon = ref(false)
    const showRose = ref(false)
    const store = useStore()

    const startAnimationRouleau = () => {
      const targetElement = document.getElementById('target_rouleau')
      const destinateur = document.getElementsByClassName('destinateur_rouleau')[0]
      const recepteur = document.getElementsByClassName('recepteur_rouleau')[0]

      var typewriter = new Typewriter(destinateur, {
        loop: false,
        delay: 150,
        cursorClassName: 'cursor_rouleau'
      })

      typewriter
        .pauseFor(1000)
        .typeString(' De la part d’un ami qui t’apprécie ')
        .pauseFor(1000)
        .callFunction(() => {
          stopAnimation(typewriter)

          typewriter = new Typewriter(recepteur, {
            loop: false,
            delay: 250,
            cursorClassName: 'cursor_rouleau'
          })

          typewriter
            .pauseFor(1000)
            .typeString(' À ' + store.state.name)
            .callFunction(() => {
              stopAnimation(typewriter)

              typewriter = new Typewriter(targetElement, {
                loop: false,
                delay: 50,
                cursorClassName: 'cursor_rouleau'
              })

              typewriter
                .pauseFor(1000)
                .typeString('Sur ce rouleau de la vie défilant,<br />')
                .pauseFor(500)
                .typeString('Comme une rose, choix délicat, charmant.<br />')
                .pauseFor(500)
                .typeString('Les pétales caressent la douce décision,<br />')
                .pauseFor(500)
                .typeString('Accord harmonieux, symphonie de la passion.<br /><br />')
                .pauseFor(2000)
                .typeString('Ta famille guide comme une étoile brillante,<br />')
                .pauseFor(500)
                .typeString('Dans le ciel des choix, une voie prédominante.<br />')
                .pauseFor(500)
                .typeString("Je m'incline devant l'acceptation sincère,<br />")
                .pauseFor(500)
                .typeString("Respectant le chemin qu'il faut parcourir.<br /><br />")
                .pauseFor(2000)
                .typeString('Chère amie, que ce poème soit un écho,<br />')
                .pauseFor(500)
                .typeString('De compréhension profonde, un doux flambeau.<br />')
                .pauseFor(500)
                .typeString("Ta décision, une perle dans l'océan des cieux,<br />")
                .pauseFor(500)
                .typeString('Acceptation, un jardin de vœux épanouis.<br /><br />')
                .pauseFor(2000)
                .typeString('Que chaque rose symbolise ce consentement,<br />')
                .pauseFor(500)
                .typeString('Un amour qui transcende, éternellement.<br />')
                .pauseFor(500)
                .typeString('Dans ce rouleau de la vie, je comprends,<br />')
                .typeString('Ton bonheur réside dans les choix du cœur.<br />')
                .pauseFor(2000)
                .callFunction(() => {
                  showRose.value = true
                })
                .pauseFor(1000)
                .callFunction(() => {
                  showCrayon.value = true
                  stopAnimation(typewriter)

                  const rose = document.getElementsByClassName('rose')[0]
                  rose.id = 'scaled_rose'
                  store.commit('setNumberSession', 3)
                  store.commit('setIdScroll', 'devinette3')
                })
                .start()
            })
            .start()
        })
        .start()
    }

    const stopAnimation = (n) => {
      const cursor = document.getElementsByClassName('cursor_rouleau')[0]
      cursor.classList.remove('cursor_rouleau')
      cursor.classList.add('after_typed')

      n.stop()
    }

    watch(() => props.triggerAnimationRouleau, startAnimationRouleau)

    return {
      startAnimationRouleau,
      stopAnimation,
      showCrayon,
      showRose,
      downloadImage
    }
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="container_visuel_rouleau" id="visuelRouleau">
      <div class="visuel_rouleau">
        <div class="destinateur_rouleau"></div>
        <div class="text" id="target_rouleau"></div>
        <div class="fin">
          <span class="recepteur_rouleau"></span>
          <img src="../assets/rose.png" class="rose" v-show="showRose" />
        </div>
      </div>
      <div class="content_image">
        <img src="../assets/crayon_rouleau_oblique.png" class="crayon" v-show="showCrayon" />
      </div>
    </div>
    <div class="down">
      <Download @click="downloadImage('visuelRouleau')" id="download3" />
    </div>
  </div>
</template>
<style>
.container_visuel_rouleau {
  width: 450px;
  height: 507px;
  display: flex;
}
@media (max-width: 900px) {
  .container_visuel_rouleau {
    margin-left: 40px;
  }
}
.container_visuel_rouleau .visuel_rouleau {
  width: 400px;
  height: 470px;
  background-image: url(../assets/rouleau.png);
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
  color: black;
}
.container_visuel_rouleau .content_image {
  width: 110px;
  height: 507px;
  margin-left: -70px;
  display: flex;
  align-items: center;
}
.container_visuel_rouleau .content_image .crayon {
  width: 75%;
  height: 120px;
  margin-bottom: -118px;
  object-fit: fill;
}
.container_visuel_rouleau .visuel_rouleau .destinateur_rouleau {
  width: 100%;
  height: 8%;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_visuel_rouleau .visuel_rouleau .text {
  width: 75%;
  height: 65%;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  margin-left: 50px;
}
.container_visuel_rouleau .visuel_rouleau .fin {
  width: 60%;
  height: 15%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_visuel_rouleau .visuel_rouleau .fin .recepteur_rouleau {
  display: inline-block;
  font-size: 25px;
  line-height: 25px;
}
.container_visuel_rouleau .visuel_rouleau .fin .rose {
  width: 57.66px;
  height: 87.49px;
  transform: scale(1.5);
  margin-top: 0px;
  transition: transform 2s ease-in-out;
  object-fit: cover;
}
.cursor_rouleau {
  color: rgba(146, 147, 126, 0);
}
.cursor_rouleau::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 56px;
  height: 100px;
  background-image: url('../assets/crayon_rouleau.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate3d(2, -5, 2, 180deg);
  margin-left: 2px;
  animation: typing 1s infinite;
  z-index: 10;
}
.down {
  width: 480px;
  margin-top: -30px;
  display: flex;
  justify-content: center;
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
#scaled_rose {
  transform: scale(0.7) matrix(0.83, -0.56, 0.55, 0.84, 0, 0) rotate(1800deg);
}
</style>
