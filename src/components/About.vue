<script setup>
import Headline from './Headline.vue'
</script>

<template>
    <div class="about" id="About">
        <Headline headline="About" />

        <div class="about-content">
            <div class="about-img">
                <img src="../assets/hero.png" alt="hero">
            </div>

            <div class="about-text">
                <div class="about-head">
                    <h3>
                        Hi, I'm Shailly!
                        <br>
                        A data analyst by day, a curious learner by night. I'm always expanding my skillset and exploring
                        new ways to leverage data for good.
                    </h3>
                </div>
                <p>
                    Hey there! I'm Shailly Deep, an aspiring Data Analyst based in Delhi. I have recently completed my
                    B.Tech Computer
                    Science Engineering degree from SRM University. I have 8 months of work experience.
                    <br><br>
                    I leverage my knowledge of data manipulation, analysis (using tools like SQL and Python), and
                    visualization and ChatGPT
                    to tell compelling data stories. I love to find new and interesting hidden patterns and turning data
                    into solutions.
                    <br><br>
                    I also like tinkering with other technologies & fields like computer vision, web development
                    frameworks broadening my
                    analytical toolkit to tackle real-world challenges from diverse perspectives.
                </p>
            </div>

        </div>

    </div>
</template>

<style scoped> 
headline {
    margin-top: 0;
    z-index: 10;
    display: flex;
}

.about {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 72px;
    padding: 72px 0;
    text-align: left;
}

.about-content {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    max-width: 1200px;
}



.about-img img {
    border-radius: 50%;
    height: 81px;
    width: 81px;
}

.about-head {
    width: 200%;
}

.about-head h3 {
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: -.03em;
    line-height: 1.3em;
    text-align: start;
    color:  #ffffff;
    margin-bottom: 24px;
    margin-top: 0px;
}

.about-text {
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -.01em;
    line-height: 1.6em;
    text-align: start;
    color: #aeb2ba;
    text-decoration: none;
    text-transform: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 50px;
}

.about-text p{
    margin: 0;
}

</style>
