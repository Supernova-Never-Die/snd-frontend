// NavBar.vue
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/main">WEMIX</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/main">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/interest">Interest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
                <div>
                    <button v-if="!account" class="btn btn-outline-success" type="button" @click="connectWallet">
                        {{ buttonText }}
                    </button>
                    <div v-else class="wallet-info">
                        <span>{{ abbrebiatedAddress }}</span>
                        <button class="btn btn-outline-danger" type="button" @click="disconnectWallet">
                            <i class="bi bi-x-circle-fill"></i>
                            <!-- This can be a font awesome icon or any other library icon you're using -->
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
import Web3 from 'web3';

export default {
    name: 'NavBar',
    data() {
        return {
            buttonText: 'Connect Wallet',
            web3: null,
            account: null,
        };
    },

    mounted() {
        // When the component is mounted, check if we have an account in local storage
        const storedAccount = localStorage.getItem('account');
        console.log('Stored Account:', storedAccount); // This should log the account if it exists in localStorage

        if (storedAccount) {
            this.account = storedAccount;
            this.buttonText = this.abbrebiatedAddress;
        }
    },

    computed: {
        abbrebiatedAddress() {
            if (this.account) {
                return `${this.account.substring(0, 6)}...${this.account.substring(this.account.length - 4)}`;
            }
            return '';
        },
    },

    methods: {
        async connectWallet() {
            if (window.ethereum) {
                try {
                    this.web3 = new Web3(window.ethereum);
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const accounts = await this.web3.eth.getAccounts();
                    this.account = accounts[0];
                    this.buttonText = this.abbrebiatedAddress;
                    console.log('Account Connected:', this.account); // This should log the connected account

                    localStorage.setItem('account', this.account); // Store the account in local storage

                } catch (error) {
                    console.error(error);
                }
            } else if (window.web3) {
                this.web3 = new Web3(Web3.currentProvider);
                const accounts = await this.web3.eth.getAccounts();
                this.account = accounts[0];
                this.buttonText = this.abbrebiatedAddress;
            } else {
                alert('Please install MetaMask!');
            }
        },

        disconnectWallet() {
            // Disconnect the wallet
            this.account = null;
            console.log('Disconnecting Wallet'); // This should log when the disconnect button is pressed

            localStorage.removeItem('account'); // Remove the account from local storage
            this.buttonText = 'Connect Wallet';
        }
    }
};

</script>

<style>
/* Add styles for your wallet info and disconnect button here */
.wallet-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>