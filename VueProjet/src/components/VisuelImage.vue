<script>
import Typewriter from 'typewriter-effect/dist/core'
import downloadImage from './untils'
import { ref } from 'vue'

export default {
  setup() {
    const showCrayon = ref(false)

    const startAnimation = () => {
      const targetElement = document.getElementById('target_image')
      const destinateur = document.getElementsByClassName('destinateur')[0]
      const recepteur = document.getElementsByClassName('samira')[0]
      const adore = document.getElementsByClassName('adore')[0]
      const salutation = document.getElementsByClassName('salutation')[0]

      var typewriter = new Typewriter(salutation, {
        loop: false,
        delay: 75,
        cursorClassName: 'cursor_image'
      })
      typewriter
        .pauseFor(1000)
        .typeString('À ma chère ,')
        .pauseFor(1000)
        .callFunction(() => {
          stopAnimation(typewriter)

          typewriter = new Typewriter(recepteur, {
            loop: false,
            delay: 75,
            cursorClassName: 'cursor_image'
          })

          typewriter
            .pauseFor(1000)
            .typeString('<span class="bleu">S</span>')
            .typeString('<span class="vert">a</span>')
            .typeString('<span class="jaune">m</span>')
            .typeString('<span class="rouge">i</span>')
            .typeString('<span class="bleu">r</span>')
            .typeString('<span class="vert">a </span>')
            .typeString('<span class="jaune">B</span>')
            .typeString('<span class="rouge">d</span>')
            .typeString('<span class="vert">l</span>')
            .pauseFor(1000)
            .callFunction(() => {
              stopAnimation(typewriter)

              typewriter = new Typewriter(targetElement, {
                loop: false,
                delay: 75,
                cursorClassName: 'cursor_image'
              })

              typewriter
                .pauseFor(1000)
                .typeString("Aujourd'hui c'est ta journée,<br />")
                .pauseFor(500)
                .typeString('Un jour spécial à célébrer,<br />')
                .pauseFor(500)
                .typeString('Un an de plus à ton compteur,<br />')
                .pauseFor(500)
                .typeString('Et pour moi, un sentiment de bonheur.<br /><br />')
                .pauseFor(2000)
                .typeString("Car depuis que j'ai croisé ton chemin,<br />")
                .pauseFor(500)
                .typeString('Je suis sous le charme de ta personnalité,<br />')
                .pauseFor(500)
                .typeString('Ton sourire, ta détermination et ta bienveillance,<br />')
                .pauseFor(500)
                .typeString('Ont su toucher mon cœur avec efficacité.<br /><br />')
                .pauseFor(2000)
                .typeString('Tu es une fille travailleuse et admirable,<br />')
                .pauseFor(500)
                .typeString("Qui inspire et qui donne de l'espoir,<br />")
                .pauseFor(500)
                .typeString('Ton courage et ta force sont admirables,<br />')
                .pauseFor(500)
                .typeString('Et tu mérites le meilleur pour chaque soir.<br /><br />')
                .pauseFor(2000)
                .typeString('Alors pour ton anniversaire, je te souhaite,<br />')
                .pauseFor(500)
                .typeString('Que cette journée soit remplie de douceur,<br />')
                .pauseFor(500)
                .typeString("Et que chaque année qui passe t'apporte,<br />")
                .pauseFor(500)
                .typeString('Tout ce que tu souhaites avec ferveur.<br /><br />')
                .pauseFor(2000)
                .typeString('Joyeux anniversaire à toi, qui illumines mes journées,<br />')
                .pauseFor(500)
                .typeString("Et qui sait, peut-être un jour, je t'avouerai mes pensées.")
                .pauseFor(1000)
                .callFunction(() => {
                  stopAnimation(typewriter)

                  typewriter = new Typewriter(adore, {
                    loop: false,
                    delay: 75,
                    cursorClassName: 'cursor_image'
                  })

                  typewriter
                    .pauseFor(1000)
                    .typeString("Je t'adore")
                    .pauseFor(1000)
                    .callFunction(() => {
                      stopAnimation(typewriter)

                      typewriter = new Typewriter(destinateur, {
                        loop: false,
                        delay: 75,
                        cursorClassName: 'cursor_image'
                      })

                      typewriter
                        .pauseFor(1000)
                        .typeString('<span class="vert">D</span>')
                        .typeString('<span class="jaune">e</span>')
                        .typeString('<span class="rouge">s</span>')
                        .typeString('<span class="bleu">t</span>')
                        .typeString('<span class="vert">i</span>')
                        .typeString('<span class="jaune">n</span>')
                        .typeString('<span class="rouge">y</span>')
                        .typeString('<span class="vert"> E</span>')
                        .typeString('<span class="jaune">s</span>')
                        .typeString('<span class="rouge">p</span>')
                        .typeString('<span class="lambda"> ,un ami lambda</span>')
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
        })
        .start()
    }
    const stopAnimation = (n) => {
      const cursor = document.getElementsByClassName('cursor_image')[0]
      cursor.classList.remove('cursor_image')
      cursor.classList.add('after_typed')

      n.stop()
    }

    const backgroundStyle = ref('')

    const clickButton = () => {
      const input_file = document.getElementById('file')
      input_file.click()
    }

    const handleFileInputChange = (event) => {
      const name_file = event.target.files[0]
      if (name_file) {
        const reader = new FileReader()

        reader.onload = (e) => {
          const selectedFile = e.target.result
          backgroundStyle.value = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${selectedFile})`
          backgroundStyle.value += ' center/cover'
        }

        reader.readAsDataURL(name_file)
      } else {
        backgroundStyle.value = null
      }
    }

    return {
      startAnimation,
      showCrayon,
      downloadImage,
      backgroundStyle,
      clickButton,
      handleFileInputChange
    }
  }
}
</script>

<template>
  <div class="container1" @click="startAnimation" id="visuelImage">
    <div class="content1" :style="backgroundStyle && { background: backgroundStyle }"></div>
    <div class="content2">
      <p class="salutation"></p>
      <div class="samira"></div>
      <p class="text" id="target_image"></p>
      <p class="adore"></p>
      <p class="destinateur"></p>
    </div>
    <img src="../assets/crayon_image_oblique.png" class="crayon" v-show="showCrayon" />
  </div>
  <div>
    <button @click="clickButton">Upload</button>
    <button @click="downloadImage('visuelImage')">Telecharger</button>
    <input type="file" id="file" @change="handleFileInputChange" accept="image/*" hidden />
  </div>
</template>

<style>
.container1 {
  width: 848px;
  height: 635px;
  margin-top: 50px;
  display: flex;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 600;
}

.container1 .crayon {
  width: 80px;
  height: 120px;
  object-fit: fill;
  align-self: end;
  margin-left: -25px;
  margin-bottom: 25px;
}

.content1 {
  width: 282px;
  height: 635px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(../assets/charlot.jpg);
  background-size: cover;
}

.content2 {
  width: 446px;
  height: 635px;
  background-image: url(../assets/roseblanche.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.text {
  font-size: 17px;
  line-height: 19px;
  width: 90%;
  height: 70%;
}

.samira {
  font-size: 38px;
  line-height: 30px;
  width: 90%;
  height: 30px;
}

.rouge {
  color: #094eff;
}

.vert {
  color: #16c953;
}

.bleu {
  color: #b4cf07;
}

.salutation {
  font-style: oblique;
  line-height: 38px;
  font-size: 25px;
  width: 90%;
  height: 38px;
}

.adore {
  align-self: end;
  font-size: 25px;
  line-height: 38px;
  width: 110px;
  height: 38px;
  margin-right: 8px;
  margin-top: -30px;
}

.destinateur {
  margin-left: 40px;
  margin-top: -15px;
  font-size: 38px;
  line-height: 38px;
  width: 90%;
  height: 38px;
}

.lambda {
  font-size: 25px;
  line-height: 25px;
}

.container1 .fin {
  margin-top: -15px;
  font-style: oblique;
  font-weight: bold;
  font-size: 23px;
  margin-left: 40px;
}

.cursor_image {
  color: rgba(108, 101, 101, 0.025);
}
.cursor_image::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 56px;
  height: 100px;
  background-image: url('../assets/crayon_image.png');
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
