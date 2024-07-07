<template>
    <header class="header">
        <nav class="nav">
            <div class="links">
                <a href="#Projects" class="link" @click.prevent="scrollToSection('Projects')">Work</a>
                <a href="#About" class="link" @click.prevent="scrollToSection('About')">About</a>
                <a href="#Experience" class="link" @click.prevent="scrollToSection('Experience')">Experience</a>
                <a href="#Skills" class="link" @click.prevent="scrollToSection('Skills')">Skills</a>
            </div>
            <button class="button">
                <p id="button-text">LET'S TALK </p><img id="arrow" src="../assets/arrow.svg" alt="arrow">
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
        element.scrollIntoView({
          behavior: 'smooth', // Enable smooth scrolling
          block: 'start' // Optional: Scroll to top of the element
        });
      }
    }
  }
};
</script>

<style scoped>

html {
  scroll-behavior: smooth; 
}

#button-text {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 97.2%;
}

#arrow {
    width: 34px;
    height: 34px;
    margin-left: 10px;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #0E1010;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links {
    display: flex;
    /* Remove justify-content: center */
    align-items: center;
    margin: auto;
    gap: 35px;
    /* Add this to center horizontally */
}

.link {
    margin: 0 10px;
    text-decoration: none;
    color: #aeb2ba;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    
}

.button {
    padding: 8px 8px 8px 20px;
    width: fit-content;
    background-color: #1D1D1D;
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    right: 8%;

    display: flex;
    align-items: center;
}
</style>
