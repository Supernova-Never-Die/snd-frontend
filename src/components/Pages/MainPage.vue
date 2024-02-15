<template>
  <div class="body">
    <nav-bar></nav-bar>

    <div class="container mt-4">
      <!-- TVL Card -->
      <div class="row mb-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center-text">Total Value Locked (TVL)</h5>
              <p class="card-text center-text">TVL: $0.00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Row for WEMIX Price and History Cards -->
      <div class="row">
        <!-- First WEMIX Price Card -->
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Collateral</h5>
              <p class="card-text">staked Wemix: 123,123 (API not integrated yet)</p>
              <p class="card-text">Price: $0.00 (API not integrated yet)</p>
              <div class="right-align-buttons">
                <button class="btn btn-primary">Deposit</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Second WEMIX Price Card -->
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Borrow</h5>
              <p class="card-text">staked Wemix: 123,123 (API not integrated yet)</p>

              <p class="card-text">Price: $0.00 (API not integrated yet)</p>
              <div class="right-align-buttons">
                <button class="btn btn-primary">Borrow</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Row for WEMIX Price History -->
        <div class="row">
          <!-- WEMIX Price History Card -->
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Supernova TVL History</h5>
                <p class="card-text">Graph (API not integrated yet)</p>
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
              </div>
            </div>
          </div>
        </div>

        <!-- TX History Card -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Transaction History</h5>
                <!-- Placeholder for TX History -->
                <p>Transaction History (API not integrated yet)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../UI/NavBar.vue';


export default {
  // Add your methods and data here if needed
  components: {
    NavBar// Add your components here
  }
};
</script>

<style>
/* Custom styles can be added here */
.center-text {
  text-align: center;
}

.right-align-buttons {
  display: flex;
  justify-content: flex-end;
  /* This will align the child elements (your buttons) to the right */
}
</style>
