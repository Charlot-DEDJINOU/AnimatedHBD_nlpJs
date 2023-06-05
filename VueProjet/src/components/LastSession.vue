<script>
import Devinette from './Devinette.vue'
import VisuelLivre from './VisuelLivre.vue'
import { ref } from 'vue'

export default {
  components: {
    Devinette,
    VisuelLivre
  },
  setup() {
    const showSession = ref(true)
    const startAnimation = ref(false)

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        setTimeout(() => {
          startAnimation.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimation
    }
  }
}
</script>

<template>
  <div class="session">
    <div class="LastSession">
      <Devinette
        @backAnswer="nextSession"
        devinette="Tout le monde en a une, mais personne ne peut la perdre , Qui suis je ?"
        numAnswer="3"
      />
      <VisuelLivre v-if="showSession" :tigglerAnimation="startAnimation" />
    </div>
  </div>
</template>
<style>
.LastSession {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
