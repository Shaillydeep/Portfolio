<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="links">
          <a href="#Projects" class="link" @click.prevent="scrollToSection('Projects')">
            Work
          </a>
          <a href="#About" class="link" @click.prevent="scrollToSection('About')">
            About
          </a>
          <a href="#Experience" class="link" @click.prevent="scrollToSection('Experience')">
            Experience
          </a>
          <a href="#Skills" class="link" @click.prevent="scrollToSection('Skills')">
            Skills
          </a>
        </div>
        <button class="button" @click="scrollToSection('Footer')">
          <span class="button-text">LET'S TALK</span>
          <img src="../assets/arrow.svg" alt="arrow" class="arrow">
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
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
  padding: 1em 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1em;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 2em;
  /* Space between links */
  font-size: 16px;
  line-height: 26px;
}

.link {
  text-decoration: none;
  color: #AEB2BA;
  transition: color 0.3s ease;
}

.link:hover {
  color: white;
}

.button {
  display: flex;
  align-items: center;
  background-color: #1D1D1D;
  color: white;
  gap: 0.8em;
  border-radius: 30px;
  padding: 0.5em 1em;
  cursor: pointer;

}

.arrow {
  width: 2.2em;
  height: 2.2em;

}

/* Mobile Responsiveness (Example) */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    /* Stack logo and links */
    align-items: flex-start;
  }

  .links {
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
  }
}
</style>
