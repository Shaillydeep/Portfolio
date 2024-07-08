<script setup>
import Headline from './Headline.vue'
import Pill from './Pill.vue'
</script>

<template>
    <div class="skills" id = 'Skills'>
        <div class="skills-head">
            <Headline headline="Skills" />
            <p>Here, I showcase the Technologies I have worked with.</p>
        </div>

        <div class="skill-pills">
            <Pill v-for="skill in skills" :key="skill" :text="skill" />
        </div>
    </div>

</template>

<script>

export default {
    components: {
        Headline,
        Pill
    },
    data() {
        return {
            skills: [
                'Python',
                'SQL',
                'Power BI',
                'Excel',
                'Data Wrangling, Analysis & Visualization',
                'Predictive Modelling',
                'ReactJs',
                'VueJs',
                'CSS',
                'HTML',
                'Computer Vision',
                'Machine Learning',
                'Google Cloud Platform',
            ]
        }
    }
}

</script>

<style scoped>

.skills {
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 60px;
    height: min-content;
    justify-content: center;
    max-width: 1200px;
    overflow: visible;
    position: relative;
    width: 100%;
}

.skills-head p{
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -.01em;
    line-height: 1.6em;
    text-align: start;
    color:#aeb2ba;    
}

.skill-pills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: flex-start;
    width: 60%;
}

.skill-pills .pill {
    margin: 0 0 10px 10px;
}

</style>
