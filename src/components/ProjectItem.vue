<script setup>
import Pill from './Pill.vue';
</script>

<template>
    <div class="project-item">
        <div class="project-content">
            <div class="project-text">
                <Pill :text="project.year" />
                <div class="project-header">
                    <h3 class="project-title">{{ project.title }}</h3>
                </div>
                <p v-if="project.description" class="project-description">{{ project.description }}</p>

                <div class="project-details">
                    <div v-if="project.role" class="detail-group">
                        <p class="detail-label">Role</p>
                        <p class="detail-value">{{ project.role.join(', ') }}</p>
                    </div>

                    <div v-if="project.deliverables" class="detail-group">
                        <p class="detail-label">Deliverables</p>
                        <p class="detail-value">{{ project.deliverables.join(', ') }}</p>
                    </div>

                    <div v-if="project.tools" class="detail-group">
                        <p class="detail-label">Tools</p>
                        <p class="detail-value">{{ project.tools.join(', ') }}</p>
                    </div>
                </div>
            </div>

            <div class="project-image">
                <img v-if="project.imagePath" :src="project.imagePath" alt="project image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.project-item {
    margin-bottom: 3em;
    /* Space between project items */
}

.project-content {
    display: flex;
    gap: 2em;
    /* Space between text and image */
    align-items: flex-start;
}

.project-text {
    flex: 1;
}

.project-header {
    display: flex;
    align-items: baseline;
    /* Align title and year to baseline */
    margin-bottom: 1em;
}

.project-title {
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 500;
    margin-right: 1em;
}

.project-year {
    font-size: 1em;
    color: #aeb2ba;
}

.project-description {
    font-size: 1rem;
    line-height: 1.6rem;
    color: #aeb2ba;
    margin-bottom: 1.5em;

}


.project-details {
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: white;
}

.project-details div {
    border-color: #2b2d2d;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    display: flex;
    justify-content: space-between;
}

.project-details div p {
    text-align: end;
    max-width: 60%;
}

.detail-group {
    margin-bottom: 0.8em;
}



.detail-label {
    color: #aeb2ba;
    margin-right: 0.5em;
}

.project-image {
    flex: 1;
    max-width: 500px;
    /* Adjust as needed */
}

.project-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .project-content {
        flex-direction: column;
    }

    .project-image {
        max-width: 100%;
        margin-top: 2em;
    }
}
</style>
