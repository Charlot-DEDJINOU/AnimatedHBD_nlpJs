<script>
import IconWifi from './icons/IconWifi.vue'
import IconNetWork from './icons/IconNetWork.vue'
import IconBaterry from './icons/IconBaterry.vue'
import downloadImage from './untils'
import { ref } from 'vue'

export default {
  components: {
    IconWifi,
    IconNetWork,
    IconBaterry
  },
  setup() {
    const currentDate = ref(new Date())

    setInterval(() => {
      currentDate.value = new Date()
    }, 1000)

    const formatTime = (date) => {
      const hours = date.getHours()
      const minutes = date.getMinutes()

      const formattedHours = hours < 10 ? `0${hours}` : hours
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

      return `${formattedHours}:${formattedMinutes}`
    }

    const backgroundStyle = ref('')

    const handleCustomFileInputClick = () => {
      const input_file = document.getElementById('file')
      input_file.click()
    }

    const handleFileInputChange = (event) => {
      const name_file = event.target.files[0]
      if (name_file) {
        const reader = new FileReader()

        reader.onload = (e) => {
          const selectedFile = e.target.result
          backgroundStyle.value = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${selectedFile})`
          backgroundStyle.value += ' center/cover'
        }

        reader.readAsDataURL(name_file)
      } else {
        backgroundStyle.value = null
      }
    }

    return {
      currentDate,
      formatTime,
      backgroundStyle,
      handleCustomFileInputClick,
      handleFileInputChange,
      downloadImage
    }
  }
}
</script>

<template>
  <div class="big-container" id="smartphone">
    <div class="before-container">
      <span class="first-trait"></span>
      <span class="second-trait"></span>
    </div>
    <div class="container">
      <div class="first"></div>
      <div class="header-body-footer" :style="backgroundStyle && { background: backgroundStyle }">
        <div class="head">
          <span class="date-coin">{{ formatTime(currentDate) }}</span>
          <div class="header">
            <span class="header-rond"></span>
            <div class="beauty">
              <span class="beauty-rond"></span>
              <span class="beauty-trait"></span>
            </div>
          </div>
          <div class="after-header">
            <div class="icone">
              <IconWifi />
            </div>
            <div class="icone">
              <IconNetWork />
            </div>
            <div class="icone">
              <IconBaterry />
            </div>
          </div>
        </div>
        <div class="body">
          <div class="heure-date">
            <div class="heure">{{ currentDate.toLocaleTimeString() }}</div>
            <span class="date">{{
              currentDate.toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })
            }}</span>
          </div>
        </div>
        <div class="footer">
          <span class="footer-rond" @click="handleCustomFileInputClick"
            ><input type="file" id="file" @change="handleFileInputChange" accept="image/*"
          /></span>
          <span>Cliquer pour changer la photo</span>
        </div>
      </div>
      <div class="end"></div>
    </div>
  </div>
  <div @click="downloadImage('smartphone')">Telecharger</div>
</template>

<style scoped>
.big-container {
  width: 335px;
  height: 630px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container {
  position: relative;
  width: 330px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../assets/home6.jpg);
  background-size: contain;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
}

.before-container {
  position: relative;
  width: 1%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.first-trait {
  display: inline-block;
  background-color: black;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 7px;
  height: 70px;
  margin: 4px;
  background-image: url(../assets/home6.jpg);
  background-size: cover;
}

.second-trait {
  display: inline-block;
  background-color: black;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 7px;
  height: 40px;
  margin: 4px;
  background-image: url(../assets/home6.jpg);
  background-size: cover;
}

.first {
  height: 1%;
  background-color: black;
}

.end {
  height: 1%;
}

.header-body-footer {
  height: 610px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(../assets/charlot.jpg);
  background-size: cover;
  border: 5px solid #000000;
  border-radius: 40px;
}

.head {
  width: 90%;
  height: 25px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date-coin {
  display: inline-block;
  font-weight: bold;
  margin-top: 8px;
  opacity: 1;
  color: white;
}
.header-body-footer .header {
  width: 180px;
  height: 25px;
  background: #000000;
  border-radius: 0px 0px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 3px;
}

.after-header {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
}

.icone {
  align-self: flex-end;
  display: flex;
  align-items: end;
}

.body {
  width: 100%;
  height: 78%;
}

.header-body-footer .footer {
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.footer span {
  font-size: 10px;
  font-style: italic;
  margin-top: 5px;
}

.footer-rond {
  display: inline-block;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  border: 2px white solid;
  background: none;
  margin-top: 25px;
}

.footer-rond:hover {
  border: 2px solid teal;
}

#file {
  display: none;
}

.header-rond {
  display: inline-block;
  border-radius: 80px;
  width: 3px;
  height: 3px;
  background-color: white;
}

.beauty {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.beauty-rond {
  display: inline-block;
  border-radius: 80px;
  width: 8px;
  height: 8px;
  background-color: white;
  opacity: 8px;
  margin-right: 10px;
}

.beauty-trait {
  display: inline-block;
  border-radius: 10px;
  width: 60px;
  height: 3px;
  background-color: white;
}

.heure-date {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 1;
}

.date {
  text-transform: capitalize;
  font-size: 15px;
}

.heure {
  font-size: 60px;
  font-weight: 100;
}
</style>
