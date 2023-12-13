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
            <h5 class="card-title center-text">Total Value Locked (TVL)</h5>
            <p class="card-text center-text">TVL: $0.00 (API not integrated yet)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Row for WEMIX Price and History Cards -->
    <div class="row">
      <!-- First WEMIX Price Card -->
      <div class="col-md-6 mb-3">        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Wemix</h5>
            <p class="card-text">staked Wemix: 123,123 (API not integrated yet)</p>
            <p class="card-text">Price: $0.00 (API not integrated yet)</p>
            <div class="right-align-buttons">
              <button class="btn btn-primary">Stake</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Second WEMIX Price Card -->
      <div class="col-md-6 mb-3">        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total SND</h5>
            <p class="card-text">Price: $0.00 (API not integrated yet)</p>
            <div class="right-align-buttons">
              <button class="btn btn-primary">Mint</button>
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
            <h5 class="card-title">WEMIX Price History</h5>
            <p class="card-text">Graph (API not integrated yet)</p>
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder Image">
          </div>
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
.center-text {
  text-align: center;
}

.right-align-buttons {
  display: flex;
  justify-content: flex-end; /* This will align the child elements (your buttons) to the right */
}
</style>
