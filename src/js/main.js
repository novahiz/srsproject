const burgerBtn = document.querySelector("#burger");
const navMenu = document.querySelector(".header .header-content .nav-menu");

// Event Listener

burgerBtn.addEventListener("click", burgerActive);
burgerBtn.addEventListener("mouseout", btnClose);
// functions

function burgerActive() {
  burgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function btnClose() {
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

// Fonction d'initialisation du sélecteur de langue
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "fr",
      includedLanguages: "fr,en,de,es",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element",
  );
}

function updateGoogleTranslationApiKey() {
  google.translate.TranslateElement({pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-12345678-9'}, 'google_translate_element');
}