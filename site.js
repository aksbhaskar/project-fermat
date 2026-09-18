// Project Fermat — progressive enhancement only.
// The pages are complete without this file; it adds the scroll reveal
// and stamps the current year.

(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (!document.documentElement.classList.contains('js')) return;

  var targets = document.querySelectorAll('.rise');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

  targets.forEach(function (el) { io.observe(el); });
})();
