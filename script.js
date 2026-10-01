// ------------------------------------------------------------
// NOVABIA SITE CONFIG
// Put your real links here before publishing.
// Leave a value blank ("") to hide that button.
// ------------------------------------------------------------
const NOVABIA = {
  instagramUrl: "",
  facebookUrl: "",
  contactEmail: ""
};

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const socialMap = {
  instagram: NOVABIA.instagramUrl,
  facebook: NOVABIA.facebookUrl,
  email: NOVABIA.contactEmail ? `mailto:${NOVABIA.contactEmail}` : ""
};

const socialLinks = document.querySelectorAll(".social-link");
let visibleSocials = 0;

socialLinks.forEach((link) => {
  const network = link.dataset.network;
  const value = socialMap[network];

  if (!value) {
    link.style.display = "none";
    return;
  }

  link.href = value;
  visibleSocials += 1;
});

const contactNote = document.getElementById("contactNote");
if (visibleSocials > 0) {
  contactNote.style.display = "none";
}

const revealTargets = document.querySelectorAll(
  ".section-heading, .feature-card, .path-card, .catalyst-card, .gameplay-card, .clinic-callout, .status-panel"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
