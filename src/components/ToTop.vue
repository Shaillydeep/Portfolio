<template>
    <button v-show="showScrollToTop" @click="scrollToTop" class="scroll-to-top" :class="{show: showScrollToTop}">
        <span class="arrow">▲</span> <!-- You can use an icon or image here too -->
    </button>
</template>

<script>
export default {
    data() {
        return {
            showScrollToTop: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showScrollToTop = window.scrollY > 100;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    },
};
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: white;
    /* Customize color */
    color: black;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    /* Optional: Smooth fade-in/out */
    opacity: 0;
}

.scroll-to-top:hover {
    opacity: 1;
}

.arrow {
    font-size: 20px;
}

/* Hide the button initially */
.scroll-to-top {
    opacity: 0;
    pointer-events: none;
    /* Prevent clicks while invisible */
}

.scroll-to-top.show {
    opacity: 1;
    pointer-events: auto;
}
</style>
