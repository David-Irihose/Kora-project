var allJobs = [];

// ================= NAVIGATION =================
function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active-page');
  }

  var navLinks = document.querySelectorAll('.nav-item');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('active');
  }

  document.getElementById('page-' + pageId).classList.add('active-page');

  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].dataset.page === pageId) {
      navLinks[i].classList.add('active');
    }
  }

  window.scrollTo(0, 0);
}

var navItems = document.querySelectorAll('.nav-item');
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function (e) {
    e.preventDefault();
    showPage(this.dataset.page);
  });
}
// ================= HERO SEARCH =================
function goToJobsFromHero() {
  var query = document.getElementById('heroSearch').value;
  if (query !== '') {
    document.getElementById('searchInput').value = query;
  }
  showPage('jobs');
  if (query !== '') {
    searchJobs();
  }
}
// ================= FETCH JOBS =================
async function searchJobs() {
  var query = document.getElementById('searchInput').value;
  var resultsDiv = document.getElementById('results');

  if (query === '') {
    resultsDiv.innerHTML =
      '<p style="text-align:center;color:#f59e0b;">Please enter a job title.</p>';
    return;
  }

  resultsDiv.innerHTML =
    '<p style="text-align:center;color:#6b7280;">Searching jobs...</p>';

  try {
    var url =
      'https://remotive.com/api/remote-jobs?search=' +
      encodeURIComponent(query);

    var response = await fetch(url);

    if (!response.ok) {
      throw new Error('API Error: ' + response.status);
    }

    var data = await response.json();

    // Remotive structure
    allJobs = data.jobs || [];

    fillCompanyDropdown(allJobs);
    showJobs();

  }
  catch (error) {
    let message = '';

    if (error.message.includes('Failed to fetch')) {
      message = 'No internet connection. Please check your network and try again.';
    } else {
      message = 'Something went wrong. Please try again later.';
    }

    resultsDiv.innerHTML =
      '<p style="text-align:center;color:red;">' + message + '</p>';
  }
}
// ================= COMPANY FILTER =================
function fillCompanyDropdown(jobs) {
  var companySelect = document.getElementById('companyFilter');
  var companies = [];

  for (var i = 0; i < jobs.length; i++) {
    var name = jobs[i].company_name || '';

    if (name && companies.indexOf(name) === -1) {
      companies.push(name);
    }
  }

  companies.sort();

  companySelect.innerHTML = '<option value="">All Companies</option>';

  for (var i = 0; i < companies.length; i++) {
    var option = document.createElement('option');
    option.value = companies[i];
    option.textContent = companies[i];
    companySelect.appendChild(option);
  }
}
