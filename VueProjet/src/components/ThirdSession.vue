<script>
import VisuelRouleau from './VisuelRouleau.vue'
import SendEmail from './SendEmail.vue'
import Devinette from './Devinette.vue'
import Download from './icons/Download.vue'

export default {
  components: {
    VisuelRouleau,
    SendEmail,
    Devinette,
    Download
  }
}
</script>
<template>
  <div class="session">
    <div class="thirdsession">
      <Devinette />
      <div class="visuelrouleau_email">
        <VisuelRouleau />
        <div class="images_rouleau">
          <img src="../assets/image1.png" />
          <img src="../assets/ballon4.png" />
          <img src="../assets/image1.png" />
          <img src="../assets/image1.png" />
        </div>
        <SendEmail />
      </div>
      <div class="down">
        <Download />
      </div>
    </div>
  </div>
</template>
<style>
.thirdsession {
  width: 65%;
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
.thirdsession .images_rouleau img {
  width: 100%;
  object-fit: contain;
}
.thirdsession .down {
  width: 600px;
  margin-top: -30px;
}
</style>
