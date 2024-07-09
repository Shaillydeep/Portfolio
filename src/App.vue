<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Carousel from './components/Carousel.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <main>
      <div class="container">
        <Hero />
        <Carousel />
        <Projects />
        <About />
        <Experience />
        <Skills />
      </div>
    </main>
    <Footer />
</template>

<script>

export default {
  components: {
    Header,
    Hero,
    Carousel,
    Projects,
    About,
    Experience,
    Skills,
    Footer,
  },
};
</script>

<style>
#app {
  margin-inline: 10em;
}
</style>
