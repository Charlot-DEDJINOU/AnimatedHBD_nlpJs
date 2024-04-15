<script>
import Devinette from './Devinette.vue'
import VisuelLivre from './VisuelLivre.vue'
import VisuelSimple from './VisuelSimple.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Devinette,
    VisuelLivre,
    VisuelSimple
  },
  setup() {
    const showSession = ref(false)
    const startAnimation = ref(false)

    const largeur = ref('')
    const hauteur = ref('')

    const store = useStore()
    const session = ref(computed(() => store.state.numberSession))

    const nextSession = (payload) => {
      if (payload.message) {
        showSession.value = true
        store.commit('setIdScroll', 'download6')
        setTimeout(() => {
          startAnimation.value = true
        }, 2000)
      }
    }

    const majTailleFenetre = () => {
      largeur.value = screen.width
      hauteur.value = screen.height
      console.log('Fenêtre redimensionnée. Nouvelles dimensions :', largeur.value, hauteur.value)
    }

    onMounted(() => window.addEventListener('resize', majTailleFenetre))
    onBeforeUnmount(() => window.removeEventListener('resize', majTailleFenetre))

    return {
      nextSession,
      showSession,
      startAnimation,
      session,
      largeur
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
      <VisuelLivre :tigglerAnimation="startAnimation" v-if="showSession" />
      <!-- <VisuelSimple :tigglerAnimation="startAnimation" v-if="showSession && largeur <= 700" /> -->
    </div>
  </div>
</template>
<style scoped>
.LastSession {
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 900px) {
  .LastSession {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
