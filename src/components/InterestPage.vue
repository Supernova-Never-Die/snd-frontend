<template>
    <!-- Navbar -->
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
            <a class="nav-link" href="#">Link 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
          </li>
        </ul>
        <button class="btn btn-outline-success" type="button">Connect Wallet</button>
      </div>
    </div>
  </nav>
  
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
  </template>
  
  <script>
  export default {
    // Component logic will go here
  };
  </script>
  
  <style>
  /* Custom styles can be added here */
  .right-align-buttons {
  display: flex;
  justify-content: flex-end; /* This will align the child elements (your buttons) to the right */
}
.card.h-200 {
  height: 200%; /* This will need to be adjusted based on your actual card heights */
}
  </style>
  