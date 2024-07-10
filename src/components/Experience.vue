<script setup>
import Headline from './Headline.vue'
import Pill from './Pill.vue'
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
import Headline from './Headline.vue';
import Pill from './Pill.vue';

export default {
    components: {
        Headline,
        Pill,
    },
    data() {
        return {
            experiences: [{
                role: 'Trainee Data Analyst',
                company: 'DRDO - INMAS',
                duration: 'April 2024 - May 2024',
                responsibilities: [
                    'Utilized tools (Excel, Python & SQL) to clean, manipulate, and analyze data sets.',
                    'Utilized programming languages and database tools for data manipulation, filtration, and analysis tasks. ',
                    'Assisted in the development of data models and visualizations.',
                    'Leveraged pivot tables and data filtering techniques in Excel to identify key trends.',

                ],
                isOpen: false // Add isOpen property to control visibility
            },
            {
                role: 'Data Analyst Intern',
                company: 'IBM - CSRBOX',
                duration: 'June 2023 - May 2023',
                responsibilities: [
                    'Analyzed data sets using Python (pandas & plots) to identify trends and patterns.',
                    'Applied data cleaning techniques to ensure data quality and consistency.',
                    'Learned and implemented machine learning algorithms for predictive analytics.',
                    'Received mentorship IBM Experts on data analysis and model building.',
                ],
                isOpen: false
            },
            ],
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
        /* Single column on smaller screens */
    }
}
</style>
