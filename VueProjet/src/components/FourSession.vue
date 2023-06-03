<script>
import Devinette from './Devinette.vue'
import EtoileAge from './EtoileAge.vue'
import VisuelImage from './VisuelImage.vue'

export default {
  components: {
    Devinette,
    VisuelImage,
    EtoileAge
  }
}
</script>
<template>
  <div class="session">
    <div class="foursession">
      <Devinette />
      <div class="visuelimage_age">
        <EtoileAge />
        <VisuelImage />
      </div>
    </div>
  </div>
</template>
<style>
.foursession {
  width: 65%;
}
.foursession .visuelimage_age {
  display: flex;
  margin-top: 30px;
}
</style>
