const translations = {
  en: {
    entering: "You are now entering",
    deep_space: "DEEP SPACE",
    select_planet: "Select a planet below",
    enter_orbit: "ENTER ORBIT",
    ask_ai: "Ask the AI",
    send: "Send",

    mercury: "MERCURY",
    mercury_desc: "Smallest planet, closest to the Sun, with extreme temperatures.",

    venus: "VENUS",
    venus_desc: "Earth-like in size, but with a thick toxic atmosphere.",

    earth: "EARTH",
    earth_desc: "The only known planet with liquid water and life.",

    mars: "MARS",
    mars_desc: "The red desert world, home to giant volcanoes and canyons.",

    jupiter: "JUPITER",
    jupiter_desc: "The largest planet with a massive storm and many moons.",

    saturn: "SATURN",
    saturn_desc: "Famous for its stunning icy rings and countless moons.",

    uranus: "URANUS",
    uranus_desc: "An ice giant with a tilted axis.",

    neptune: "NEPTUNE",
    neptune_desc: "The farthest ice giant, with supersonic winds."
  },

  ar: {
    entering: "أنت الآن تدخل",
    deep_space: "الفضاء العميق",
    select_planet: "اختر كوكبًا أدناه",
    enter_orbit: "دخول المدار",
    ask_ai: "اسأل الذكاء الاصطناعي",
    send: "إرسال",

    mercury: "عطارد",
    mercury_desc: "أصغر كوكب وأقربه إلى الشمس بدرجات حرارة شديدة.",

    venus: "الزهرة",
    venus_desc: "مشابه للأرض في الحجم لكن بغلاف جوي سام.",

    earth: "الأرض",
    earth_desc: "الكوكب الوحيد المعروف بوجود الماء والحياة.",

    mars: "المريخ",
    mars_desc: "كوكب أحمر صحراوي يحتوي على براكين عملاقة.",

    jupiter: "المشتري",
    jupiter_desc: "أكبر كواكب المجموعة الشمسية.",

    saturn: "زحل",
    saturn_desc: "مشهور بحلقاته الجليدية الجميلة.",

    uranus: "أورانوس",
    uranus_desc: "عملاق جليدي بمحور مائل.",

    neptune: "نبتون",
    neptune_desc: "أبعد كوكب مع رياح فائقة السرعة."
  }
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
  const lang = switcher.value;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const input = document.getElementById("user-input");
  if (input) {
    input.placeholder = lang === "ar"
      ? "اسألني عن الكواكب..."
      : "Ask me about planets...";
  }

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
});
