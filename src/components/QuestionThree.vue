<template>
  <div class="question-container">
    <div class="question-box">
      <h2>Question 3: Word Meaning</h2>
        <p>What does the word "ephemeral" mean?</p>
          <ul>
            <li @click="selectAnswer('a')">a) Lasting for a short time; fleeting</li>
            <li @click="selectAnswer('b')">b) Continuous; never-ending</li>
            <li @click="selectAnswer('c')">c) Hard to understand or explain</li>
            <li @click="selectAnswer('d')">d) A large body of water</li>
          </ul>
  <input type="text" v-model="userAnswer" @keydown.enter="handleAnswer">
  <button @click="nextQuestion">Next</button>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        correctAnswer: '' // Define correct answer for Question 3
      };
    },
    methods: {
      handleAnswer() {
        const answer = this.userAnswer.toLowerCase();
        if (answer === 'a' || answer === 'b' || answer === 'c' || answer === 'd') {
          this.selectAnswer(answer);
        } else {
          console.log('Please type a, b, c, or d');
        }
      },
      selectAnswer(answer) {
        console.log('Selected Answer:', answer);
        // Store the selected answer in your data or Vuex store
      },
      nextQuestion() {
        if (this.$route.path === '/question1') {
          this.$router.push('/question2');
        } else if (this.$route.path === '/question2') {
          this.$router.push('/question3');
        } else if (this.$route.path === '/question3') {
            this.$router.push('/feedback');
        } else {
          this.$router.push('/'); // Redirect to start or results page after last question
        }
      }
    }
  };
  </script>


<style scoped>
.question-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
  background-color: black; /* Change background color as needed */
}

.question-box {
  width: 400px; /* Adjust width as needed */
  padding: 20px;
  border: 2px solid white; /* Add border around the content box */
  border-radius: 8px;
  text-align: center;
  color: white; /* Text color */
}

.question-box h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.question-box p {
  color: white; /* Text color */
}

.question-box ul {
  list-style-type: none;
  padding: 0;
}

.question-box ul li {
  cursor: pointer;
  margin-bottom: 5px;
}

.question-box input {
  margin-top: 10px;
  padding: 8px;
  width: calc(100% - 20px); /* Adjust width to fit */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.question-box button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 4px;
}

.question-box button:hover {
  background-color: white;
  color: black;
}

</style>