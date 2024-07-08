<script setup>

import Headline from './Headline.vue';

</script>


<template>
    <div class="projects" id="Projects">
        <Headline headline = "Projects" />

        <div class="project-list">
            <div class="project-item">

                <div class="project-desc">
                    <div class="project-year">
                        <p>2024</p>
                    </div>
                    <h3 class="project-name">Hospital Patient Disease Data Analysis & Predictive Modelling</h3>
                    <p class="desc">
                        Unleashing the power of medical data! I harnessed machine learning to predict 49 diseases based
                        on a patient's symptoms,
                        age, and sex.
                        <br><br>
                        This project involved wrangling messy medical records, transforming data into a format the model
                        could understand, and
                        visualizing results to uncover patterns for more informed diagnoses.
                    </p>

                    <div class="project-info">
                        <div class="info-item">
                            <p class="item">Tools</p>
                            <p class="item-desc">Python, Pandas, Scikit-learn, Matplotlib, Seaborn</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Role</p>
                            <p class="item-desc">Data Analyst, Machine Learning Engineer</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Outcome</p>
                            <p class="item-desc">Model achieved 98% accuracy in predicting diseases</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Deliverables</p>
                            <p class="item-desc">Data Wrangling, Data Analysis & Visualization, Predictive Modelling, Evaluation and Analysis</p>
                        </div>

                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/hospital-data-analysis.png"
                        alt="Hospital Patient Disease Data Analysis & Predictive Modelling">
                </div>
            </div>

            <div class="project-item">

                <div class="project-desc">
                    <div class="project-year">
                        <p>2023</p>
                    </div>
                    <h3 class="project-name">Eateries Customer Segmentation</h3>
                    <p class="desc">
                        This project highlights my ability to transform raw data into customer insights that can inform
                        targeted marketing strategies.
                        <br><br>
                        I used k-means clustering to segment student customers at on-campus eateries based on their
                        spending
                        habits and preferences.
                        By wrangling data on purchases, I revealed four distinct student groups: budget-minded Chinese
                        food
                        lovers, students with a
                        sweet tooth for snacks, those who splurge on fast food, and occasional diners.
                    </p>

                    <div class="project-info">
                        <div class="info-item">
                            <p class="item">Tools</p>
                            <p class="item-desc">Python, Pandas, Scikit-learn, Matplotlib, Seaborn</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Role</p>
                            <p class="item-desc">Data Analyst, Business Intelligence Analyst</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Outcome</p>
                            <p class="item-desc">Identified four distinct student customer segments</p>
                        </div>

                        <div class="info-item">
                            <p class="item">Deliverables</p>
                            <p class="item-desc">Data Acquisition and Cleaning, Feature Engineering, Segment Analysis, Insights & Recommendations</p>
                        </div>

                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/hospital-data-analysis.png"
                        alt="Hospital Patient Disease Data Analysis & Predictive Modelling">
                </div>
            </div>


            <!-- Add more project items as needed -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    // Add your data, methods, etc. here
}
</script>

<style scoped src="./Projects.css"></style>
