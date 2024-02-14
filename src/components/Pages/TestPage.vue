<template>
    <div class="body">
        <nav-bar></nav-bar>

        <div class="container py-4">
            <header class="d-flex justify-content-between align-items-center mb-4">
                <h1>Supernova</h1>
                <div>
                    <div class="d-inline-flex flex-column align-items-end">
                        <span class="fw-bold">Net Worth $0</span>
                        <span class="text-muted">APY 0.00%</span>
                    </div>
                </div>
            </header>

            <section class="row gx-3 mb-4">
                <div class="col dashboard-section">
                    <h3>Your Supplies</h3>
                    <span class="apy">APY: --</span>
                    <!-- Placeholder for dynamic content -->
                </div>

                <div class="col dashboard-section">
                    <h3>Your Borrows</h3>
                    <span class="apy">APY: --</span>
                    <!-- Placeholder for dynamic content -->
                </div>

                <div class="col dashboard-section">
                    <h3>Health Factor</h3>
                    <!-- Placeholder for health factor -->
                </div>
            </section>
        </div>
        <div class="container py-4">
            <div class="row">
                <div class="col-8">
                    <section class="assets card p-4 mb-4 w-100">
                        <h2>Your Supplies</h2>
                        <p>Nothing supplied yet</p>
                        <button class="btn btn-success">Connect Wallet</button>
                    </section>

                    <section class="assets card p-4 mb-4">
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                    <th>Assets</th>
                                    <th>Wallet Balance</th>
                                    <th>APY %</th>
                                    <th>Total Value Locked</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asset in assets" :key="asset.id">
                                    <td>{{ asset.name }}</td>
                                    <td>{{ asset.balance }}</td>
                                    <td>{{ asset.apy }}</td>
                                    <td>{{ asset.valueLocked }}</td>
                                    <td>
                                        <button class="btn btn-primary">Supply</button>
                                        <button class="btn btn-outline-secondary">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <div class="col-4">
                    <section class="assets card p-4 mb-4 w-100">
                        <div class="row">
                                <button class="btn btn-primary col-6">Supply</button>
                                <button class="btn btn-outline-secondary col-6">Borrow</button>
                            </div>
                        <h2>Your Supplies</h2>
                        <p>Your wallet balance is empty</p>
                        <button class="btn btn-success w-100">Get Tokens</button>
                    </section>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '../UI/NavBar.vue';

export default {
    name: 'TestComponent',
    components: {
        NavBar
    },
    data() {
        return {
            assets: [
                { id: 1, name: 'USDT', balance: 0, apy: '3.95%', valueLocked: '$25,000,077.05' },
                { id: 2, name: 'ETH', balance: 0, apy: '4.00%', valueLocked: '$10,000,000.00' },
                { id: 3, name: 'USDC', balance: 0, apy: '4.00%', valueLocked: '$10,000,000.00' },

                // Add other assets accordingly
            ],
        };
    },
};
</script>

<style scoped>
/* No need for most custom styles as Bootstrap handles them. You may still need some for specific tweaks. */
.assets,
.dashboard-section {
    background-color: #fff;
    border-radius: .5rem;
}

.dashboard-section {
    padding: 1.5rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .05);
}

/* Add other custom styles if necessary */
</style>
