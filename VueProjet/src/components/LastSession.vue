<script>
import Devinette from './Devinette.vue'
import VisuelLivre from './VisuelLivre.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Devinette,
    VisuelLivre
  },
  setup() {
    const showSession = ref(true)
    const startAnimation = ref(false)

    const store = useStore()
    const session = ref(computed(() => store.state.numberSession))

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        store.commit('setIdScroll', 'download5')
        setTimeout(() => {
          startAnimation.value = true
        }, 2000)
      }
    }
    return {
      nextSession,
      showSession,
      startAnimation,
      session
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
        v-if="session >= 4"
        id="devinette4"
      />
      <VisuelLivre :tigglerAnimation="startAnimation" v-if="showSession"/>
    </div>
  </div>
</template>
<style>
.LastSession {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
