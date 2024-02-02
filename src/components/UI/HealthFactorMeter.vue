// HealthFactorMeter component
<template>
    <div class="healthFactorMeter">
        <div class="meter">
            <div class="bar" :style="{ width: healthFactor + '%' }"></div>
        </div>
        <p>{{ healthFactor }}%</p>
    </div>
</template>

<script>
export default {
    props: ['healthFactor'],
    // healthFactor prop should be a number
};
</script>

<style>
/* Style your asset cards to be as cool as ice */
</style>
