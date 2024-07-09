<template>
    <section class="projects" id="Projects">
      <Headline headline="Projects" />
      <div class="container"> 
        <div class="project-list">
          <ProjectItem 
            v-for="(project, index) in projects" 
            :key="index" 
            :project="project" 
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Headline from './Headline.vue';
  import ProjectItem from './ProjectItem.vue';
  import { ref } from 'vue';
  import hospitalDataAnalysis from '../assets/hospital-data-analysis.png'; 
  
  export default {
    name: 'Projects',
    components: {
      Headline,
      ProjectItem,
    },
    data() {
      return {
        projects: ref([
          {
            title: 'Eateries Customer Segmentation',
            year: 2023,
            description: 'This project highlights my ability to transform raw data into customer insights that can inform targeted marketing strategies. I used k-means clustering to segment student customers at on-campus eateries based on their spending habits and preferences. By wrangling data on purchases, I revealed four distinct student groups: budget-minded Chinese food lovers, students with a sweet tooth for snacks, those who splurge on fast food, and occasional diners.',
            outcome: 'The insights from this project informed the dining services team on how to better target and engage with students. For example, they could create promotions for the budget-minded Chinese food lovers or offer new snack options for students with a sweet tooth.',
            tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
            role: ['Data Analyst', 'Business Intelligence Analyst'],
            deliverables: ['Data Wrangling', 'Exploratory Data Analysis', 'Customer Segmentation', 'Insights Presentation'],
            imagePath: hospitalDataAnalysis,
          },
          {
            title: 'Project 2',
            year: 2024, 
            description: 'This is a project 2 description',
            /* outcome: 'This is a project 2 outcome',
            tools: ['Tool A', 'Tool B', 'Tool C'],
            role: ['Role A', 'Role B'],
            deliverables: ['Deliverable A', 'Deliverable B'],
            imagePath: hospitalDataAnalysis, */
          },
        ]),
      };
    },
  };
  </script>
  
  <style scoped>
  /* ... your existing styles for Projects ... */
  </style>
