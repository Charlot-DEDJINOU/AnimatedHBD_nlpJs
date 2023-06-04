<script>
import Typewriter from 'typewriter-effect/dist/core'
import downloadImage from './untils'
import { ref , watch} from 'vue'
import Download from './icons/Download.vue'

export default {
  props : {
    tigglerAnimation : Boolean
  } ,
    setup(props) {
        const showCrayon = ref(false);
        const startAnimation = () => {
            const page1 = document.getElementsByClassName("page1")[0];
            const page2 = document.getElementsByClassName("page2")[0];
            var typewriter = new Typewriter(page1, {
                loop: false,
                delay: 75,
                cursorClassName: "cursor_livre"
            });
            typewriter
                .pauseFor(1000)
                .typeString("Ma chère amie Samira Bdl,<br /><br />")
                .pauseFor(500)
                .typeString("Je suis absolument ému(e) et touché(e) par tout ce que tu as fait pour moi. Le temps et l'effort que tu as consacrés à chercher les affiches pour ton anniversaire montrent à quel point tu es une personne incroyablement attentionnée et aimante. Je suis tellement chanceux(se) de t'avoir dans ma vie et de pouvoir compter sur toi comme une amie si précieuse.<br /><br />")
                .pauseFor(500)
                .typeString("Je tiens à souligner que tout ce que nous avons échangé sur WhatsApp était entièrement vrai. Lorsque je t'ai dit que tes yeux brillent comme les étoiles, je le pensais vraiment. C'est pourquoi j'ai décidé de t'offrir une grande étoile sur le site - pour te rappeler à quel point tes yeux sont belles et brillantes à mes yeux.<br /><br />")
                .pauseFor(500)
                .typeString("Je suis également admiratif(ve) de ta persévérance et de ta réussite professionnelle. Tu es une travailleuse acharnée et une personne incroyablement talentueuse, et tu m'as inspiré(e) à poursuivre mes propres rêves et à ne jamais abandonner.")
                .pauseFor(1000)
                .callFunction(() => {
                stopAnimation(typewriter);
                typewriter = new Typewriter(page2, {
                    loop: false,
                    delay: 75,
                    cursorClassName: "cursor_livre"
                });
                typewriter
                    .pauseFor(1000)
                    .typeString("Grâce à toi, j'ai retrouvé la passion pour le design que j'avais perdue depuis longtemps. Tu as ressuscité en moi une étincelle de créativité et m'as encouragé(e) à explorer de nouveaux horizons. Je suis tellement reconnaissant(e) pour tout ce que tu as apporté dans ma vie.<br /><br />")
                    .pauseFor(500)
                    .typeString("Enfin, je veux te dire que ta présence dans ma vie est un vrai cadeau. Même si tu as déjà un copain, tu restes une amie très spéciale pour moi et je suis fier/fière de t'appeler ma confidente. Je suis impatient(e) de célébrer ton anniversaire avec toi et de partager de nombreux autres moments de bonheur et de rire ensemble.<br /><br />")
                    .pauseFor(500)
                    .typeString("Merci encore pour tout ce que tu as fait pour moi, ma chère amie. Tu es vraiment l'une des personnes les plus formidables que j'ai jamais rencontrées, et je suis tellement chanceux(se) de t'avoir dans ma vie.<br /><br />")
                    .pauseFor(500)
                    .typeString("Avec tout mon amour et toute mon amitié,<br />")
                    .typeString("Espoir Destiny")
                    .pauseFor(1000)
                    .callFunction(() => {
                    stopAnimation(typewriter);
                    showCrayon.value = true;
                })
                    .start();
            })
                .start();
        };
        const stopAnimation = (n) => {
            const cursor = document.getElementsByClassName("cursor_livre")[0];
            cursor.classList.remove("cursor_livre");
            cursor.classList.add("after_typed");
            n.stop();
        }

        watch(() => props.tigglerAnimation , startAnimation)
        return {
            startAnimation,
            stopAnimation,
            showCrayon,
            downloadImage
        };
    },
    components: { Download }
}
</script>

<template>
  <div class="container_livre" id="visuelLivre" @click="startAnimation">
    <div class="livre">
      <div class="page1"></div>
      <div class="page2"></div>
    </div>
    <img src="../assets/crayon_livre_oblique.png" class="crayon" v-show="showCrayon" />
  </div>
  <Download @click="downloadImage('visuelLivre')" />
</template>
<style>
.container_livre {
  width: 900px;
  height: 600px;
  display: flex;
}
.container_livre .livre {
  width: 865px;
  height: 550px;
  background-image: url(../assets/Livre_ouvert.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
}
.container_livre .crayon {
  width: 80px;
  height: 120px;
  object-fit: fill;
  align-self: center;
  margin-left: -125px;
  margin-bottom: -150px;
}
.container_livre .livre .page1 {
  width: 35%;
  height: 70%;
  margin-top: -70px;
  margin-left: 20px;
  transform: rotate(5.54deg);
}
.container_livre .livre .page2 {
  width: 34%;
  height: 68%;
  margin-top: -60px;
  margin-left: 45px;
}
.cursor_livre {
  color: rgba(207, 205, 205, 0.025);
}
.cursor_livre::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 56px;
  height: 100px;
  background-image: url('../assets/crayon_livre.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate3d(2, -5, 2, 180deg);
  margin-left: 2px;
  animation: typing 1s infinite;
}
@keyframes typing {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
.after_typed {
  opacity: 0;
}
</style>
