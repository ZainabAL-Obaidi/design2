<template>
  <div class="question-container">
    <div class="question-box">
      <h2>Question 1: Spelling</h2>
      <p>Which option is the correct spelling?</p>
      <ul>
        <li @click="selectAnswer('a')">a) Recieve</li>
        <li @click="selectAnswer('b')">b) Recieve</li>
        <li @click="selectAnswer('c')">c) Receive</li>
        <li @click="selectAnswer('d')">d) Recive</li>
      </ul>
      <input type="text" v-model="userAnswer" @keydown.enter="handleAnswer" placeholder="Type your answer...">
      <button @click="nextQuestion">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAnswer: '' // Store user's answer for Question 1
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
      // Pass the selected answer to the next question through route query
      this.$router.push({ path: '/question2', query: { ...this.$route.query, question1: answer } });
    },
    nextQuestion() {
      this.selectAnswer(this.userAnswer);
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
