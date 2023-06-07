<script>
import Typewriter from 'typewriter-effect/dist/core'
import { downloadImage } from './untils'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
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
                .typeString('Même si mon message est en retard,<br />')
                .pauseFor(500)
                .typeString('Il est sincère et vient du fond du cœur,<br />')
                .pauseFor(500)
                .typeString('Pour te souhaiter une journée spéciale,<br />')
                .pauseFor(500)
                .typeString('Et te rappeler que tu es aimée avec ferveur.<br /><br />')
                .pauseFor(2000)
                .typeString(' Ta présence illumine nos vies,<br />')
                .pauseFor(500)
                .typeString('Ton sourire fait briller nos jours,<br />')
                .pauseFor(500)
                .typeString('Même si le temps a filé, sache,<br />')
                .pauseFor(500)
                .typeString('Que notre amitié reste toujours.<br /><br />')
                .pauseFor(2000)
                .typeString(' Je te souhaite une année merveilleuse,<br />')
                .pauseFor(500)
                .typeString('Remplie de moments de joie et de bonheur,<br />')
                .pauseFor(500)
                .typeString('Que chaque jour soit une aventure précieuse,<br />')
                .pauseFor(500)
                .typeString('Et que tes rêves se réalisent en douceur.<br /><br />')
                .pauseFor(2000)
                .typeString('Pardonne-moi pour ce retard indésiré,<br />')
                .pauseFor(500)
                .typeString("Mais l'amitié n'a pas de limite de temps,<br />")
                .pauseFor(500)
                .typeString('Tu es une amie chère et appréciée,<br />')
                .pauseFor(500)
                .typeString('Je te souhaite un bel anniversaire, vraiment.')
                .pauseFor(2000)
                .callFunction(() => {
                  showRose.value = true
                })
                .pauseFor(500)
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
</template>

<style>
.container_visuel_rouleau {
  width: 450px;
  height: 507px;
  display: flex;
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
