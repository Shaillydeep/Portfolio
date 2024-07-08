<script setup>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Hero />
  <Carousel />
  <Projects />
  <About />
  <Experience />
  <Skills />
  <Footer />
</template>

<style>

#app {
  max-width: 72vw;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #0E1010;
  color: #ffffff;
  font-family: 'DM Sans','DM Sans placeholder', sans-serif;
  position: absolute;
  top: 0px;
  padding-inline: 9%;
}

</style>
