<template>
  <header class="header">
    <nav class="nav container">
      <div class="links">
        <a href="#Projects" class="link" @click.prevent="scrollToSection('Projects')">Work</a>
        <a href="#About" class="link" @click.prevent="scrollToSection('About')">About</a>
        <a href="#Experience" class="link" @click.prevent="scrollToSection('Experience')">Experience</a>
        <a href="#Skills" class="link" @click.prevent="scrollToSection('Skills')">Skills</a>
      </div>
      <button class="button" @click="scrollToSection('Footer')">
        <span class="button-text">LET'S TALK</span>
        <img src="../assets/arrow.svg" alt="arrow" class="arrow">
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(element)
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #0E1010;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  /* Use rem for consistent spacing */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.links {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-left: 2rem;

}

.link {
  text-decoration: none;
  color: #aeb2ba;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.2s ease;
  /* Add a smooth color transition */
}

.link:hover {
  color: #fff;
  /* Change link color on hover */
}

.button {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #1D1D1D;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  /* Smooth transition for button */
}

.button:hover {
  background-color: #333;
  /* Darken button color on hover */
}

.button-text {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  margin-right: 0.5rem;
}

.arrow {
  width: 24px;
  height: 24px;
}

/* Media Query for Smaller Screens */
@media (max-width: 768px) {

  /* Adjust breakpoint as needed */
  .nav {
    flex-direction: column;
    /* Stack navigation vertically */
    align-items: flex-start;
  }

  .links {
    margin-bottom: 1rem;
    /* Add spacing between links and button */
    flex-direction: column;
    /* Stack links vertically */
  }

  .button {
    margin-left: 0;
    /* Reset margin for button */
  }
}
</style>
