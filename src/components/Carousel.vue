<script setup>
import data from '../content/data';
</script>

<template>
  <div class="image-carousel">
    <div class="carousel-track" ref="carouselTrack">
      <div class="carousel-content" ref="carouselContent">
        <img v-for="image in carousel.images" :src="image" />
      </div>
      <!-- Duplicate content for seamless loop -->
      <div class="carousel-content">
        <img v-for="image in carousel.images" :src="image" />
        <img v-for="image in carousel.images" :src="image" />
      </div>
    </div>
  </div>
</template>
  <script>
  export default {
    mounted() {
      this.setupCarousel();
    },
    methods: {
      setupCarousel() {
        const track = this.$refs.carouselTrack;
        const carouselContent = this.$refs.carouselContent;
        const imageCount = carouselContent.querySelectorAll('img').length;
        console.log('Number of images:', imageCount);
        let currentPosition = 0;
        let animationId;
        const x = -180 * imageCount;

        const animate = () => {
          currentPosition -= 0.7; // Adjust speed here
          track.style.transform = `translateX(${currentPosition}px)`;
  
          if (currentPosition <= x) {
            currentPosition = 0; // Reset position
          }
  
          animationId = requestAnimationFrame(animate);
        };
  
        animationId = requestAnimationFrame(animate);
      },
      beforeUnmount() {
        cancelAnimationFrame(this.animationId);
      },
    },
    data() {
      return {
        carousel: data.carousel,
      };
    },
  };
  </script>
  
  <style scoped>
.image-carousel {
/*   margin-top: 72px;*/
  width: 100%;
  overflow: hidden;
  position: relative; /* To position the gradient */

}

.image-carousel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 150px; /* Adjust gradient width as needed */
  height: 100%;
  background: linear-gradient(to right, rgba(14, 16, 16, 1), rgba(255, 255, 255, 0)); /* White to transparent gradient */
  pointer-events: none; /* Allow clicks to pass through */
  z-index: 1;
}

.image-carousel::after { 
  content: "";
  position: absolute;
  top: 0;
  right: 0; /* Position on the right */
  width: 150px;  
  height: 100%;
  background: linear-gradient(to left, rgba(14, 16, 16, 1), rgba(255, 255, 255, 0)); /* Gradient direction reversed */
  pointer-events: none;
}
  
  .carousel-track {
    display: flex;
    gap: 100px;
    will-change: transform; /* Optimize for better animation performance */
  }
  
  .carousel-content {
    display: flex;
    gap: 100px;
  }
  
  
  .carousel-track img {
    width: 80px;
    display: block; 
  }
  </style>
