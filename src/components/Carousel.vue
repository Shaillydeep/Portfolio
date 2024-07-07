<template>
    <div class="image-carousel">
      <div class="carousel-track" ref="carouselTrack">
        <img src="../assets/powerbi.png" alt="PowerBI">
        <img src="../assets/mysql.png" alt="MySQL">
        <img src="../assets/excel.png" alt="Excel">
        <img src="../assets/react.png" alt="React">
        <img src="../assets/python.png" alt="Python">


        <!-- Add more images as needed -->
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
        const images = track.querySelectorAll('img');
        const imageWidth = images[0].clientWidth;
        const totalWidth = imageWidth * images.length;
  
        let currentPosition = 0;
  
        setInterval(() => {
          currentPosition -= 1;
          // Correct the reset condition:
          if (currentPosition < -totalWidth + imageWidth) { 
            currentPosition = 0;
          }
          track.style.transform = `translateX(${currentPosition}px)`;
        }, 15); 
      }
    }
  }
  </script>
  
  <style scoped>
  .image-carousel {
    width: 100%; /* Adjust as needed */
    overflow: hidden;
  }
  
  .carousel-track {
    display: flex;
    transition: transform ease-in; /* Smooth transitions */
    gap: 100px;
  }
  
  .carousel-track img {
    width: 70px;
    display: block; /* Prevent spacing issues */
  }

  </style>
