<template>
  <div class="body">

    <!-- Navbar -->
    <nav-bar></nav-bar>

    <div class="container mt-3">
      <!-- Top Row for Total Deposits and Interest Rate -->
      <div class="row mb-4">
        <!-- Total Deposits Card -->
        <div class="col-md-8 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Total Deposits</h5>
              <p class="card-text">Total Deposited SND: XXXX (API not integrated yet)</p>
              <div class="right-align-buttons">
                <button class="btn btn-primary">Deposit</button>
                <button class="btn btn-danger">Withdraw</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Interest Rate Card -->
        <div class="col-md-4 mb-3">
          <div class="card h-200">
            <div class="card-body">
              <h5 class="card-title">Interest Rate</h5>
              <div class="mb-3">
                <!-- Placeholder for Interest Rate Graph -->
                <p>Interest Rate Graph (API not integrated yet)</p>
              </div>
            </div>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-outline-secondary">7 Days</button>
              <button type="button" class="btn btn-outline-secondary">1 Month</button>
              <button type="button" class="btn btn-outline-secondary">1 Year</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Row for Claimable Interest and Estimated Interest -->
      <div class="row">
        <!-- Claimable Interest Card -->
        <div class="col-md-8 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Claimable Interest</h5>
              <p class="card-text">Claimable SND: XXXX (API not integrated yet)</p>
              <div class="right-align-buttons">
                <button class="btn btn-success">Claim</button>
              </div>
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
</template>
  
<script>
import NavBar from '../UI/NavBar.vue';

export default {
  // Component logic will go here
  components: {
    NavBar
  }
};
</script>
  
<style>
/* Custom styles can be added here */
.right-align-buttons {
  display: flex;
  justify-content: flex-end;
  /* This will align the child elements (your buttons) to the right */
}

.card.h-200 {
  height: 200%;
  /* This will need to be adjusted based on your actual card heights */
}
</style>
  