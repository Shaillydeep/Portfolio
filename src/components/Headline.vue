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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    align-content: center;
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    height: min-content;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
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
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    font-weight: 400;
    color: #fff;
    font-size: 44px;
    line-height: 1.2em;
    text-align: start;
}

</style>
