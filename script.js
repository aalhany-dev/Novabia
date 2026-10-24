const NOVABIA = {
  instagramUrl: "https://www.instagram.com/playnovabia",
  facebookUrl: "https://www.facebook.com/PlayNovabia",
  contactEmail: "support@novabia.dev",
  feedbackFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfmMCT3sIPX58XtDPNlVVBDko5IoXiEAiZLQg-_gIgYaRyeRQ/viewform"
};

// All player-facing survey buttons link to the public Google Form.
if (NOVABIA.feedbackFormUrl) {
  document.querySelectorAll('#hosted-feedback-cta, [data-feedback-form]').forEach(link => {
    link.href = NOVABIA.feedbackFormUrl;
  });
}

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const socialMap = {
  instagram: NOVABIA.instagramUrl,
  facebook: NOVABIA.facebookUrl,
  email: NOVABIA.contactEmail ? `mailto:${NOVABIA.contactEmail}` : ''
};

let visibleSocials = 0;
document.querySelectorAll('.social-link').forEach(link => {
  const value = socialMap[link.dataset.network];
  if (!value) {
    link.style.display = 'none';
    return;
  }
  link.href = value;
  visibleSocials += 1;
});

const contactNote = document.getElementById('contactNote');

if (visibleSocials > 0 && contactNote) {
  contactNote.style.display = 'none';
}

const revealTargets = document.querySelectorAll('.reveal');
const onLoadTargets = document.querySelectorAll('.reveal-on-load');
onLoadTargets.forEach((el, i) => {
  requestAnimationFrame(() => setTimeout(() => el.classList.add('visible'), i * 80));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));


// Screenshot lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.setAttribute('aria-label', 'Gameplay screenshot viewer');
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Close screenshot">×</button>
  <img alt="Expanded Novabia screenshot" />
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-image-button').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.dataset.full || button.querySelector('img')?.src;
    if (!source) return;
    lightboxImage.src = source;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});


// Single-page tabs: direct URLs, refresh and browser Back/Forward all work.
const sitePages = [...document.querySelectorAll('main > .site-page')];
const sitePageIds = new Set(sitePages.map(page => page.id));
const siteTabLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

function activePageFromHash() {
  const requested = window.location.hash.slice(1).toLowerCase();
  return sitePageIds.has(requested) ? requested : 'home';
}

function displaySitePage() {
  const selected = activePageFromHash();
  for (const page of sitePages) {
    const active = page.id === selected;
    page.classList.toggle('is-active', active);
    page.hidden = !active;
  }

  for (const link of siteTabLinks) {
    if (link.getAttribute('href') === `#${selected}`) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  }

  // Old or mistyped anchors return to Home instead of showing a missing panel.
  if (window.location.hash && !sitePageIds.has(window.location.hash.slice(1).toLowerCase())) {
    history.replaceState(null, '', `${location.pathname}${location.search}#home`);
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', displaySitePage);
displaySitePage();
