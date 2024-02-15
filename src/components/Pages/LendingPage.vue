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
                        <h2 v-if="mode === 'supply'">Your Supplies</h2>
                        <h2 v-else>Your Borrowes</h2>
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
                                        <button class="btn btn-outline-secondary"
                                            @click="goToDetails(asset.id)">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <div class="col-4">
                    <section class="assets card p-4 mb-4 w-100">
                        <div class="row">
                            <transition name="fade">
                                <button :class="['col-6', mode === 'supply' ? 'btn-success' : 'btn-outline-success']"
                                    @click="changeMode('supply')">Supply</button>
                            </transition>
                            <transition name="fade">
                                <button :class="['col-6', mode === 'borrow' ? 'btn-info' : 'btn-outline-info']"
                                    @click="changeMode('borrow')">Borrow</button>
                            </transition>
                        </div>
                        <h2>Your Supplies</h2>
                        <p>supply balance of the token: </p>

                        <p>Your wallet balance is empty</p>
                        <p>list of the open positions --checkbox</p>
                        <p>new open or add liquidity to exisiting position</p>
                        <div class="row">
                        </div>
                        <p>Amount</p>
                        <div>
                            <input type="number" class="form-control" placeholder="0.00" v-model="amount" />
                        </div>
                        <button class="btn btn-success w-100" @click="callDepositFunction">Supply</button>

                    </section>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '../UI/NavBar.vue';
import { mapGetters, mapActions } from 'vuex';
import Web3 from 'web3';

export default {
    name: 'LendingComponent',
    components: {
        NavBar
    },
    computed: {
        ...mapGetters(['mode', 'assets']),
    },
    methods: {
        toggleToSupply() {
            this.mode = 'supply';
        },
        toggleToBorrow() {
            this.mode = 'borrow';
        },
        goToDetails(id) {
            this.$router.push({ name: 'AssetDetails', params: { id: id } });
        },
        ...mapActions(['updateMode']),
        changeMode(mode) {
            this.updateMode(mode);
        },
        async initiaizeWeb3() {
            if (window.ethereum) {
                this.web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' }); // Updated to use request method
                } catch (error) {
                    console.error("User denied account access");
                }
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
            this.contract = new this.web3.eth.Contract(this.contractABI, this.contractAddress);

        },
        async callDepositFunction() {
            const accounts = await this.web3.eth.getAccounts();
            const account = accounts[0];
            const amountToSend = this.web3.utils.toWei(this.amount.toString(), 'ether'); // Convert amount to wei, assuming the input is in Ether

            // Call the deposit function
            await this.contract.methods.deposit(amountToSend).send({ from: account })
                .then(function (receipt) {
                    // Handle receipt after transaction confirmation
                    console.log(receipt);
                }).catch(function (error) {
                    // Handle error
                    console.error(error);
                });
        },
    },
    data() {
        return {
            web3: null,
            contract: null,
            contractAddress: '0x1234567890123456789012345678901234567890', //this is a placeholder
            contractABI: [], //this is a placeholder
            amount: 0,
        };
    },
    mounted() {
        // Initialize web3
        this.initiaizeWeb3();
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}


.dashboard-section {
    padding: 1.5rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .05);
}

/* Add other custom styles if necessary */
</style>
