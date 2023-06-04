<script>
import Devinette from './Devinette.vue'
import VisuelRose from './VisuelRose.vue'
import Download from './icons/Download.vue'
import { ref } from 'vue'

export default {
  components: {
    Devinette,
    VisuelRose,
    Download
  },

  setup() {
    const showSession = ref(false)
    const starAnimation = ref(false)

    const nextSession = (payload) => {
      if(payload.message){
        showSession.value = true
        setTimeout(() => {
          starAnimation.value=true
        }, 6000)
      }
    }

    return {
      nextSession,
      showSession ,
      starAnimation
    }
  }
}
</script>

<template>
  <div class="session">
    <div class="secondSession">
      <Devinette  @backAnswer="nextSession" devinette="Je suis au milieu de la mer et au bout du monde , Qui suis je ?" numAnswer="1"/>
      <div class="visuels" v-if="showSession">
        <div class="art">
          <div class="age">
            <img src="../assets/chiffre1.png" class="first animated" />
            <img src="../assets/chiffre9.png" class="animated" />
          </div>
          <p>Ans</p>
          <img src="../assets/chiffre4.png" class="chiffre4 animated" />
        </div>
        <div class="visuel1"><VisuelRose :triggerAnimation="starAnimation" /></div>
        <div class="images_ballon">
          <img src="../assets/image1.png" class="ballon1"/>
          <img src="../assets/image1.png" class="ballon2"/>
          <img src="../assets/image1.png" class="ballon3"/>
        </div>
      </div>
      <Download v-if="showSession"/>
    </div>
  </div>
</template>
<style>
.secondSession {
  width: 65%;
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
.secondSession .visuels .art {
  margin-left: -30px;
  width: 370px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.secondSession .visuels .art .chiffre4 {
  height: 250px;
  object-fit: contain;
}
.secondSession .visuels .art .age {
  display: flex;
  align-items: flex-start;
}
.secondSession .visuels .art .age img {
  width: 45%;
  height: 200px;
  object-fit: cover;
}
.secondSession .visuels .art p {
  font-size: 50px;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  align-self: center;
}
.secondSession .visuels .art .age .first {
  width: 55%;
  height: 230px;
  object-fit: cover;
  margin-left: 15px;
}
.secondSession .visuels .images_ballon {
  width: 200px;
}
.secondSession .visuels .images_ballon img {
  width: 150px;
  object-fit: contain;
}
.secondSession .visuels .images_ballon .ballon1
{
  animation: balloonAnimation 6s infinite linear;
  animation-delay: 2s;
}
.secondSession .visuels .images_ballon .ballon2
{
  animation: balloonAnimation 6s infinite linear;
  animation-delay: 0s;
}
.secondSession .visuels .images_ballon .ballon3
{
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
@keyframes balloonAnimation {
  0% {
    transform: translateX(-60px) ;
  }
  20%{
    transform: scale(1.2) translateX(0px);
  }
  50%{
    transform: scale(1) translateX(60px);
  }
  70%{
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
