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

  <div class="container mt-4">
    <!-- TVL Card -->
    <div class="row mb-3">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Value Locked (TVL)</h5>
            <p class="card-text">TVL: $0.00 (API not integrated yet)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Row for WEMIX Price and History Cards -->
    <div class="row">
      <!-- First WEMIX Price Card -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">WEMIX Price</h5>
            <p class="card-text">Price: $0.00 (API not integrated yet)</p>
            <button class="btn btn-primary">Deposit</button>
            <button class="btn btn-secondary">Withdraw</button>
          </div>
        </div>
      </div>

      <!-- Second WEMIX Price Card -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">WEMIX Price</h5>
            <p class="card-text">Price: $0.00 (API not integrated yet)</p>
            <button class="btn btn-primary">Deposit</button>
            <button class="btn btn-secondary">Withdraw</button>
          </div>
        </div>
      </div>

      <!-- WEMIX Price History Card -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">WEMIX Price History</h5>
            <p class="card-text">Graph (API not integrated yet)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add your methods and data here if needed
};
</script>

<style>
/* Custom styles can be added here */
</style>
