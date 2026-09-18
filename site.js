// Project Fermat — stamps the year in the footer. That is all.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
