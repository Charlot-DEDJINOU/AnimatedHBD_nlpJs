<script setup>
import VisuelRose from '../components/VisuelRose.vue'
import Smartphone from '../components/Smartphone.vue'
import VisuelRouleau from '../components/VisuelRouleau.vue'
import VisuelImage from '../components/VisuelImage.vue'
import VisuelLivre from '../components/VisuelLivre.vue'
import EtoileAge from '../components/EtoileAge.vue'
import SendEmail from '../components/SendEmail.vue'
import Profil from '../components/Profil.vue'
import Devinette from '../components/Devinette.vue'
</script>

<template>
  <main>
    <Devinette />
    <Profil />
    <SendEmail />
    <EtoileAge />
    <VisuelLivre />
    <VisuelImage />
    <VisuelRouleau />
    <VisuelRose />
    <Smartphone />
  </main>
</template>
