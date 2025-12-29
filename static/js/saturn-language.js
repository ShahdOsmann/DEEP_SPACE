const translations = {
    en: {
        title: "Saturn",
        hero_title: "Welcome to<br><span>Saturn</span>",
        hero_subtitle: "The ringed giant of the Solar System",

        btn_about: "about the planet",
        btn_stats: "statistics about the planet",
        btn_video: "Explanation video",

        about_title: "about Saturn",
        about_text:
            "Saturn is the sixth planet from the Sun and the second-largest planet in the Solar System. " +
            "It is famous for its spectacular ring system and is a gas giant composed mainly of hydrogen and helium.",

        data_title: "data about Saturn",
        data_orbit: "<strong>Orbital Period:</strong> 29.5 Earth years",
        data_rotation: "<strong>Rotation Period:</strong> 10.7 hours",
        data_diameter: "<strong>Diameter:</strong> 120,536 km",
        data_mass: "<strong>Mass:</strong> 5.68 × 10²⁶ kg",
        data_gravity: "<strong>Surface Gravity:</strong> 10.44 m/s²",
        data_temp: "<strong>Average Temperature:</strong> -140°C",
        data_moons: "<strong>Moons:</strong> 83+",
        data_atmosphere: "<strong>Atmosphere:</strong> Hydrogen, Helium, Methane",

        video_title: "video"
        ,
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        title: "زحل",
        hero_title: "مرحبًا بك في<br><span>زحل</span>",
        hero_subtitle: "العملاق ذو الحلقات في النظام الشمسي",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن زحل",
        about_text:
            "زحل هو الكوكب السادس من حيث البعد عن الشمس وثاني أكبر كوكب في النظام الشمسي. " +
            "يشتهر بحلقاته المذهلة ويُصنف كعملاق غازي يتكون أساسًا من الهيدروجين والهيليوم.",

        data_title: "بيانات عن زحل",
        data_orbit: "<strong>مدة الدوران حول الشمس:</strong> 29.5 سنة أرضية",
        data_rotation: "<strong>مدة الدوران حول نفسه:</strong> 10.7 ساعات",
        data_diameter: "<strong>القطر:</strong> 120,536 كم",
        data_mass: "<strong>الكتلة:</strong> 5.68 × 10²⁶ كجم",
        data_gravity: "<strong>الجاذبية السطحية:</strong> 10.44 م/ث²",
        data_temp: "<strong>متوسط الحرارة:</strong> -140° م",
        data_moons: "<strong>الأقمار:</strong> 83+",
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
