const NOVABIA = {
  instagramUrl: "https://www.instagram.com/playnovabia",
  facebookUrl: "https://www.facebook.com/PlayNovabia",
  contactEmail: "hany-45@hotmail.com"
};

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
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
