<script>
import Etoile from './icons/Etoile.vue'
import Age from './icons/Age.vue'

export default {
  components: {
    Etoile,
    Age
  }
}
</script>

<template>
  <div class="container_etoileAge">
    <Etoile class="etoile" />
    <Age class="age" />
    <div class="images">
        <img src="../assets/image1.png" />
        <img src="../assets/image1.png" />
    </div>
  </div>
</template>

<style>
.container_etoileAge {
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.etoile {
  animation: rotateScale 16s linear infinite;
  display: inline-block;
}

.age {
  display: inline-block;
}
.container_etoileAge .images
{
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_etoileAge .images img 
{
  width: 140px;
  object-fit: contain;
}
@keyframes rotateScale {
  0% {
    transform: rotate3d(0, 0, 1, 0deg) scale(0.5);
  }
  33% {
    transform: rotate3d(0, 0, 1, 360deg) scale(1);
  }
  41% {
    transform: translateX(-70px) scale(0.5);
  }
  49% {
    transform: translateX(0px) scale(0.7);
  }
  57% {
    transform: translateX(70px) scale(0.8);
  }
  65% {
    transform: translateX(0) scale(0.9);
  }
  83% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
