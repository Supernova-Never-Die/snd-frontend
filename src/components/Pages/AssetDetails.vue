<template>
    <div v-if="asset">
        <h2>{{ asset.name }} Details</h2>
        <p>Balance: {{ asset.balance }}</p>
        <p>APY: {{ asset.apy }}</p>
        <p>Total Value Locked: {{ asset.valueLocked }}</p>
    </div>
    <div v-else>
        <p>Asset not found.</p>
    </div>
</template>
<script>
export default {
    name: 'AssetDetails',
    // props: ['id'], // Receive the ID as a prop
    data() {
        return {
            asset: null,
        };
    },
    mounted() {
        this.fetchAssetData();
    },
    methods: {
        fetchAssetData() {
            // Simulate fetching data. In a real app, you'd fetch from an API or Vuex store.
            const assetId = parseInt(this.$route.params.id);
            this.asset = this.$store.getters.getAssetById(assetId);
        },
    },
};
</script>