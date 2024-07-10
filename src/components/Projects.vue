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
            title: 'Hospital Patient Disease Data Analysis & Predictive Modelling',
            year: 2024, 
            description: "I harnessed machine learning to predict 49 diseases based on a patient's symptoms, age, and sex. This project involved wrangling messy medical records, transforming data into a format the model could understand, and visualizing results to uncover patterns for more informed diagnoses.",
            outcome: "The predictive model achieved an accuracy of 98%. This high accuracy rate can help doctors make more informed decisions and provide better care to patients. The project also highlighted the potential of machine learning in healthcare to improve patient outcomes and reduce costs.",
            /* tools: ['Tool A', 'Tool B', 'Tool C'], */
            role: ['Data Analyst',' Machine Learning Engineer'],
            deliverables: ['Data Wrangling', 'Feature Engineering', 'Model Training', 'Model Evaluation'],
            imagePath: hospitalDataAnalysis,
          },
          {
            title: 'Eateries Customer Segmentation',
            year: 2023,
            description: 'This project highlights my ability to transform raw data into customer insights that can inform targeted marketing strategies. I used k-means clustering to segment student customers at on-campus eateries based on their spending habits and preferences. By wrangling data on purchases, I revealed four distinct student groups: budget-minded Chinese food lovers, students with a sweet tooth for snacks, those who splurge on fast food, and occasional diners.',
            outcome: 'The insights from this project informed the dining services team on how to better target and engage with students. For example, they could create promotions for the budget-minded Chinese food lovers or offer new snack options for students with a sweet tooth.',
            /* tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'], */
            role: ['Data Analyst', 'Business Intelligence Analyst'],
            deliverables: ['Data Wrangling', 'Exploratory Data Analysis', 'Customer Segmentation', 'Insights Presentation'],
            /* imagePath: hospitalDataAnalysis, */
          },
        ]),
      };
    },
  };
  </script>
  
  <style scoped>
  /* ... your existing styles for Projects ... */
  </style>
