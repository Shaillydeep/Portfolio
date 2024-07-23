<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="drop-button">
          <button class="drop-button" @click="toggleDropdown">
            <img src="../assets/menu.png" alt="menu" class="menu">
          </button>
        </div>
        <Transition name="slide-fade">
        <div class="drop-menu">
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
        <button class="talk-button" @click="scrollToSection('Footer')">
          <span class="button-text">LET'S TALK</span>
          <img src="../assets/arrow.svg" alt="arrow" class="arrow">
        </button>
        
        </div>
      </Transition>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      const dropMenu = document.querySelector('.drop-menu');
      if (this.isDropdownOpen) {
        dropMenu.style.display = 'flex';
      } else {
        dropMenu.style.display = 'none';
      }
    }
  }
};
</script>

<style scoped>

.drop-button {
  display: none;
}

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

.talk-button {
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

.drop-menu{
  display: flex;
  flex: auto;

}

/* Mobile Responsiveness (Example) */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    /* Stack logo and links */
    gap: 1em;
  }

  .links {
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;

  }

  .drop-button {
    display: block;
    background-color: #1D1D1D;
    border-radius: 2rem;
    border: none;
    border-width: 0;
  }

  .menu {
    width: 20px;
    padding: 0.5em;
    align-items: center;
  }


  .drop-menu {
    display: none;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
