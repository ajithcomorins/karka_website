
<?php $activePage = basename($_SERVER['PHP_SELF'], ".php"); ?>

<!-- navbar section start -->
<nav class="navbar navbar-expand-lg z-index-3 w-100 shadow-none navbar-transparent p-0">
    <div class="container container-95 p-0">
      <a class="navbar-brand text-dark" href="index.php" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        <img src='assets/img/karka-logos.png' alt='' class='black-logo'>
        <img src='assets/img/karka-white.png' class='white-logo'/>
      </a>
      <a href="https://karka.academy/apply/" class="btn btn-sm apply-now mb-0 ms-auto d-lg-none d-block">Apply Now</a>
      <button class="navbar-toggler shadow-none ms-2 collapsed btn-bg" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1 text-dark"></span>
          <span class="navbar-toggler-bar bar2 text-dark"></span>
          <span class="navbar-toggler-bar bar3 text-dark"></span>
        </span>
      </button>
      <div class="navbar-collapse w-100 pt-3 pb-2 py-lg-0 collapse" id="navigation" style="">
        <ul class="navbar-nav navbar-nav-hover ms-auto nav-page" id='nav-ative-link'>
          <li class='nav-item dropdown list-mar'>
            <a href="index.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'index') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                Home
            </a>
          </li>

          <li class='nav-item dropdown list-mar'>
            <a href="courses.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'courses') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                Courses
            </a>
          </li>
          <li class='nav-item dropdown list-mar'>
            <a href="fees_pap.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'fees_pap') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                Fees & PAPP
            </a>
          </li>
          <li class='nav-item dropdown list-mar'>
            <a href="fullstack.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'fullstack') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                Fullstack
            </a>
          </li>
          <li class='nav-item dropdown list-mar'>
            <a href="placement.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'placement') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                Placement
            </a>
          </li>
          <li class='nav-item dropdown list-mar'>
            <a href="about.php" class="nav-link nav-title ps-2 d-flex cursor-pointer align-items-center <?= ($activePage == 'about') ? 'active':''; ?>">
              <i class="material-icons opacity-6 me-2">dashboard</i>
                About Us
            </a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a href="https://karka.academy/apply/" class="btn btn-sm  apply-now mb-0 me-1" target='_blank'>Apply Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!-- navbar section end  -->