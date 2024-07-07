<template>
    <header class="header">
        <nav class="nav">
            <div class="links">
                <a href="#" class="link">Work</a>
                <a href="#" class="link">About</a>
                <a href="#" class="link">Experience</a>
                <a href="#" class="link">Skills</a>
            </div>
            <button class="button">
                <p id="button-text">LET'S TALK </p><img id="arrow" src="../assets/arrow.svg" alt="arrow">
            </button>
        </nav>
    </header>
</template>

<style scoped>
#button-text {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 97.2%;
}

#arrow {
    width: 34px;
    height: 34px;
    margin-left: 10px;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #0E1010;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links {
    display: flex;
    /* Remove justify-content: center */
    align-items: center;
    margin: auto;
    gap: 35px;
    /* Add this to center horizontally */
}

.link {
    margin: 0 10px;
    text-decoration: none;
    color: #aeb2ba;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    
}

.button {
    padding: 8px 8px 8px 20px;
    width: fit-content;
    background-color: #1D1D1D;
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    right: 3%;

    display: flex;
    align-items: center;
}
</style>
