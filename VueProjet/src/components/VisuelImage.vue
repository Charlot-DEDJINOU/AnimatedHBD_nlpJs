<script>
import Typewriter from 'typewriter-effect/dist/core'
import { downloadImage } from './untils'
import { ref, watch, computed } from 'vue'
import Download from './icons/Download.vue'
import IconPaper from './icons/IconPaper.vue'
import { useStore } from 'vuex'

export default {
  props: {
    tigglerAnimation: Boolean
  },
  setup(props) {
    const showCrayon = ref(false)
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))

    const startAnimationImage = () => {
      const targetElement = document.getElementById('target_image')
      const destinateur = document.getElementsByClassName('destinateur')[0]
      const recepteur = document.getElementsByClassName('samira')[0]
      const adore = document.getElementsByClassName('adore')[0]
      const salutation = document.getElementsByClassName('salutation')[0]

      var typewriter = new Typewriter(salutation, {
        loop: false,
        delay: 150,
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
            delay: 200,
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
            .typeString('<span class="jaune">b</span>')
            .typeString('<span class="rouge">d</span>')
            .typeString('<span class="vert">l</span>')
            .pauseFor(1000)
            .callFunction(() => {
              stopAnimation(typewriter)
              typewriter = new Typewriter(targetElement, {
                loop: false,
                delay: 50,
                cursorClassName: 'cursor_image'
              })
              typewriter
                .pauseFor(1000)
                .typeString('Dans le ciel étoilé, ta lumière brille,<br />')
                .pauseFor(500)
                .typeString('En jaune éclatant, ton cœur pétille.<br />')
                .pauseFor(500)
                .typeString('En cette nouvelle année, je te souhaite,<br />')
                .pauseFor(500)
                .typeString('Un anniversaire magique et parfait.<br /><br />')
                .pauseFor(2000)
                .typeString('Que les étoiles veillent sur tes pas,<br />')
                .pauseFor(500)
                .typeString('Que le jaune colore tes rêves là-bas.<br />')
                .pauseFor(500)
                .typeString('Sous le firmament, que ton sourire étincelle,<br />')
                .pauseFor(500)
                .typeString('Et que ta vie soit douce comme le miel.<br /><br />')
                .pauseFor(2000)
                .typeString('Fille des étoiles, éblouis-nous de ta grâce,<br />')
                .pauseFor(500)
                .typeString('Que chaque instant soit empli de joie.<br />')
                .pauseFor(500)
                .typeString("Que les étoiles tissent un chemin d'amour,<br />")
                .pauseFor(500)
                .typeString('Et que le jaune éclaire tes jours les plus courts.<br /><br />')
                .pauseFor(2000)
                .typeString('Joyeux anniversaire, Que les etoiles,<br />')
                .pauseFor(500)
                .typeString('Et le jaune illuminent ta vie et la comblent de bonheur.')
                .pauseFor(1000)
                .callFunction(() => {
                  stopAnimation(typewriter)
                  typewriter = new Typewriter(adore, {
                    loop: false,
                    delay: 50,
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
                        delay: 50,
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
                          store.commit('setNumberSession', 4)
                          store.commit('setIdScroll', 'devinette4')
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
    const imageStyle = ref('')

    const clickButton = () => {
      const input_file = document.getElementById('file1')
      input_file.click()
    }
    const InputChange = (event) => {
      const name_file = event.target.files[0]
      if (name_file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const selectedFile = e.target.result
          imageStyle.value = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${selectedFile})`
          imageStyle.value += ' center/cover'
        }
        reader.readAsDataURL(name_file)
      } else {
        imageStyle.value = null
      }
    }

    watch(() => props.tigglerAnimation, startAnimationImage)

    return {
      startAnimationImage,
      showCrayon,
      downloadImage,
      imageStyle,
      clickButton,
      InputChange,
      uniColor
    }
  },
  components: { Download, IconPaper }
}
</script>

<template>
  <div class="container1_download">
    <div class="container1" id="visuelImage">
      <div class="content1" :style="imageStyle && { background: imageStyle }"></div>
      <div class="content2">
        <p class="salutation"></p>
        <div class="samira"></div>
        <p class="text" id="target_image"></p>
        <p class="adore"></p>
        <p class="destinateur"></p>
      </div>
      <img src="../assets/crayon_image_oblique.png" class="crayon" v-show="showCrayon" />
    </div>
    <div class="down">
      <div class="file" @click="clickButton" :style="{ backgroundColor: uniColor }">
        <span class="text">Changer la photo</span>
        <span><IconPaper class="paper" /></span>
      </div>
      <Download class="button" @click="downloadImage('visuelImage')" id="download4" />
      <input type="file" id="file1" @change="InputChange" accept="image/*" hidden />
    </div>
  </div>
</template>

<style>
.container1_download {
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}
.container1_download .down {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.container1_download .down .file {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: #16c953;
  font-family: 'Marck Script';
  font-style: normal;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-top: 20px;
}
.container1_download .down .file .paper {
  transform: rotate(30deg);
  height: 20px;
  opacity: 0.5;
}
.container1_download .down .file .text {
  display: inline-block;
  font-size: 1.3rem;
}
.container1 {
  width: 600px;
  height: 500px;
  display: flex;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
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
  width: 200px;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(../assets/Samira.jpeg);
  background-size: cover;
  background-position: center;
}

.content2 {
  width: 320px;
  height: 100%;
  background-image: url(../assets/roseblanche.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
}

.content2 .text {
  font-size: 15px;
  line-height: 19px;
  width: 92%;
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
  margin-top: -15px;
  font-size: 35px;
  line-height: 38px;
  width: 90%;
  height: 38px;
}

.lambda {
  font-size: 15px;
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
