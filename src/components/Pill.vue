<template>
    <div class="pill">
        <span class="pill-text">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'Pill',
    props: {
        text: {
            required: true
        }
    }
}
</script>

<style scoped>
.pill {
    border-bottom-width: 1px;
    border-color: #2b2d2d;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-top-width: 1px;
    align-content: center;
    align-items: center;
    background-color: #1d1d1d;
    border-radius: 30px;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 4px;
    height: min-content;
    justify-content: center;
    overflow: visible;
    padding: 8px 14px;
    position: relative;
    width: max-content;
}

</style>
