<template>
    <div class="image-carousel">
      <div class="carousel-track" ref="carouselTrack">
        <div class="carousel-content" ref="carouselContent">
          <img src="../assets/powerbi.png" alt="PowerBI">
          <img src="../assets/mysql.png" alt="MySQL">
          <img src="../assets/excel.png" alt="Excel">
          <img src="../assets/react.png" alt="React">
          <img src="../assets/python.png" alt="Python">
        </div>
        <!-- Duplicate content for seamless loop -->
        <div class="carousel-content" ref="carouselContent">
          <img src="../assets/powerbi.png" alt="PowerBI">
          <img src="../assets/mysql.png" alt="MySQL">
          <img src="../assets/excel.png" alt="Excel">
          <img src="../assets/react.png" alt="React">
          <img src="../assets/python.png" alt="Python">

          <img src="../assets/powerbi.png" alt="PowerBI">
          <img src="../assets/mysql.png" alt="MySQL">
          <img src="../assets/excel.png" alt="Excel">
          <img src="../assets/react.png" alt="React">
          <img src="../assets/python.png" alt="Python">
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
        const content = this.$refs.carouselContent;  
        let currentPosition = 0;
        let animationId;
  
        const animate = () => {
          currentPosition -= 0.7; // Adjust speed here
          track.style.transform = `translateX(${currentPosition}px)`;
  
          if (currentPosition <= -900) {
            console.log('Reset position');
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
  };
  </script>
  
  <style scoped>
.image-carousel {
  margin-top: 72px;
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
