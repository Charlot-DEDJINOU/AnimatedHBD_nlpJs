<script>
import Devinette from './Devinette.vue'
import VisuelRose from './VisuelRose.vue'
import Download from './icons/Download.vue'

export default {
  components: {
    Devinette,
    VisuelRose,
    Download
  },

  setup() {
    const animated = () => {
      const elements = document.getElementsByClassName('animate1')
      for (let ele of elements) ele.classList.add('animated')
    }
    return {
      animated
    }
  }
}
</script>

<template>
  <div class="session">
    <div class="secondSession">
      <Devinette @click="animated" />
      <div class="visuels">
        <div class="art">
          <div class="age">
            <img src="../assets/chiffre1.png" class="first animate1" />
            <img src="../assets/chiffre9.png" class="animate1" />
          </div>
          <p>Ans</p>
          <img src="../assets/chiffre4.png" class="chiffre4 animate1" />
        </div>
        <div class="visuel1"><VisuelRose /></div>
        <div class="images_ballon">
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
        </div>
      </div>
      <Download />
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
  animation: slideFadeIn 6s ease-in-out;
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
