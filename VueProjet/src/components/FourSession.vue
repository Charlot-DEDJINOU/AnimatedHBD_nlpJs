<script>
import Devinette from './Devinette.vue'
import EtoileAge from './EtoileAge.vue'
import VisuelImage from './VisuelImage.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Devinette,
    VisuelImage,
    EtoileAge
  },

  setup() {
    const showSession = ref(true)
    const startAnimationImage = ref(false)

    const store = useStore()
    const session = ref(computed(() => store.state.numberSession))

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        store.commit('setIdScroll', 'download4')
        setTimeout(() => {
          startAnimationImage.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimationImage,
      session
    }
  }
}
</script>
<template>
  <div class="session">
    <div class="foursession">
      <Devinette
        @backAnswer="nextSession"
        devinette="Je suis toujours devant tout le monde mais personne ne peut me voir. Qui suis-je"
        numAnswer="4"
        v-if="session >= 3"
        id="devinette3"
      />
      <div class="visuelimage_age" v-show="showSession">
        <EtoileAge />
        <VisuelImage :tigglerAnimation="startAnimationImage" />
      </div>
    </div>
  </div>
</template>
<style>
.foursession {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.foursession .visuelimage_age {
  display: flex;
  margin-top: 30px;
}
</style>
