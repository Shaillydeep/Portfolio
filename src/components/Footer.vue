<template>
    <footer>
        <div class="container">
            <div class="contact-info">
                <a href="mailto:shaillydeep999@gmail.com" class="email">
                    shaillydeep999@gmail.com
                </a>
            </div>
            <div class="social-links">
                <a href="https://github.com/Shaillydeep" target="_blank" rel="noopener">GitHub</a>
                <a href="https://www.linkedin.com/in/shailly-deep-481aa42b2/" target="_blank"
                    rel="noopener">LinkedIn</a>
            </div>
            <p class="copyright">© {{ currentYear }} Vue App. <br> All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
footer {
    background-color: #0e1010;
    padding: 30px 0;
    width: 100%;
    text-align: center;
    border-top: 1px solid rgb(43, 45, 45);
    /* Use shorthand */
    opacity: 1;
    /* Usually not necessary unless you're animating */
}

.container {
    display: flex;
    flex-wrap: wrap;
    /* Allow wrapping on smaller screens */
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    /* Optional: Limit container width for large screens */
    margin: 0 auto;
    /* Center the container */
    padding: 0 20px;
    /* Add some horizontal padding */
}

.contact-info {
    order: 1;
    /* Control order on smaller screens */
    margin-bottom: 10px;
    /* Add spacing */
}

.social-links {
    display: flex;
    gap: 20px;
    /* Consistent spacing */
    order: 2;
    margin-bottom: 10px;
}

.social-links a {
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
    /* Add transition for smoothness */
}

.social-links a:hover {
    transform: translateY(-1.5px);
    /* Slight upward movement */
    color: #aeb2ba;
    /* Change color on hover */
}

.email {
    font-size: 40px;
}

.email:hover {
    text-decoration: underline;
    color: #aeb2ba;
    /* Simple underline effect */
}

.copyright {
    order: 3;
    font-size: 0.9rem;
    /* Smaller font size for copyright */
    color: #888;
    /* Lighter color for copyright */
}

a {
    color: white;
    text-decoration: none;
    /* Consider adding a hover effect */
}
</style>
