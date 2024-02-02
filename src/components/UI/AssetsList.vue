// AssetsList.vue
<template>
    <div class="assets-list">
        <div v-for="asset in assets" :key="asset.name" class="asset-card">
            <img :src="asset.icon" :alt="asset.name">
            <p>{{ asset.name }}</p>
            <p>{{ asset.amount }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['assets'],
    // assets prop should be an array of objects with { name, icon, amount }
};
</script>

<style>
/* Style your asset cards to be as cool as ice */
</style>
