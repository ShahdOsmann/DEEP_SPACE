const translations = {
    en: {
        title: "Uranus",
        hero_title: "Welcome to<br><span>Uranus</span>",
        hero_subtitle: "The tilted ice giant of the Solar System",

        btn_about: "about the planet",
        btn_stats: "statistics about the planet",
        btn_video: "Explanation video",

        about_title: "about Uranus",
        about_text:
            "Uranus is the seventh planet from the Sun and is classified as an ice giant. " +
            "It rotates on its side, causing extreme seasons and has a blue-green color due to methane.",

        data_title: "data about Uranus",
        data_orbit: "<strong>Orbital Period:</strong> 84 Earth years",
        data_rotation: "<strong>Rotation Period:</strong> 17.2 hours",
        data_diameter: "<strong>Diameter:</strong> 50,724 km",
        data_mass: "<strong>Mass:</strong> 8.68 × 10²⁵ kg",
        data_gravity: "<strong>Surface Gravity:</strong> 8.69 m/s²",
        data_temp: "<strong>Average Temperature:</strong> -197°C",
        data_moons: "<strong>Moons:</strong> 27",
        data_atmosphere: "<strong>Atmosphere:</strong> Hydrogen, Helium, Methane",

        video_title: "video",
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        title: "أورانوس",
        hero_title: "مرحبًا بك في<br><span>أورانوس</span>",
        hero_subtitle: "العملاق الجليدي المائل في النظام الشمسي",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن أورانوس",
        about_text:
            "أورانوس هو الكوكب السابع من حيث البعد عن الشمس ويُصنف كعملاق جليدي. " +
            "يدور على جانبه مما يسبب فصولًا قاسية، ويتميز بلونه الأزرق المخضر بسبب غاز الميثان.",

        data_title: "بيانات عن أورانوس",
        data_orbit: "<strong>مدة الدوران حول الشمس:</strong> 84 سنة أرضية",
        data_rotation: "<strong>مدة الدوران حول نفسه:</strong> 17.2 ساعة",
        data_diameter: "<strong>القطر:</strong> 50,724 كم",
        data_mass: "<strong>الكتلة:</strong> 8.68 × 10²⁵ كجم",
        data_gravity: "<strong>الجاذبية السطحية:</strong> 8.69 م/ث²",
        data_temp: "<strong>متوسط الحرارة:</strong> -197° م",
        data_moons: "<strong>الأقمار:</strong> 27",
        data_atmosphere: "<strong>الغلاف الجوي:</strong> هيدروجين، هيليوم، ميثان",

        video_title: "فيديو",
        ask_ai: "اسأل الذكاء الاصطناعي",  // ✅ add Arabic
        send: "إرسال"  
    }
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
    setLanguage(switcher.value);
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
}

setLanguage("en");
