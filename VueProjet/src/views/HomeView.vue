<template>
  <FirstSession />
  <SecondSession />
  <ThirdSession />
  <FourSession />
  <LastSession />
</template>

<script>
import { defineComponent } from 'vue'
import FirstSession from '../components/FirstSession.vue'
import SecondSession from '../components/SecondSession.vue'
import ThirdSession from '../components/ThirdSession.vue'
import FourSession from '../components/FourSession.vue'
import LastSession from '../components/LastSession.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    FirstSession,
    SecondSession,
    ThirdSession,
    FourSession,
    LastSession
  }
})
</script>
