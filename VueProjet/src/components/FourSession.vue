<script>
import Devinette from './Devinette.vue'
import EtoileAge from './EtoileAge.vue'
import VisuelImage from './VisuelImage.vue'
import { ref } from 'vue'

export default {
  components: {
    Devinette,
    VisuelImage,
    EtoileAge
  },

  setup() {
    const showSession = ref(false)
    const startAnimationImage = ref(false)

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        setTimeout(() => {
          startAnimationImage.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimationImage
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
      />
      <div class="visuelimage_age" v-if="showSession">
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
