<script setup>
import Headline from './Headline.vue';
import data from '../content/data';
</script>

<template>
    <section class="about" id="About">
        <Headline headline="About" />
        <div class="about-content">
            <div class="about-image">
                <img src="../assets/hero.png" alt="Shailly Deep">
            </div>
            <div class="about-text">
                <div class="greeting">
                    <h3 v-for="greet in about.greeting">{{ greet }}</h3>
                </div>
                <div class="about-details">
                    <p v-for="detail in about.details">{{ detail }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: {
        Headline,
    },
    data() {
        return {
            about: data.about,
        };
    },
};
</script>

<style scoped>
.about {
    color: white;
    /* Adjust padding as needed */
    text-align: left;
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    /* Allow wrapping on smaller screens */
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
}

.about-image {
    width: 4.5rem;
    height: 4.5rem;
    /* Full width on small screens */
    max-width: 300px;
    /* Limit width on larger screens */
    border-radius: 50%;
    /* Make image circular */
    overflow: hidden;
    /* Hide image overflow */
}

.about-image img {
    width: 100%;
    height: auto;
    display: block;
    /* Prevent image from overflowing its container */
}

.about-text {
    flex: 1;
    display: flex;
    gap: 4rem
    /* Allow text to take up remaining space */
}

.greeting {
    margin-bottom: 20px;
    width: 180%;
}

.greeting h3 {
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 0;

}

.about-details p{
    color: #aeb2ba;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    /* Improve paragraph readability */
    margin-bottom: 1rem;
    margin-top: 0;
}

/* Responsive Styles (Example) */
@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
        /* Stack image and text vertically */
        /* Center text on smaller screens */
    }

    .about-image {
        max-width: 200px;
        margin: 0rem 2rem;
        /* Center image */
    }

    .about-text{
        flex-direction: column;
        gap: 2rem;
    }

    .greeting{
        width: auto;
    }

    .greeting h3 {
        font-size: 2.5rem;
        line-height: 2.6rem;
    }

}
</style>
