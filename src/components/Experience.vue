<script setup>
import Headline from './Headline.vue'
import Pill from './Pill.vue'
</script>

<template>
    <div class="experience" id="Experience">
        <Headline headline="Experience" />

        <div class="experience-content">
            <div v-for="(experience, index) in experiences" :key="index" class="experience-card">
                <div class="experience-head" @click="experience.isOpen = !experience.isOpen">
                    <h3>
                        {{ experience.role }}
                        <br />
                        <span>{{ experience.company }}</span>
                    </h3>
                    <div class="duration-arrow">
                        <Pill :text="experience.duration" />
                        <span class="arrow" :class="{ 'open': experience.isOpen }">▼</span>
                    </div>
                </div>
                <transition name="slide-fade">
                    <p v-show="experience.isOpen">
                    <ul>
                        <li v-for="(responsibility, i) in experience.responsibilities" :key="i">
                            {{ responsibility }}
                        </li>
                    </ul>
                    </p>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Headline,
    },
    data() {
        return {
            experiences: [
                {
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
};
</script>

<style scoped>
.arrow {
    transition: transform 0.3s ease;
}

.arrow.open {
    transform: rotate(180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
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

.experience {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
    padding: 72px 0;
    text-align: left;
}

.experience-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.experience-card {
    padding: 20px;
    border-bottom-width: 1px;
    border-color: #2b2d2d;
    border-left-width: 0px;
    border-right-width: 0px;
    border-style: solid;
    border-top-width: 0px;
    transition: all 0.3s ease;

    border-radius: 12px;
}

.experience-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.experience-head h3 {
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: -.03em;
    line-height: 1.3em;
    color: #fff;
    margin: 0;
}

.experience-head span {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
}

.duration-arrow {
    display: flex;
    align-items: center;
    gap: 10px;
}

.experience-card p {
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -.01em;
    line-height: 1.6em;
    color: #fff;
}

.experience-card ul {
    padding-left: 20px;
}

.experience-card ul li {
    list-style-type: disc;
    margin-bottom: 8px;
}
</style>
