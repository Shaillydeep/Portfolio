<template>
    <section class="about" id="About">
        <Headline headline="About" />
        <div class="about-content">
            <div class="about-image">
                <img src="../assets/hero.png" alt="Shailly Deep">
            </div>
            <div class="about-text">
                <div class="greeting">
                    <h3>
                        Hi, I'm Shailly!
                        <br>
                        A data analyst by day, a curious learner by night.
                        I'm always expanding my skillset and exploring
                        new ways to leverage data for good.
                    </h3>
                </div>
                <div class="about-details">
                    <p>
                        Hey there! I'm Shailly Deep, an aspiring Data Analyst based in Delhi. I have recently completed my
                        B.Tech Computer Science Engineering degree from SRM University. I have 8 months of work experience.
                    </p>
                    <p>
                        I leverage my knowledge of data manipulation, analysis (using tools like SQL and Python),
                        and visualization and ChatGPT to tell compelling data stories.
                        I love to find new and interesting hidden patterns and turning data into solutions.
                    </p>
                    <p>
                        I also like tinkering with other technologies & fields like computer vision, web development
                        frameworks broadening my analytical toolkit to tackle real-world challenges from diverse
                        perspectives.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Headline from './Headline.vue';

export default {
    components: {
        Headline,
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

p {
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
        text-align: center;
        /* Center text on smaller screens */
    }

    .about-image {
        max-width: 200px;
        margin: 0 auto 20px auto;
        /* Center image */
    }

    .greeting h3 {
        font-size: 2rem;
    }
}
</style>
