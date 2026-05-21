const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙";
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

    hero_title: "Senior IT Specialist & Cloud Infrastructure Professional",
    hero_description:
      "Senior IT Specialist mit über 5 Jahren Erfahrung in IT-Infrastruktur, Systemadministration und Support komplexer IT-Umgebungen. Spezialisierung auf Microsoft Azure, Microsoft Intune, Client Management, IT-Security und moderne Cloud-Technologien.",

    btn_profile: "Profil",
    btn_focus: "Fokusbereiche",
    btn_experience: "Erfahrung",
    btn_security: "Security",
    btn_cloud: "Cloud",
    btn_endpoint: "Endpoint Management",
    btn_network: "Networking",
    btn_automation: "Automation",
    btn_support: "Support",
    btn_systems: "Systems",
    btn_portfolio: "Portfolio Website",
    btn_cloud_lab: "Cloud & Infrastructure Lab",
    btn_contact_details: "Kontaktdaten",

    modal_profile_title: "Profil",
    modal_profile_text:
      "Ich bin Senior IT Specialist mit über 5 Jahren Erfahrung in IT-Infrastruktur, Systemadministration und Support komplexer IT-Umgebungen.",

    modal_focus_title: "Fokusbereiche",
    modal_focus_1: "Cloud Computing mit Microsoft Azure",
    modal_focus_2: "Endpoint Management mit Microsoft Intune",
    modal_focus_3: "IT-Security und Compliance",
    modal_focus_4: "Automatisierung mit PowerShell",
    modal_focus_5: "Hybride IT-Infrastrukturen",

    modal_experience_title: "Erfahrung",
    modal_experience_text:
      "Erfahrung im Betrieb hybrider IT-Infrastrukturen, im 2nd/3rd Level Support, in Client-Management-Prozessen, Standortintegration, Security Management und Zusammenarbeit mit internationalen Teams.",

    modal_security_title: "IT Security & Compliance",
    modal_security_1: "Compliance Lifecycle Management",
    modal_security_2: "Patch- und Security-Management",
    modal_security_3: "Application Control und Application Blocking",
    modal_security_4: "BTPM Security Plattform Administration",
    modal_security_5: "Security Policies und Endpoint Protection",

    modal_cloud_title: "Cloud & Infrastructure",
    modal_cloud_1: "Microsoft Azure Infrastruktur",
    modal_cloud_2: "Azure Virtual Machines",
    modal_cloud_3: "Azure Virtual Desktop",
    modal_cloud_4: "Microsoft Entra ID",
    modal_cloud_5: "Hybride IT-Infrastrukturen",
    modal_cloud_6: "Cloud Monitoring und Systembetrieb",

    modal_endpoint_title: "Microsoft Intune & Endpoint Management",
    modal_endpoint_1: "Microsoft Intune Administration",
    modal_endpoint_2: "Device Management",
    modal_endpoint_3: "Compliance Policies",
    modal_endpoint_4: "Autopilot",
    modal_endpoint_5: "Endpoint Security",
    modal_endpoint_6: "Troubleshooting von Client-Systemen",

    modal_network_title: "Networking",
    modal_network_1: "VPN, VLAN und Routing-Grundlagen",
    modal_network_2: "Cisco und Meraki Administration",
    modal_network_3: "Netzwerkdiagnose und Troubleshooting",
    modal_network_4: "Standortintegration und Infrastrukturaufbau",

    modal_automation_title: "PowerShell & Automation",
    modal_automation_1: "PowerShell Automatisierung",
    modal_automation_2: "Deployment Automation",
    modal_automation_3: "Remediation Scripts",
    modal_automation_4: "Optimierung administrativer Prozesse",

    modal_support_title: "Support & IT Operations",
    modal_support_1: "2nd/3rd Level Support",
    modal_support_2: "Root Cause Analyse komplexer Incidents",
    modal_support_3: "ServiceNow Incident, Request und Change Management",
    modal_support_4: "SLA-Steuerung und Ticketbearbeitung",
    modal_support_5: "Rollouts, Migrationen und internationale Zusammenarbeit",

    modal_systems_title: "Systems & Industrial IT",
    modal_systems_1: "Windows Server & Clients",
    modal_systems_2: "VMware und Citrix",
    modal_systems_3: "Scanner, Drucker und Barcode-Prozesse",
    modal_systems_4: "ERP-nahe Systeme",
    modal_systems_5: "Hardware Rollouts und Client Management",

    modal_portfolio_title: "Portfolio Website",
    modal_portfolio_1: "Responsive Portfolio-Webseite mit HTML, CSS und JavaScript",
    modal_portfolio_2: "Deployment über GitHub Pages",
    modal_portfolio_3: "Moderne UI mit Glassmorphism, Modals und Animationen",
    modal_portfolio_4: "Versionierung und Deployment mit Git und GitHub",

    modal_cloud_lab_title: "Cloud & Infrastructure Lab",
    modal_cloud_lab_1: "Persönliches Lernprojekt für Cloud- und Infrastrukturthemen",
    modal_cloud_lab_2: "Fokus auf Azure, Intune, Security und Automatisierung",
    modal_cloud_lab_3: "Aufbau technischer Dokumentation und Best Practices",

    modal_contact_title: "Kontakt",
    modal_contact_name: "Name:",
    modal_contact_email: "Email:"
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

    hero_title: "Senior IT Specialist & Cloud Infrastructure Professional",
    hero_description:
      "Senior IT Specialist with over 5 years of experience in IT infrastructure, system administration and support of complex IT environments. Specialized in Microsoft Azure, Microsoft Intune, client management, IT security and modern cloud technologies.",

    btn_profile: "Profile",
    btn_focus: "Focus Areas",
    btn_experience: "Experience",
    btn_security: "Security",
    btn_cloud: "Cloud",
    btn_endpoint: "Endpoint Management",
    btn_network: "Networking",
    btn_automation: "Automation",
    btn_support: "Support",
    btn_systems: "Systems",
    btn_portfolio: "Portfolio Website",
    btn_cloud_lab: "Cloud & Infrastructure Lab",
    btn_contact_details: "Contact Details",

    modal_profile_title: "Profile",
    modal_profile_text:
      "I am a Senior IT Specialist with over 5 years of experience in IT infrastructure, system administration and support of complex IT environments.",

    modal_focus_title: "Focus Areas",
    modal_focus_1: "Cloud computing with Microsoft Azure",
    modal_focus_2: "Endpoint management with Microsoft Intune",
    modal_focus_3: "IT security and compliance",
    modal_focus_4: "Automation with PowerShell",
    modal_focus_5: "Hybrid IT infrastructures",

    modal_experience_title: "Experience",
    modal_experience_text:
      "Experience in operating hybrid IT infrastructures, 2nd/3rd level support, client management processes, site integration, security management and collaboration with international teams.",

    modal_security_title: "IT Security & Compliance",
    modal_security_1: "Compliance lifecycle management",
    modal_security_2: "Patch and security management",
    modal_security_3: "Application control and application blocking",
    modal_security_4: "BTPM security platform administration",
    modal_security_5: "Security policies and endpoint protection",

    modal_cloud_title: "Cloud & Infrastructure",
    modal_cloud_1: "Microsoft Azure infrastructure",
    modal_cloud_2: "Azure Virtual Machines",
    modal_cloud_3: "Azure Virtual Desktop",
    modal_cloud_4: "Microsoft Entra ID",
    modal_cloud_5: "Hybrid IT infrastructures",
    modal_cloud_6: "Cloud monitoring and system operations",

    modal_endpoint_title: "Microsoft Intune & Endpoint Management",
    modal_endpoint_1: "Microsoft Intune administration",
    modal_endpoint_2: "Device management",
    modal_endpoint_3: "Compliance policies",
    modal_endpoint_4: "Autopilot",
    modal_endpoint_5: "Endpoint security",
    modal_endpoint_6: "Client system troubleshooting",

    modal_network_title: "Networking",
    modal_network_1: "VPN, VLAN and routing fundamentals",
    modal_network_2: "Cisco and Meraki administration",
    modal_network_3: "Network diagnostics and troubleshooting",
    modal_network_4: "Site integration and infrastructure setup",

    modal_automation_title: "PowerShell & Automation",
    modal_automation_1: "PowerShell automation",
    modal_automation_2: "Deployment automation",
    modal_automation_3: "Remediation scripts",
    modal_automation_4: "Optimization of administrative processes",

    modal_support_title: "Support & IT Operations",
    modal_support_1: "2nd/3rd level support",
    modal_support_2: "Root cause analysis of complex incidents",
    modal_support_3: "ServiceNow incident, request and change management",
    modal_support_4: "SLA control and ticket handling",
    modal_support_5: "Rollouts, migrations and international collaboration",

    modal_systems_title: "Systems & Industrial IT",
    modal_systems_1: "Windows Server & Clients",
    modal_systems_2: "VMware and Citrix",
    modal_systems_3: "Scanners, printers and barcode processes",
    modal_systems_4: "ERP-related systems",
    modal_systems_5: "Hardware rollouts and client management",

    modal_portfolio_title: "Portfolio Website",
    modal_portfolio_1: "Responsive portfolio website with HTML, CSS and JavaScript",
    modal_portfolio_2: "Deployment via GitHub Pages",
    modal_portfolio_3: "Modern UI with glassmorphism, modals and animations",
    modal_portfolio_4: "Version control and deployment with Git and GitHub",

    modal_cloud_lab_title: "Cloud & Infrastructure Lab",
    modal_cloud_lab_1: "Personal learning project for cloud and infrastructure topics",
    modal_cloud_lab_2: "Focus on Azure, Intune, security and automation",
    modal_cloud_lab_3: "Building technical documentation and best practices",

    modal_contact_title: "Contact",
    modal_contact_name: "Name:",
    modal_contact_email: "Email:"
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

    hero_title: "أخصائي تقنية معلومات أول ومحترف بنية تحتية سحابية",
    hero_description:
      "أخصائي تقنية معلومات أول مع أكثر من 5 سنوات من الخبرة في البنية التحتية لتقنية المعلومات وإدارة الأنظمة ودعم البيئات التقنية المعقدة، مع تخصص في Microsoft Azure وMicrosoft Intune وإدارة الأجهزة وأمن المعلومات وتقنيات السحابة الحديثة.",

    btn_profile: "الملف الشخصي",
    btn_focus: "مجالات التركيز",
    btn_experience: "الخبرة",
    btn_security: "الأمن",
    btn_cloud: "السحابة",
    btn_endpoint: "إدارة الأجهزة",
    btn_network: "الشبكات",
    btn_automation: "الأتمتة",
    btn_support: "الدعم",
    btn_systems: "الأنظمة",
    btn_portfolio: "موقع البورتفوليو",
    btn_cloud_lab: "مختبر السحابة والبنية التحتية",
    btn_contact_details: "بيانات التواصل",

    modal_profile_title: "الملف الشخصي",
    modal_profile_text:
      "أنا أخصائي تقنية معلومات أول مع أكثر من 5 سنوات من الخبرة في البنية التحتية لتقنية المعلومات وإدارة الأنظمة ودعم البيئات التقنية المعقدة.",

    modal_focus_title: "مجالات التركيز",
    modal_focus_1: "الحوسبة السحابية باستخدام Microsoft Azure",
    modal_focus_2: "إدارة الأجهزة باستخدام Microsoft Intune",
    modal_focus_3: "أمن المعلومات والامتثال",
    modal_focus_4: "الأتمتة باستخدام PowerShell",
    modal_focus_5: "البنى التحتية التقنية الهجينة",

    modal_experience_title: "الخبرة",
    modal_experience_text:
      "خبرة في تشغيل البنى التحتية التقنية الهجينة، ودعم المستوى الثاني والثالث، وعمليات إدارة الأجهزة، ودمج المواقع، وإدارة الأمن، والتعاون مع فرق دولية.",

    modal_security_title: "أمن المعلومات والامتثال",
    modal_security_1: "إدارة دورة حياة الامتثال",
    modal_security_2: "إدارة التحديثات والأمن",
    modal_security_3: "التحكم بالتطبيقات وحظر التطبيقات",
    modal_security_4: "إدارة منصة BTPM الأمنية",
    modal_security_5: "سياسات الأمن وحماية الأجهزة",

    modal_cloud_title: "السحابة والبنية التحتية",
    modal_cloud_1: "بنية Microsoft Azure التحتية",
    modal_cloud_2: "أجهزة Azure الافتراضية",
    modal_cloud_3: "Azure Virtual Desktop",
    modal_cloud_4: "Microsoft Entra ID",
    modal_cloud_5: "بنى تحتية تقنية هجينة",
    modal_cloud_6: "مراقبة السحابة وتشغيل الأنظمة",

    modal_endpoint_title: "Microsoft Intune وإدارة الأجهزة",
    modal_endpoint_1: "إدارة Microsoft Intune",
    modal_endpoint_2: "إدارة الأجهزة",
    modal_endpoint_3: "سياسات الامتثال",
    modal_endpoint_4: "Autopilot",
    modal_endpoint_5: "أمن الأجهزة",
    modal_endpoint_6: "استكشاف مشاكل أنظمة العملاء وحلها",

    modal_network_title: "الشبكات",
    modal_network_1: "VPN وVLAN وأساسيات التوجيه",
    modal_network_2: "إدارة Cisco وMeraki",
    modal_network_3: "تشخيص الشبكات واستكشاف الأخطاء",
    modal_network_4: "دمج المواقع وبناء البنية التحتية",

    modal_automation_title: "PowerShell والأتمتة",
    modal_automation_1: "الأتمتة باستخدام PowerShell",
    modal_automation_2: "أتمتة عمليات النشر",
    modal_automation_3: "سكربتات المعالجة والإصلاح",
    modal_automation_4: "تحسين العمليات الإدارية",

    modal_support_title: "الدعم وعمليات تقنية المعلومات",
    modal_support_1: "دعم المستوى الثاني والثالث",
    modal_support_2: "تحليل السبب الجذري للحوادث المعقدة",
    modal_support_3: "إدارة الحوادث والطلبات والتغييرات باستخدام ServiceNow",
    modal_support_4: "متابعة اتفاقيات مستوى الخدمة وإدارة التذاكر",
    modal_support_5: "عمليات النشر والهجرة والتعاون الدولي",

    modal_systems_title: "الأنظمة وتقنية المعلومات الصناعية",
    modal_systems_1: "Windows Server وأجهزة العملاء",
    modal_systems_2: "VMware وCitrix",
    modal_systems_3: "الماسحات والطابعات وعمليات الباركود",
    modal_systems_4: "أنظمة مرتبطة بتخطيط موارد المؤسسة",
    modal_systems_5: "نشر الأجهزة وإدارة العملاء",

    modal_portfolio_title: "موقع البورتفوليو",
    modal_portfolio_1: "موقع بورتفوليو متجاوب باستخدام HTML وCSS وJavaScript",
    modal_portfolio_2: "النشر عبر GitHub Pages",
    modal_portfolio_3: "واجهة حديثة باستخدام Glassmorphism والنوافذ المنبثقة والحركات",
    modal_portfolio_4: "إدارة الإصدارات والنشر باستخدام Git وGitHub",

    modal_cloud_lab_title: "مختبر السحابة والبنية التحتية",
    modal_cloud_lab_1: "مشروع تعلم شخصي لمواضيع السحابة والبنية التحتية",
    modal_cloud_lab_2: "تركيز على Azure وIntune والأمن والأتمتة",
    modal_cloud_lab_3: "بناء توثيق تقني وأفضل الممارسات",

    modal_contact_title: "التواصل",
    modal_contact_name: "الاسم:",
    modal_contact_email: "البريد الإلكتروني:"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

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
function openImageModal() {
  document
    .getElementById("imageModal")
    .classList.add("active");
}

function closeImageModal() {
  document
    .getElementById("imageModal")
    .classList.remove("active");
}
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    document
      .querySelectorAll(".modal.active, .image-modal.active")
      .forEach((modal) => {
        modal.classList.remove("active");
      });

  }

});