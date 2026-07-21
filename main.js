// ---------- Scroll progress bar ----------
const progressBar = document.getElementById("scrollProgress");
function updateProgress() {
  const h = document.documentElement;
  const scrollable = h.scrollHeight - h.clientHeight;
  const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
  progressBar.style.width = pct + "%";
}
document.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ---------- Theme toggle (persisted) ----------
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("theme", theme);
}
applyTheme(localStorage.getItem("theme") || "dark");
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ---------- Language toggle (persisted) ----------
const langToggle = document.getElementById("langToggle");
applyLang(localStorage.getItem("lang") || "en");
langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang || "en";
  applyLang(current === "en" ? "fa" : "en");
});

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ---------- Contact form (placeholder — wire to a real endpoint) ----------
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: replace with a real submit — e.g. fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })
  alert("Form submitted — wire this to a real backend or a service like Formspree.");
});

// ---------- Back to top ----------
document.getElementById("backToTop")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
