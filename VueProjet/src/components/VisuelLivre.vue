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

    const showCrayon = ref(false)
    const startAnimation = () => {
      const page1 = document.getElementsByClassName('page1')[0]
      const page2 = document.getElementsByClassName('page2')[0]
      const page3 = document.getElementsByClassName('page3')[0]
      const page4 = document.getElementsByClassName('page4')[0]

      var typewriter = new Typewriter(page1, {
        loop: false,
        delay: 50,
        cursorClassName: 'cursor_livre'
      })
      typewriter
        .pauseFor(1000)
        .typeString('Ma chère amie ' + store.state.name + ',<br /><br />')
        .pauseFor(500)
        .typeString(
          "Alors que nous entamons cette nouvelle année, je tiens à te transmettre mes vœux les plus chaleureux et mes pensées les plus sincères. Cette année est une toile vierge qui t'offre une multitude d'opportunités et de possibilités. Permets-moi de te guider à travers six paragraphes remplis d'espoir, d'encouragements et de conseils pour cette nouvelle étape de ta vie.<br /><br />"
        )
        .pauseFor(500)
        .typeString(
          "Que cette nouvelle année soit un voyage passionnant rempli de découvertes et de réalisations. Que tu puisses trouver la force et la détermination nécessaires pour poursuivre tes rêves les plus chers et atteindre des sommets que tu n'aurais jamais imaginés. N'aie pas peur de sortir de ta zone de confort, car c'est là que la magie opère.<br /><br />"
        )
        .pauseFor(500)
        .typeString(
          "Sache que tu es une personne extraordinaire, dotée d'un potentiel illimité. Crois en toi et en tes capacités."
        )
        .pauseFor(1000)
        .callFunction(() => {
          stopAnimation(typewriter)
          typewriter = new Typewriter(page2, {
            loop: false,
            delay: 50,
            cursorClassName: 'cursor_livre'
          })
          typewriter
            .typeString(
              " Cultive ta confiance en toi et laisse-la rayonner dans tout ce que tu entreprends.Ne laisse jamais les doutes ou les obstacles te décourager, car chaque défi est une occasion d'apprendre et de grandir. <br /> <br />"
            )
            .pauseFor(1000)
            .typeString(
              "Prends le temps de te reconnecter avec toi-même et de nourrir ton bien-être intérieur. Accorde de l'importance à tes besoins, tant sur le plan physique que mental. Prends soin de ta santé, trouve des activités qui te procurent de la joie et entoure-toi de personnes qui t'inspirent et te soutiennent.<br /><br />"
            )
            .pauseFor(500)
            .typeString(
              "Dans cette nouvelle année, je t'encourage à cultiver des relations saines et enrichissantes. Entoure-toi de personnes qui t'apprécient pour qui tu es, qui te soutiennent dans tes projets et qui t'inspirent à devenir la meilleure version de toi-même. Fais preuve de bienveillance envers les autres et crée des liens qui dureront toute une vie."
            )
            .pauseFor(500)
            .callFunction(() => {
              stopAnimation(typewriter)
              store.commit('setIdScroll', 'download6')
              typewriter = new Typewriter(page3, {
                loop: false,
                delay: 50,
                cursorClassName: 'cursor_livre'
              })
              typewriter
                .typeString(
                  'Profite de chaque instant et trouve la beauté dans les petites choses de la vie. Apprécie les moments simples, les sourires partagés, les éclats de rire et les instants de calme. Fais de chaque journée une aventure, en explorant de nouveaux horizons, en essayant de nouvelles expériences et en embrassant les opportunités qui se présentent à toi.<br /><br />'
                )
                .pauseFor(500)
                .typeString(
                  "Enfin, rappelle-toi que cette année est la tienne, et la seule personne qui peut décider de la façon dont elle se déroulera, c'est toi. Fais preuve de courage, de détermination et de persévérance pour surmonter les obstacles qui se dresseront sur ton chemin. Crois en ton potentiel, et tu seras capable de réaliser de grandes choses..<br /><br />"
                )
                .pauseFor(100)
                .typeString(
                  "Je tiens également à m'excuser si mon cedeau est un peu deplacé et sache qu'il est le fruit de ma créativité et de mon amitié pour toi.Je l'ai réalisé de mes propres mains, avec toute l'intelligence et l'attention"
                )
                .pauseFor(500)
                .callFunction(() => {
                  stopAnimation(typewriter)
                  typewriter = new Typewriter(page4, {
                    loop: false,
                    delay: 50,
                    cursorClassName: 'cursor_livre'
                  })
                    .typeString(
                      "dont je suis capable.J'ai pris en compte tes goûts et tes passions, notamment ton amour pour les étoiles, l'art, le chiffre 4, les devinettes et la couleur jaune. J'ai voulu que ce cadeau soit unique et qu'il représente tout ce qui te rend heureuse.<br /> <br />"
                    )
                    .pauseFor(500)
                    .typeString(
                      "En te l'offrant, je souhaite te transmettre toutes les bonnes choses que la vie peut t'offrir. Je te souhaite une santé de fer, une longévité remplie de moments mémorables et une prospérité infinie. Je veux que tu saches que je serai toujours là pour toi, prêt à t'accompagner dans tes projets, à te soutenir dans tes visions et à partager avec toi les hauts et les bas de la vie.<br /> <br />"
                    )
                    .pauseFor(500)
                    .typeString(
                      'Je te souhaite de réaliser tous tes rêves et de trouver la satisfaction dans tout ce que tu entreprends.<br /><br />'
                    )
                    .pauseFor(1000)
                    .typeString('Avec tout mon amour et toute mon amitié,<br />')
                    .typeString('Espoir Destiny')
                    .pauseFor(1000)
                    .callFunction(() => {
                      stopAnimation(typewriter)
                      showCrayon.value = true
                    })
                    .start()
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
      showCrayon,
      downloadImage
    }
  },
  components: { Download }
}
</script>

<template>
  <div class="container_livre" id="visuelLivre1" @click="startAnimation">
    <div class="livre">
      <div class="page1"></div>
      <div class="page2"></div>
    </div>
  </div>
  <Download @click="downloadImage('visuelLivre1')" id="download5" />
  <div class="container_livre" id="visuelLivre2">
    <div class="livre">
      <div class="page3"></div>
      <div class="page4"></div>
    </div>
    <img src="../assets/crayon_livre_oblique.png" class="crayon" v-show="showCrayon" />
  </div>
  <Download @click="downloadImage('visuelLivre2')" id="download6" />
</template>
<style>
.container_livre {
  width: 900px;
  height: 600px;
  display: flex;
  zoom: 1.3;
}
.container_livre .livre {
  width: 900px;
  height: 570px;
  background-image: url(../assets/Livre_ouvert.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Marck Script';
  font-weight: 500;
  font-size: 14px;
}
.container_livre .crayon {
  width: 80px;
  height: 120px;
  object-fit: fill;
  align-self: center;
  margin-left: -125px;
  margin-bottom: -180px;
}
.container_livre .livre .page1,
.container_livre .livre .page3 {
  width: 35%;
  height: 70%;
  margin-top: -70px;
  transform: rotate(5.54deg);
  color: black;
}
.container_livre .livre .page2,
.container_livre .livre .page4 {
  width: 34%;
  height: 70%;
  margin-top: -30px;
  margin-left: 40px;
  margin-right: -20px;
  color: black;
}
.cursor_livre {
  color: rgba(207, 205, 205, 0.025);
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
