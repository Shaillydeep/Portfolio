<template>
    <div class='headline'>
            <div id='dot'></div>
            <h2>{{ headline }}</h2>
        </div>

</template>

<script>
export default {
    props: {
        headline: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

.headline {
    margin-top: 6rem;
    margin-bottom: 3rem;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    height: min-content;
    justify-content: flex-start;
    height: 4rem;
}

#dot {
    box-sizing: border-box;
    aspect-ratio: 1 / 1;
    background-color: #2cffbf;
    border-radius: 100%;
    flex: none;
    height: 10px;
    position: relative;
    width: 10px;
}

.headline h2 {
    color: white;
    font-size: 2.75rem;
    line-height: 3.3rem;
    font-weight: 500;
}

</style>
