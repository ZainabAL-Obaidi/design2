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

      const correctAnswers = { question1: 'c', question2: 'b', question3: 'a' };

      // Logic to check answers and generate feedback
      if (answers.question1 === correctAnswers.question1) {
        this.results.push('Question 1: Correct! Receive" is the correct spelling according to standard English spelling rules. The word "receive" follows the rule "i before e except after c," which means that in words where the vowel sound is a long "ee" and comes after the letter "c," the "e" comes before the "i." This is an exception to the usual rule of "i before e.');
      } else {
        this.results.push(`Question 1: Incorrect. Your answer was ${answers.question1}. The correct answer is ${correctAnswers.question1} "Receive". The word receive follows standard English spelling rules, specifically the exception i before e except after c, where the vowel sound is a long ee and comes after the letter c. This rule dictates that the e comes before the i, which is an exception to the usual spelling rule of i before e.`);
      }

      if (answers.question2 === correctAnswers.question2) {
        this.results.push('Question 2: Correct! Because "Went" is the correct past tense form of "go". It follows the standard English grammar rules for forming past tense sentences.');
      } else {
        this.results.push(`Question 2: Incorrect. Your answer was ${answers.question2}. The correct answer is ${correctAnswers.question2}."They went to the beach." because "Went" is the correct past tense form of "go". It follows the standard English grammar rules for forming past tense sentences.`);
      }

      if (answers.question3 === correctAnswers.question3) {
        this.results.push('Question 3: Correct! Because ephemeral is an adjective that describes something that is short-lived, transient, or lasting for a brief period.');
      } else {
        this.results.push(`Question 3: Incorrect. Your answer was ${answers.question3}. The correct answer is ${correctAnswers.question3} "Lasting for a short time; fleeting". Because ephemeral is an adjective that describes something that is short-lived, transient, or lasting for a brief period.`);
      }

      this.feedbackReady = true; // Set flag to true once feedback is ready to display
    },
    restartTest() {
      // Reset results and navigate to start of the test
      this.results = [];
      this.feedbackReady = false;
      this.$router.push('/HomePage');
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
