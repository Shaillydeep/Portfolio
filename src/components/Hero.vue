<script setup>
import data from '../content/data';
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <img src="../assets/hero.png" alt="Shailly Deep" class="hero-image">
                <div class="text-content">
                    <h1>{{ hero.textContent }}</h1>
                    <div class="sub-text">
                        <span class="dot"></span>
                        <p>{{ hero.subText }}</p>
                    </div>
                </div>
            </div>
            <div class="hero-desc">
                <p class="desc" v-for="desc in hero.desc">{{ desc }}</p>
            </div>

            <div class="hero-fun-fact">
                <p class="desc" v-for="fact in hero.funFact">{{ fact }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            hero: data.hero,
        };
    },
};
</script>

<style scoped>
.hero {
    padding: 4em 0;
    margin-bottom: 1rem;
}

.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
}

.hero-content {
    display: flex;
    align-items: flex-end;
    gap: 2em;
    /* Space between image and text */
}

.hero-image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    /* Make it a circle */
    object-fit: cover;
    /* Ensure image scales nicely */
}

.text-content {
    text-align: left;
}

.text-content h1 {
    line-height: 3.25rem;
    font-size: 2.6rem;
    margin-bottom: 0;
    font-weight: 700;
}

.sub-text {
    display: flex;
    align-items: center;
}

.sub-text .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #2cffbf;
    border-radius: 50%;
    margin: 0.2em 0.6em 0.2em 0em;
}

.sub-text p {
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    color: #aeb2ba;
    margin: 0;
    /* Reset margin for better control */
}

.hero-desc{
    font-size: 2.75rem;
    line-height: 3.5rem;
    font-weight: 500;
    margin: 0;
}

.desc {
    margin: 0;
}

.hero-fun-fact {
    color: #aeb2ba;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
    margin: 0;
}

/* Mobile Responsiveness (Example) */
@media (max-width: 768px) {
    .hero-content {
        flex-direction: row;
        /* Stack image and text vertically */
        align-items: center;
        /* Center horizontally */
    }

    .hero-image {
        width: 80px;
        height: 80px;
    }

    .text-content h1 {
        font-size: 2em;
    }
}
</style>
