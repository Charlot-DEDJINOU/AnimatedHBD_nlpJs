<script>
import VisuelRouleau from './VisuelRouleau.vue'
import SendEmail from './SendEmail.vue'
import Devinette from './Devinette.vue'
import Download from './icons/Download.vue'
import { ref } from 'vue'

export default {
  components: {
    VisuelRouleau,
    SendEmail,
    Devinette,
    Download
  },
  setup() {
    const showSession = ref(false)
    const startAnimationRouleau = ref(false)

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        setTimeout(() => {
          startAnimationRouleau.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimationRouleau
    }
  }
}
</script>
<template>
  <div class="session">
    <div class="thirdsession">
      <Devinette
        @backAnswer="nextSession"
        devinette="Qu'est-ce qui a un cou mais pas de tête ?"
        numAnswer="2"
      />
      <div class="visuelrouleau_email" v-if="showSession">
        <VisuelRouleau :triggerAnimationRouleau="startAnimationRouleau" />
        <div class="images_rouleau">
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
        </div>
        <SendEmail />
      </div>
      <div class="down" v-if="showSession">
        <Download />
      </div>
    </div>
  </div>
</template>
<style>
.thirdsession {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.thirdsession .visuelrouleau_email {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.thirdsession .images_rouleau {
  width: 150px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.thirdsession .images_rouleau img {
  width: 100%;
  object-fit: contain;
  animation-name: moveBallon;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.thirdsession .down {
  width: 600px;
  margin-top: -30px;
}
@keyframes moveBallon {
  0% {
    transform: translate(-50%, -30%);
  }
  25% {
    transform: translate(-50%, 0%) rotate(90deg);
  }
  50% {
    transform: translate(0, 50%) rotate(180deg);
  }
  75% {
    transform: translate(50%, 50%) rotate(270deg);
  }
  100% {
    transform: translate(-50%, -30%) rotate(360deg);
  }
}
</style>
