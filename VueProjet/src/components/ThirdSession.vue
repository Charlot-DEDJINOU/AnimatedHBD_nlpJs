<script>
import VisuelRouleau from './VisuelRouleau.vue'
import SendEmail from './SendEmail.vue'
import Devinette from './Devinette.vue'
import { downloadImage } from './untils'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    VisuelRouleau,
    SendEmail,
    Devinette
  },
  setup() {
    const showSession = ref(true)
    const startAnimationRouleau = ref(false)

    const store = useStore()
    const session = ref(computed(() => store.state.numberSession))

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        store.commit('setIdScroll', 'download3')
        setTimeout(() => {
          startAnimationRouleau.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimationRouleau,
      downloadImage,
      session
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
        v-if="session >= 2"
        id="devinette2"
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
    </div>
  </div>
</template>
<style>
.thirdsession {
  width: 970px;
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
@media (max-width: 900px) {
  .thirdsession {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .thirdsession .visuelrouleau_email {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .thirdsession .visuelrouleau_email .images_rouleau {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
    margin-bottom: 20px;
  }
}
.thirdsession .images_rouleau img {
  width: 90px;
  object-fit: contain;
  animation-name: moveBallon;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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
