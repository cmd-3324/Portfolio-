const I18N = {
  en: {
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_experience: "Experience", nav_contact: "Contact",
    hero_badge: "Available for work", hero_name: "Max Miller",
    hero_role: "Backend Developer — Django & Laravel. Building web apps since 2025.",
    hero_cta_projects: "View Projects ↓", hero_cta_hello: "Say Hello ↗",
    stat_years: "Years coding", stat_projects: "Shipped projects", stat_stacks: "Core stacks",
    about_title1: "About", about_title2: "Me.",
    about_p1: "I'm a backend developer focused on Django and Laravel. I started coding in 2025 and have been building production-style projects since — from e-commerce platforms to real-time WebSocket apps.",
    about_p2: "My approach: clean, targeted code over clever code. I believe in understanding a system before extending it, and I don't ship what I can't explain.",
    feature1_title: "Development", feature1_desc: "Django, Laravel, REST APIs, WebSockets, and the infra to run them (Docker, CI/CD).",
    feature2_title: "Data & ML basics", feature2_desc: "NumPy, pandas, scikit-learn — applying ML fundamentals to real backend problems.",
    skills_title: "Skills & Tools.", skills_backend: "BACKEND", skills_db: "DATABASE", skills_other: "OTHER",
    projects_title: "Selected Projects.",
    proj1_tag1: "DJANGO", proj1_tag2: "E-COMMERCE",
    proj1_desc: "Django e-commerce platform with dark/light theming, EN/FR/RU i18n, AJAX dashboard search, and a custom global rate-limiting middleware.",
    proj2_tag1: "PROJECT", proj2_title: "Live-Talk", proj2_desc: "Django Live Speech To text & text to Speech Web-base platform.",
    proj_view: "View Project",
    exp_title: "Experience.", exp_present: "Present", exp_current: "CURRENT",
    exp1_title: "Freelance Backend Developer", exp1_sub: "Self-employed",
    exp1_desc: "Building Django and Laravel applications for clients — from data models to deployment.",
    contact_title1: "Let's Build", contact_title2: "Together.",
    contact_resume: "↓ Download Resume", contact_github: "GitHub Profile",
    form_name: "NAME *", form_email: "EMAIL *", form_type: "PROJECT TYPE",
    form_type_web: "Web Application", form_type_api: "API / Backend", form_type_other: "Other",
    form_message: "MESSAGE *", form_message_ph: "Tell me about your project...", form_send: "Send Message ➤",
    back_to_top: "↑ Back to top"
  },
  fa: {
    nav_about: "درباره من", nav_skills: "مهارت‌ها", nav_projects: "پروژه‌ها", nav_experience: "سوابق", nav_contact: "تماس",
    hero_badge: "آماده همکاری", hero_name: "نام شما",
    hero_role: "توسعه‌دهنده بک‌اند — جنگو و لاراول. از ۲۰۲۵ در حال ساخت وب‌اپلیکیشن.",
    hero_cta_projects: "مشاهده پروژه‌ها ↓", hero_cta_hello: "سلام بگو ↗",
    stat_years: "سال کدنویسی", stat_projects: "پروژه تحویل‌شده", stat_stacks: "استک اصلی",
    about_title1: "درباره", about_title2: "من.",
    about_p1: "توسعه‌دهنده بک‌اند با تمرکز بر جنگو و لاراول هستم. از سال ۲۰۲۵ برنامه‌نویسی را شروع کردم و از آن زمان پروژه‌های واقعی ساخته‌ام — از پلتفرم‌های فروشگاهی تا اپلیکیشن‌های بلادرنگ با وب‌سوکت.",
    about_p2: "رویکرد من: کد هدفمند و تمیز، نه کد پیچیده. معتقدم باید سیستم را قبل از توسعه فهمید و چیزی را که نمی‌توانم توضیح دهم، تحویل نمی‌دهم.",
    feature1_title: "توسعه", feature1_desc: "جنگو، لاراول، REST API، وب‌سوکت و زیرساخت اجرای آن‌ها (داکر، CI/CD).",
    feature2_title: "داده و مبانی ML", feature2_desc: "NumPy، pandas، scikit-learn — استفاده از مبانی ML در مسائل واقعی بک‌اند.",
    skills_title: "مهارت‌ها و ابزارها.", skills_backend: "بک‌اند", skills_db: "پایگاه داده", skills_other: "سایر",
    projects_title: "پروژه‌های منتخب.",
    proj1_tag1: "جنگو", proj1_tag2: "فروشگاهی",
    proj1_desc: "پلتفرم فروشگاهی جنگو با تم روشن/تاریک، چندزبانگی EN/FR/RU، جست‌وجوی داشبورد با AJAX و میان‌افزار محدودسازی نرخ درخواست.",
    proj2_tag1: "جنگو", proj2_title: "Live-Talk", proj2_desc: "پلتفرم وب تبدیل گفتار به متن و متن به گفتار زنده با جنگو.",
    proj_view: "مشاهده پروژه",
    exp_title: "سوابق.", exp_present: "اکنون", exp_current: "فعلی",
    exp1_title: "توسعه‌دهنده بک‌اند فریلنس", exp1_sub: "مستقل",
    exp1_desc: "ساخت اپلیکیشن‌های جنگو و لاراول برای کارفرمایان — از مدل داده تا دیپلوی.",
    contact_title1: "بیایید بسازیم", contact_title2: "با هم.",
    contact_resume: "↓ دانلود رزومه", contact_github: "پروفایل گیت‌هاب",
    form_name: "نام *", form_email: "ایمیل *", form_type: "نوع پروژه",
    form_type_web: "وب‌اپلیکیشن", form_type_api: "API / بک‌اند", form_type_other: "سایر",
    form_message: "پیام *", form_message_ph: "درباره پروژه‌تان بنویسید...", form_send: "ارسال پیام ➤",
    back_to_top: "↑ بازگشت به بالا"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "fa" ? "EN" : "FA";
  localStorage.setItem("lang", lang);
}
