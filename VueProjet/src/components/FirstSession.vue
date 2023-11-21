<script>
import Profil from './Profil.vue'
import Smartphone from './Smartphone.vue'
import Global from './Global.vue'
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Profil,
    Smartphone,
    Global
  },
  setup() {
    const ballon1 = ref(true)
    const ballon2 = ref(false)
    const ballon3 = ref(false)

    const set_ballon1 = () => {
      ballon2.value = false
      ballon3.value = false
      ballon1.value = true
      setTimeout(set_ballon3, 16000)
    }

    const set_ballon3 = () => {
      ballon3.value = true
      setTimeout(set_ballon2, 16000)
    }

    const set_ballon2 = () => {
      ballon2.value = true
      setTimeout(set_ballon1, 48000)
    }

    onMounted(set_ballon1)

    const store = useStore()

    const scrollBottom = () => {
      setTimeout(() => {
        const endOfPageElement = document.getElementById(store.state.idScroll)
        endOfPageElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
      }, 1000)
    }

    watch(() => store.state.idScroll, scrollBottom)

    return {
      ballon1,
      ballon2,
      ballon3,
      set_ballon1,
      set_ballon2,
      set_ballon3
    }
  }
}
</script>
<template>
  <div class="session">
    <div class="firstsession">
      <div class="global-profil">
        <div><Global /></div>
        <div class="images">
          <img src="../assets/image1.png" class="image1" v-show="ballon1" />
          <img src="../assets/image1.png" class="image1" v-show="ballon2" />
          <img src="../assets/image1.png" class="image1" v-show="ballon3" />
        </div>
        <div><Profil /></div>
      </div>
      <div class="smartphone"><Smartphone /></div>
    </div>
  </div>
</template>

<style>
.session {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.firstsession {
  width: 970px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.firstsession .global-profil {
  height: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.firstsession .global-profil .images {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.firstsession .global-profil .images .image1 {
  height: 100px;
  width: 100px;
  object-fit: cover;
  animation: image_animate 16s ease-in-out infinite;
}
@media (max-width: 900px) {
  .firstsession {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .firstsession .global-profil .images {
    width: 80%;
  }
  .firstsession .smartphone {
    margin-top: 25px;
  }
  .firstsession .global-profil {
    height: auto;
  }
}
@keyframes image_animate {
  0% {
    transform: rotate3d(0, 0, 1, 0deg) scale(0);
  }
  33% {
    transform: rotate3d(0, 0, 1, 360deg) scale(1);
  }
  41% {
    transform: translateX(-70px) scale(0.6);
  }
  49% {
    transform: translateX(0px) scale(0.8);
  }
  57% {
    transform: translateX(50px) scale(0.9);
  }
  65% {
    transform: translateX(0) scale(1.2);
  }
  83% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
