<script>
import Devinette from './Devinette.vue'
import VisuelRose from './VisuelRose.vue'
import Download from './icons/Download.vue'
import { ref, computed } from 'vue'
import { downloadImage } from './untils'
import { useStore } from 'vuex'

export default {
  components: {
    Devinette,
    VisuelRose,
    Download
  },

  setup() {
    const showSession = ref(false)
    const starAnimation = ref(false)
    const store = useStore()
    const session = ref(computed(() => store.state.numberSession))

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        store.commit('setIdScroll', 'chiffre2')
        setTimeout(() => {
          starAnimation.value = true
        }, 6000)
      }
    }

    return {
      nextSession,
      showSession,
      starAnimation,
      downloadImage,
      session
    }
  }
}
</script>

<template>
  <div class="session">
    <div class="secondSession">
      <Devinette
        @backAnswer="nextSession"
        devinette="Je suis au milieu de la mer et au bout du monde , Qui suis je ?"
        numAnswer="1"
        v-if="session >= 1"
      />
      <div class="visuels" v-show="showSession" @inserted="scrollBottom">
        <div class="art">
          <div class="age">
            <img src="../assets/chiffre1.png" class="first animated" />
            <img src="../assets/chiffre3.png" class="first animated" />
          </div>
          <p>+</p>
          <img src="../assets/chiffre7.png" class="chiffre4 animated" id="chiffre2" />
          <p :style="{ marginTop: '10px' }">Ans</p>
        </div>
        <div class="visuel1">
          <VisuelRose :triggerAnimation="starAnimation" />
          <Download
            v-show="showSession"
            @click="downloadImage('visuelRose', 'part1-RtxhwJi')"
            id="download2"
          />
        </div>
        <div class="images_ballon">
          <img src="../assets/image1.png" class="ballon1" />
          <img src="../assets/image1.png" class="ballon2" />
          <img src="../assets/image1.png" class="ballon3" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.secondSession {
  width: 970px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.secondSession .visuels {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.secondSession .visuels .visuel1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.secondSession .visuels .art {
  margin-left: -30px;
  width: 370px;
  min-height: 500px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.secondSession .visuels .art .chiffre4 {
  height: 250px;
  object-fit: contain;
  margin-top: 10px;
}
.secondSession .visuels .art .age {
  display: flex;
  align-items: flex-start;
}
.secondSession .visuels .art .age img {
  height: 200px;
  object-fit: cover;
  margin-left: 0px;
}
.secondSession .visuels .art p {
  font-size: 50px;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  align-self: center;
}
.secondSession .visuels .images_ballon {
  width: 200px;
}
.secondSession .visuels .images_ballon img {
  width: 150px;
  object-fit: contain;
}
.secondSession .visuels .images_ballon .ballon1 {
  animation: balloonAnimation 6s infinite linear;
  animation-delay: 2s;
}
.secondSession .visuels .images_ballon .ballon2 {
  animation: balloonAnimation 6s infinite linear;
  animation-delay: 0s;
}
.secondSession .visuels .images_ballon .ballon3 {
  animation: balloonAnimation 6s infinite linear;
  animation-delay: 4s;
}
.secondSession .images_download {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.secondSession .images_download img {
  width: 300px;
  object-fit: contain;
}
.animated {
  animation: slideFadeIn 10s ease-in-out;
}

@media (max-width: 900px) {
  .secondSession {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .secondSession .visuels {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
  .secondSession .visuels .images_ballon {
    display: flex;
    align-self: center;
    width: 90%;
    margin-left: 40px;
  }
  .secondSession .visuels .images_ballon img {
    width: 85px;
  }
}
@keyframes balloonAnimation {
  0% {
    transform: translateX(-60px);
  }
  20% {
    transform: scale(1.2) translateX(0px);
  }
  50% {
    transform: scale(1) translateX(60px);
  }
  70% {
    transform: scale(0.7) translateX(0px);
  }
  100% {
    transform: scale(0) translateX(-120px);
  }
}
@keyframes slideFadeIn {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
