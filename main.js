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

// ---------- Contact form (EmailJS) ----------
// ✅ REPLACE THESE THREE VALUES with your actual IDs
const EMAILJS_PUBLIC_KEY = 'feib1ZCaJ8EKJHYbd';      // Your Public Key (from Account → API Keys)
const EMAILJS_SERVICE_ID = 'service_cqol1nq';    // Your Service ID (from Email Services)
const EMAILJS_TEMPLATE_ID = 'template_9ju1caw';    // Your Template ID (from Email Templates)

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  const statusEl = document.getElementById("formStatus");
  
  const lang = document.documentElement.lang || 'en';
  const messages = {
    sending: lang === 'fa' ? 'در حال ارسال...' : 'Sending...',
    success: lang === 'fa' ? '✅ پیام با موفقیت ارسال شد!' : '✅ Message sent successfully!',
    error: lang === 'fa' ? '❌ خطا در ارسال. لطفاً مستقیماً ایمیل بزنید.' : '❌ Failed to send. Please email directly.'
  };
  
  submitBtn.disabled = true;
  submitBtn.textContent = messages.sending;
  statusEl.textContent = '';
  statusEl.className = 'form-status';
  
  try {
    const templateParams = {
      from_name: form.name.value.trim(),
      from_email: form.email.value.trim(),
      project_type: form.project_type.value,
      message: form.message.value.trim()
    };
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    if (response.status === 200) {
      statusEl.textContent = messages.success;
      statusEl.className = 'form-status success show';
      form.reset();
      setTimeout(() => { statusEl.className = 'form-status success'; }, 6000);
    } else {
      throw new Error('EmailJS returned non-200 status');
    }
  } catch (error) {
    statusEl.textContent = messages.error;
    statusEl.className = 'form-status error show';
    setTimeout(() => { statusEl.className = 'form-status error'; }, 6000);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}); 

// ---------- Back to top ----------
document.getElementById("backToTop")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
