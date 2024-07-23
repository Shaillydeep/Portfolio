<script setup>
import data from '../content/data';
</script>

<template>
    <footer id="Footer">
        <div class="container">
            <div class="footer-content">
                <div class="contact">
                    <a :href="links.mailLink" class="email">{{ links.mail }}</a>
                </div>
                <div class="links">
                    <p class="links-heading">Useful Links</p>
                    <a href="#Projects" @click.prevent="scrollToSection('Projects')">Work</a> 
                    <a href="#About" @click.prevent="scrollToSection('About')">About</a>
                    <a href="#Experience" @click.prevent="scrollToSection('Experience')">Experience</a>
                </div>
                <div class="social">
                    <p class="social-heading">Connect with me</p>
                    <a :href="links.github" target="_blank" rel="noopener">GitHub</a>
                    <a :href="links.linkedin" target="_blank"
                        rel="noopener">LinkedIn</a>
                </div>
            </div>
            <p class="copyright">© {{ currentYear }} Vue App. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            links: data.links,
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
};
</script>

<style scoped>
#Footer {
    padding-top: 6rem;
    padding-bottom: 0.2rem;
    text-align: center;
}

.container {
    margin: 0 auto;
    width: -webkit-fill-available;
}

.footer-content {
    display: flex;
    flex-wrap: nowrap;
    gap: 6rem;
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}

.contact,
.links,
.social {
    flex: 1 1 200px;
    /* Each section takes up equal space, min-width 200px */
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.email {
    color: #aeb2ba;
    font-size: 2.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 1rem;
}

.email:hover {
    color: #f0f0f0;
    text-decoration: underline;
}

.links a {
    display: block;
}

a {
    color: #aeb2ba;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #f0f0f0;
}

.copyright {
    font-size: 0.8em;
    color: #888;
}

/* Responsive Styles (Example) */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        /* Stack sections vertically */
        align-items: center;
        gap:2rem;
    }

    .email{
        font-size: 1.5rem;
    }

    .contact,
    .links,
    .social {
        text-align: center;
        flex:0%
    }
}
</style>
