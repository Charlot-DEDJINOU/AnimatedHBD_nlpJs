<script>
import Devinette from './Devinette.vue';
import VisuelLivre from './VisuelLivre.vue'
import { ref } from 'vue'

export default {
    components : {
        Devinette ,
        VisuelLivre
    } ,
    setup() {
    const showSession = ref(false)

    const nextSession = (payload) => {
      if(payload.message){
        showSession.value = true
      }
    }
    return {
      nextSession ,
      showSession
    }
  }
}
</script>

<template>
    <div class="session">
        <div class="LastSession">
            <Devinette @backAnswer="nextSession" devinette="Tout le monde en a une, mais personne ne peut la perdre , Qui suis je ?" numAnswer="3"/>
            <VisuelLivre v-if="showSession"/>
        </div>
    </div>
</template>
<style>
.LastSession 
{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>