<script setup>
import Headline from './Headline.vue';
import ProjectItem from './ProjectItem.vue';

import data from '../content/data';
</script>

<template>
  <section class="projects" id="Projects">
    <Headline headline="Projects" />
    <div class="container">
      <div class="project-list">
        <ProjectItem v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  components: {
    Headline,
    ProjectItem,
  },
  data() {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style scoped>
/* ... your existing styles for Projects ... */
</style>
