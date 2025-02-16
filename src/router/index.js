import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import QuestionOne from '../components/QuestionOne.vue';
import QuestionTwo from '../components/QuestionTwo.vue';
import QuestionThree from '../components/QuestionThree.vue';
import FeedBack from '../components/FeedBack.vue'; // Import FeedBack component

const routes = [
  { path: '/HomePage', component: HomePage },
  { path: '/question1', component: QuestionOne },
  { path: '/question2', component: QuestionTwo },
  { path: '/question3', component: QuestionThree },
  { path: '/feedback', component: FeedBack }, // Add route for FeedBack component
  { path: '/', redirect: '/HomePage' } // Default redirect to Home Page
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

