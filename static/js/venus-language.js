const translations = {
    en: {
        title: "Venus",
        hero_title: "Welcome to<br><span>Venus</span>",
        hero_subtitle: "The hottest planet in our Solar System",

        btn_about: "about the planet",
        btn_stats: "statistics about the planet",
        btn_video: "Explanation video",

        about_title: "about Venus",
        about_text:
            "Venus is the second planet from the Sun and is similar in size and structure to Earth, often called Earth's twin. " +
            "It has a thick toxic atmosphere causing extreme greenhouse effect and is the hottest planet.",

        data_title: "data about Venus",
        data_orbit: "<strong>Orbital Period:</strong> 225 Earth days",
        data_rotation: "<strong>Rotation Period:</strong> 243 Earth days (retrograde)",
        data_diameter: "<strong>Diameter:</strong> 12,104 km",
        data_mass: "<strong>Mass:</strong> 4.87 × 10²⁴ kg",
        data_gravity: "<strong>Surface Gravity:</strong> 8.87 m/s²",
        data_temp: "<strong>Average Temperature:</strong> 465°C",
        data_moons: "<strong>Moons:</strong> None",
        data_atmosphere: "<strong>Atmosphere:</strong> Thick CO₂, clouds of sulfuric acid",

        video_title: "video",
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        title: "الزهرة",
        hero_title: "مرحبًا بك في<br><span>الزهرة</span>",
        hero_subtitle: "أحر كوكب في النظام الشمسي",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن الزهرة",
        about_text:
            "الزهرة هو الكوكب الثاني من الشمس ويشبه الأرض في الحجم والتركيب، وغالبًا ما يُسمى توأم الأرض. " +
            "يتميز بغلاف جوي كثيف سام يسبب تأثير الاحتباس الحراري القوي وهو أحر كوكب.",

        data_title: "بيانات عن الزهرة",
        data_orbit: "<strong>مدة الدوران حول الشمس:</strong> 225 يومًا أرضيًا",
        data_rotation: "<strong>مدة الدوران حول نفسه:</strong> 243 يومًا أرضيًا (رجعي)",
        data_diameter: "<strong>القطر:</strong> 12,104 كم",
        data_mass: "<strong>الكتلة:</strong> 4.87 × 10²⁴ كجم",
        data_gravity: "<strong>الجاذبية السطحية:</strong> 8.87 م/ث²",
        data_temp: "<strong>متوسط الحرارة:</strong> 465° م",
        data_moons: "<strong>الأقمار:</strong> لا يوجد",
        data_atmosphere: "<strong>الغلاف الجوي:</strong> كثيف CO₂، سحب من حمض الكبريتيك",

        video_title: "فيديو",
        ask_ai: "اسأل الذكاء الاصطناعي",  
        send: "إرسال"  
    }
};

const switcher = document.getElementById("language-switcher");
switcher.addEventListener("change", () => setLanguage(switcher.value));

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
}

setLanguage("en");
