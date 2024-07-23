<script setup>
import Headline from './Headline.vue'
import Pill from './Pill.vue'
import data from '../content/data';
</script>

<template>
    <section class="experience" id="Experience">
        <Headline headline="Experience" />
        <div class="experience-content">
            <div v-for="(experience, index) in experiences" :key="index" class="experience-card">
                <div class="experience-head" @click="toggleDetails(index)">
                    <!-- Use a method for clarity -->
                    <h3>
                        {{ experience.role }}
                        <br />
                        <span class="company">{{ experience.company }}</span>
                    </h3>
                    <div class="duration-arrow">
                        <Pill :text="experience.duration" />
                        <span class="arrow" :class="{ 'open': experience.isOpen }">▼</span>
                    </div>
                </div>
                <transition name="slide-fade">
                    <ul v-show="experience.isOpen" class="responsibilities">
                        <li v-for="(responsibility, i) in experience.responsibilities" :key="i">
                            {{ responsibility }}
                        </li>
                    </ul>
                </transition>
            </div>
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
            experiences: data.experience,
        };
    },
    methods: {
        toggleDetails(index) {
            this.experiences[index].isOpen = !this.experiences[index].isOpen;
        },
    },
};
</script>

<style scoped>
.experience {
    color: white;
    text-align: left;
    /* Consistent section padding */
}

.experience-content {
    display: grid;
    /* Use grid for better layout control */
    /* Responsive columns */
    gap: 20px;
    justify-items: start;
}

.experience-card {
    border: #333;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    padding: 8px 20px;
    border-radius: 8px;
    width: -webkit-fill-available;
}



.experience-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.experience-head h3 {
    margin: 0;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 500;
}

.company {
    font-size: 0.7em;
    color: #aeb2ba;
    letter-spacing: -0.01rem;
    /* Lighter color for company name */
}

.duration-arrow {
    display: flex;
    align-items: center;
}

.arrow {
    margin-left: 10px;
    transition: transform 0.3s ease;
}

.arrow.open {
    transform: rotate(180deg);
}

.responsibilities {
    margin-top: 15px;
    list-style-type: disc;
    padding-left: 20px;
    /* Indent list items */
    font-size: 1.1rem;
    line-height: 2rem;
    font-weight: 400;
}

/* Transition for smooth expand/collapse */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.4s ease-out;
    /* Adjust transition duration and easing as needed */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    max-height: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    max-height: 300px;
    /* Set to a reasonable maximum height or calculate dynamically */
}

/* Responsive Styles (Example) */
@media (max-width: 768px) {
    .experience-content {
        grid-template-columns: 1fr;
        width: fit-content;
        /* Single column on smaller screens */
    }

    .experience-head {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
}
</style>
