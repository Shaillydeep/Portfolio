<script setup>
import Headline from './Headline.vue';
import Pill from './Pill.vue';
import data from '../content/data';
</script>

<template>
    <section class="skills" id="Skills">
        <div class="skills-head">
            <Headline headline="Skills" />
            <p>Here, I showcase the Technologies I work with.</p>
        </div>

        <div class="skill-pills">
            <Pill v-for="skill in skills" :key="skill" :text="skill" />
        </div>
    </section>
</template>

<script>
export default {
    components: {
        Headline,
        Pill,
    },
    data() {
        return {
            skills: data.skills,
        };
    },
};
</script>

<style scoped>

.headline{
    margin-bottom: 0.1rem;
}

.skills {
    margin-top: 5rem;
    display: flex;
    text-align: left;
    flex-direction: row;
    gap: 4rem;
    justify-content: space-between;
}

.skills-head {
    margin-bottom: 2.5rem;
    /* Add spacing between heading and skills */
}

.skills-head p{
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: #aeb2ba;
    margin:0
}

.skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-end;
    flex-direction: row;
    width: 50%;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .skills{
        flex-direction: column;
    }

    .skill-pills{
        width: auto;
        justify-content: flex-start;
    }
}
</style>
