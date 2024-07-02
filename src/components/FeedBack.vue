<template>
  <div class="feedback-container">
    <div class="feedback-box">
      <h2>Test Feedback</h2>
      <div v-if="feedbackReady">
        <p v-for="(result, index) in results" :key="index">
          {{ result }}
        </p>
      </div>
      <button @click="restartTest">Restart Test</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [], // Array to store feedback results
      feedbackReady: false // Flag to determine if feedback is ready to display
    };
  },
  mounted() {
    this.checkAnswers();
  },
  methods: {
    checkAnswers() {
      const answers = this.$route.query;

      // Example logic to check answers and generate feedback
      if (answers.question1 === 'a') {
        this.results.push('Question 1: Correct!');
      } else {
        this.results.push('Question 1: Incorrect. Your answer was incorrect.');
      }

      if (answers.question2 === 'b') {
        this.results.push('Question 2: Correct!');
      } else {
        this.results.push('Question 2: Incorrect. Your answer was incorrect.');
      }

      if (answers.question3 === 'c') {
        this.results.push('Question 3: Correct!');
      } else {
        this.results.push('Question 3: Incorrect. Your answer was incorrect.');
      }

      this.feedbackReady = true; // Set flag to true once feedback is ready to display
    },
    restartTest() {
      // Reset results and navigate to start of the test
      this.results = [];
      this.feedbackReady = false;
      this.$router.push('/question1');
    }
  }
};
</script>

<style scoped>
.feedback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
  background-color: black; /* Change background color as needed */
}

.feedback-box {
  width: 400px; /* Adjust width as needed */
  padding: 20px;
  border: 2px solid white; /* Add border around the content box */
  border-radius: 8px;
  text-align: center;
  color: white; /* Text color */
}

.feedback-box h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feedback-box p {
  color: white; /* Text color */
  margin: 10px 0;
}

.feedback-box button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 4px;
}

.feedback-box button:hover {
  background-color: white;
  color: black;
}

</style>
