function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
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

languageSelect.addEventListener("change", (event) => {
  const lang = event.target.value;

  if (lang === "de") {
    document.documentElement.lang = "de";
    document.documentElement.dir = "ltr";
    alert("Deutsch ist bereits die Standardsprache.");
  }

  if (lang === "en") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    alert("Englische Übersetzung bauen wir im nächsten Schritt ein.");
  }

  if (lang === "ar") {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    alert("Arabische Übersetzung bauen wir im nächsten Schritt ein.");
  }
});