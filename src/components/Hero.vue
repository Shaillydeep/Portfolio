<template>
    <div class="hero">

        <div class="hero-content">
            <img src="../assets/hero.png" alt="Shailly Deep">
            <div class="text-content">
                <h1>Shailly Deep</h1>
                <div class="dot"></div>
                <p>Currently looking for opportunities</p>
            </div>
        </div>

            <p class="hero-desc">I'm an analyst based in New Delhi, India. <br>Proficient in tools like Python, SQL and advanced Excel.</p>

            <p id="a">My other skills also include basic Front-end Web Development using React, Vue. <br>Fun Fact: This website is also built using Vue.</p>


    </div>
</template>


<style scoped>
.hero {
    padding: 20px;
    text-align: left;
    padding-top: 11%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    gap:36px;
}

.hero-content {
    display: flex;
    align-items: center;
    /* Vertically align items */
    justify-content: flex-start;
    /* Horizontally center content */
    max-height: 100px;
}

.hero-content img {
    border-radius: 50%;
    height: 81px;
    width: 81px;
    margin-right: 20px;

    /* Space between image and text */
}

.text-content {
    text-align: left;
    /* Align text content to the left */
}

.text-content h1 {
    font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
    font-size: 43px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 120%;
    margin-bottom: 0px;
    /* Reduced margin */
}

.text-content p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 90%;
    color: #aeb2ba;
    margin-top: 0;
    /* Adjusted margin */
    position: relative;
    top: -13.5px;
    /* Adjusted vertical alignment */
    left: 18px;
}

.text-content .dot {
    font-size: 12px;
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
    aspect-ratio: 1 / 1;
    background-color: #2cffbf;
    border-radius: 100%;
    flex: none;
    height: 6px;
    position: relative;
    width: 6px;
    display: inline-block;
    /* Allow it to be inline with text */
    margin-bottom: -3px;
    /* Adjust vertical alignment as needed */
}


.hero .hero-desc {
    font-size: 44px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 150%;
    color: #fff;
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
    margin: 0px;
    padding: 0px;
    font-family: 'Inter', 'Inter Placeholder', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2em;
    text-align: start;
    
}

#a {
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Inter', 'Inter Placeholder', sans-serif;
    font-style: normal;
    font-weight: 400;
    color:  #aeb2ba;
    font-size: 20px;
    line-height: 1.5em;
    text-align: start;
}
</style>
