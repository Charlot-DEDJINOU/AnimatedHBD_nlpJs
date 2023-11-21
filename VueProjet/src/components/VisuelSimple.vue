<script>
import Typewriter from 'typewriter-effect/dist/core'
import { downloadImage } from './untils'
import { ref, watch } from 'vue'
import Download from './icons/Download.vue'
import { useStore } from 'vuex'

export default {
  props: {
    tigglerAnimation: Boolean
  },
  setup(props) {
    const store = useStore()

    const startAnimation = () => {
      const recepteur = document.getElementsByClassName('recepteur')[0]
      const destinateur = document.getElementsByClassName('destinateursimple')[0]
      const corps = document.getElementsByClassName('corps')[0]

      var typewriter = new Typewriter(recepteur, {
        loop: false,
        delay: 50,
        cursorClassName: 'cursor_livre'
      })
      typewriter
        .pauseFor(1000)
        .typeString('Ma chère amie ' + store.state.name + ',<br /><br />')
        .pauseFor(500)
        .callFunction(() => {
          stopAnimation(typewriter)
          typewriter = new Typewriter(corps, {
            loop: false,
            delay: 50,
            cursorClassName: 'cursor_livre'
          })
          typewriter
          .pauseFor(500)
            .typeString(
            "Alors que nous entamons cette nouvelle année, je tiens à te transmettre mes vœux les plus chaleureux et mes pensées les plus sincères. Cette année est une toile vierge qui t'offre une multitude d'opportunités et de possibilités. Permets-moi de te guider à travers six paragraphes remplis d'espoir, d'encouragements et de conseils pour cette nouvelle étape de ta vie.<br /><br />"
            )
            .pauseFor(500)
            .typeString(
            "Que cette nouvelle année soit un voyage passionnant rempli de découvertes et de réalisations. Que tu puisses trouver la force et la détermination nécessaires pour poursuivre tes rêves les plus chers et atteindre des sommets que tu n'aurais jamais imaginés."
            )
            .pauseFor(500)
            .pauseFor(500)
            .callFunction(() => {
              stopAnimation(typewriter)
              typewriter = new Typewriter(destinateur, {
                loop: false,
                delay: 50,
                cursorClassName: 'cursor_livre'
              })
              typewriter
               .typeString('Avec tout mon amour et toute mon amitié,<br />')
               .pauseFor(500)
               .typeString('<b>Espoir Destiny</b>')
               .callFunction(() => {
                  stopAnimation(typewriter)
                  store.commit('setIdScroll', 'download6')
                })
               .start()
            })
            .start()
        })
        .start()
    }

    const stopAnimation = (n) => {
      const cursor = document.getElementsByClassName('cursor_livre')[0]
      cursor.classList.remove('cursor_livre')
      cursor.classList.add('after_typed')
      n.stop()
    }

    watch(() => props.tigglerAnimation, startAnimation)

    return {
      startAnimation,
      stopAnimation,
      downloadImage
    }
  },
  components: { Download }
}
</script>

<template>
  <div id="visuelsimple" class="simple">
        <div class="recepteur"></div>
        <div class="corps"></div>
        <div class="destinateursimple"></div>
  </div>
  <Download @click="downloadImage('visuelsimple')" id="download6" />
</template>
<style>
.simple {
    margin-top: 20px;
    padding: 20px;
    width: 95%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    font-family: 'Marck Script';
    font-style: normal;
    font-weight: 500;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);
}
.simple .recepteur {
    width: 100%;
    height: 5%;
    font-size: 25px;
}
.simple .corps {
    width: 100%;
    height: 75%;
    font-size: 20px;
}
.simple .destinateursimple {
    width: 100%;
    height: 10%;
    font-size: 20px;
    font-weight: 500;
}
.cursor_livre::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 56px;
  height: 100px;
  background-image: url('../assets/crayon_livre.png');
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
