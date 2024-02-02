<template>
    <div class="dashboard">
        <!-- Navbar -->
        <nav-bar></nav-bar>

        <!-- Main container -->
        <div class="container mt-4">

            <!-- Assets List -->
            <assets-list :assets="assets"></assets-list>

            <!-- Health Factor Meter -->
            <health-factor-meter :factor="healthFactor"></health-factor-meter>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <button class="btn btn-primary">Supply</button>
                <button class="btn btn-secondary">Borrow</button>
            </div>

            <!-- Notifications -->
            <div class="notifications">
                <div class="alert alert-info" role="alert" v-for="notification in notifications"
                    :key="notification.message">
                    {{ notification.message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ToggleSwitch from '../UI/ToggleSwitch.vue';
import AssetsList from '../UI/AssetsList.vue';
import HealthFactorMeter from '../UI/HealthFactorMeter.vue';
// import ActionButtons from '../UI/ActionButtons.vue';
// import Notifications from '../UI/Notifications.vue';
import NavBar from '../UI/NavBar.vue';

export default {
    name: 'DashBoardComponent',
    components: {
        // ToggleSwitch,
        AssetsList,
        HealthFactorMeter,
        // ActionButtons,
        // Notifications,
        NavBar
    },
    data() {
        return {
            // Just some dummy data to populate our components
            assets: [
                { name: 'ETH', amount: 5, price: '$1500', change: '+1.5%' },
                { name: 'USDB', amount: 1000, price: '$1', change: '0%' },
                { name: 'BTC', amount: 2, price: '$20000', change: '-0.5%' }
            ],
            healthFactor: 1.8, // Example health factor data
            notifications: [
                { message: 'ETH price is up by 1.5%' },
                { message: 'BTC price dropped by 0.5%' }
            ]
        };
    }
};
</script>

<style>
.dashboard {
    background-color: #f8f9fa;
    color: #212529;
}

.container {
    padding: 2rem;
}

/* Reusing Bootstrap's card styling for consistency */
.card {
    background-color: white;
    border: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    margin-bottom: 1rem;
}

.card-body {
    padding: 1.25rem;
}

.card-title {
    margin-bottom: 0.75rem;
    color: #495057;
}

.action-buttons button {
    margin-right: 0.5rem;
}

/* Align the buttons to the right */
.action-buttons {
    text-align: right;
    margin-top: 1rem;
}

.notifications {
    margin-top: 1rem;
}

.alert {
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}
</style>
  