const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

const translations = {

  de: {
    nav_about: "Über mich",
    nav_skills: "Skills",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",

    section_about: "Über mich",
    section_skills: "Skills",
    section_projects: "Projekte",
    section_contact: "Kontakt",

    hero_title:
      "Senior IT Specialist & Cloud Infrastructure Professional",

    hero_description:
      "Senior IT Specialist mit über 5 Jahren Erfahrung in IT-Infrastruktur, Systemadministration und Support komplexer IT-Umgebungen. Spezialisierung auf Microsoft Azure, Microsoft Intune, Client Management, IT-Security und moderne Cloud-Technologien."
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    section_about: "About",
    section_skills: "Skills",
    section_projects: "Projects",
    section_contact: "Contact",

    hero_title:
      "Senior IT Specialist & Cloud Infrastructure Professional",

    hero_description:
      "Senior IT Specialist with over 5 years of experience in IT infrastructure, system administration and support of complex IT environments. Specialized in Microsoft Azure, Microsoft Intune, client management, IT security and modern cloud technologies."
  },

  ar: {
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "التواصل",

    section_about: "نبذة عني",
    section_skills: "المهارات",
    section_projects: "المشاريع",
    section_contact: "التواصل",

    hero_title:
      "أخصائي تقنية معلومات أول ومحترف بنية تحتية سحابية",

    hero_description:
      "أخصائي تقنية معلومات أول مع أكثر من 5 سنوات من الخبرة في البنية التحتية لتقنية المعلومات وإدارة الأنظمة ودعم البيئات التقنية المعقدة، مع تخصص في Microsoft Azure وMicrosoft Intune وإدارة الأجهزة وأمن المعلومات وتقنيات السحابة الحديثة."
  }

};

function setLanguage(lang) {

  document.documentElement.lang = lang;

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {

    const key = element.getAttribute("data-i18n");

    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }

  });

}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});
function openModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("active");
  } else {
    console.error("Modal not found:", id);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("active");
  }
}