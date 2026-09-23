/* Project Fermat — floating pill header with a hover-to-open mega-menu.
   Progressive enhancement: the nav links are real anchors and work without
   this script. On pointer devices, hovering (or focusing) a nav item opens a
   panel with a preview and a "Read more" link. */
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;
  var nav = header.querySelector('.hb-nav');
  var drawer = document.getElementById('hbDrawer');
  if (!nav || !drawer) return;

  var inner = document.createElement('div');
  inner.className = 'hb-drawer-inner';
  drawer.appendChild(inner);

  var PANELS = {
    'what-we-do': {
      h: 'A real mathematical education',
      p: 'Foundations, problem-solving over procedures, and open resources — taught the way we wish we’d been taught in sixth grade.',
      href: '/#what-we-do',
      art: '<div class="hb-art gold">xⁿ + yⁿ = zⁿ</div>'
    },
    'pathway': {
      h: 'From the basics to the national olympiads',
      p: 'We follow the real competition ladder, and we start it years before most students hear it exists.',
      href: '/#pathway',
      art: '<div class="hb-steps"><b>Foundations</b><i>→</i><b>NMTC</b><i>→</i><b>IOQM</b><i>→</i><b>RMO</b></div>'
    },
    'scholars': {
      h: 'Taught by people who’ve done it',
      p: 'Undergraduates and competitors who are genuinely good at mathematics — and care about explaining it well.',
      href: '/#scholars',
      art: '<div class="hb-chips">' +
        '<span class="hb-chip">NTU</span>' +
        '<span class="hb-chip">BITS Pilani</span>' +
        '<span class="hb-chip">Ashoka</span>' +
        '<span class="hb-chip">Vasant Valley</span>' +
        '<span class="hb-chip">ITYM</span>' +
        '<span class="hb-chip">INMO</span>' +
        '<span class="hb-chip">AMC</span>' +
        '</div>'
    },
    'founders': {
      h: 'Meet the founders',
      p: 'Project Fermat is run by Ishaan Harish and Akshat Bhaskar, alongside the volunteer scholars who teach with us.',
      href: '/founders',
      art: '<div class="hb-art portraits">' +
        '<img src="/photos/ishaan.png" alt="Ishaan Harish" />' +
        '<img src="/photos/akshat.png" alt="Akshat Bhaskar" />' +
        '</div>'
    },
    'mission': {
      h: 'The ability is spread evenly',
      p: 'The teaching isn’t. We exist to close that gap for students in underserved schools across Delhi NCR.',
      href: '/mission',
      art: '<div class="hb-art gold">the teaching isn’t</div>'
    }
  };

  var links = nav.querySelectorAll('a[data-panel]');

  function render(id) {
    var d = PANELS[id];
    if (!d) return;
    inner.innerHTML =
      '<div class="hb-panel">' +
        '<div class="hb-copy">' +
          '<h3>' + d.h + '</h3>' +
          '<p class="p">' + d.p + '</p>' +
          '<a class="read" href="' + d.href + '">Read more <span>→</span></a>' +
        '</div>' +
        '<div class="hb-side">' + d.art + '</div>' +
      '</div>';
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('is-active', links[i].getAttribute('data-panel') === id);
    }
    header.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function close() {
    header.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < links.length; i++) links[i].classList.remove('is-active');
  }

  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return; // on touch, the links just navigate

  for (var i = 0; i < links.length; i++) {
    (function (a) {
      a.addEventListener('mouseenter', function () { render(a.getAttribute('data-panel')); });
      a.addEventListener('focus', function () { render(a.getAttribute('data-panel')); });
    })(links[i]);
  }

  var pill = header.querySelector('.hb');
  pill.addEventListener('mouseleave', close);
  header.addEventListener('focusout', function (e) {
    if (!header.contains(e.relatedTarget)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
