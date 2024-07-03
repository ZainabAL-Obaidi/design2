<template>
  <div class="home">
    <div class="content-box">
      <h1>Welcome to the English Test</h1>
      <div class="intro-text">
        <p>This website will help you assess your English proficiency through multiple-choice questions<br>
            covering various aspects of the English language. Click "Start Test" whenever you feel ready.</p>

        <router-link to="/question1">
          <button class="start-button">Start Test</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.content-box {
  padding: 20px;
  border: 2px solid white; /* Add border around the content box */
  border-radius: 8px;
  text-align: center;
}

.intro-text {
  margin-top: 20px; /* Add margin to separate from the border */
}

h1 {
  color: white;
}

p {
  color: white;
}

.start-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s, border-color 0.3s;
}

.start-button:hover {
  color: green;
  border-color: rgb(47, 156, 14);
}

.start-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 20%, transparent 40%);
  transform: translate(-30%, -30%);
  transition: transform 0.5s ease;
  z-index: -1;
  pointer-events: none;
}

.start-button:hover::before {
  transform: translate(20%, 20%);
}
</style>
