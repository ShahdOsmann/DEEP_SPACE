const translations = {
    en: {
        hero_title: "Welcome to",
        planet_name: "Jupiter",
        hero_subtitle: "The giant of the Solar System",

        btn_about: "About the planet",
        btn_stats: "Statistics about the planet",
        btn_video: "Explanation video",

        about_title: "About Jupiter",
        about_text:
            "Jupiter is the fifth planet from the Sun and the largest planet in the Solar System. " +
            "It has a diameter of about 139,820 km and a mass more than 300 times that of Earth. " +
            "Jupiter is a gas giant composed mainly of hydrogen and helium with no solid surface. " +
            "Its atmosphere features colorful cloud bands and the Great Red Spot, " +
            "a massive storm larger than Earth. " +
            "Jupiter rotates very fast, completing a rotation in just 9.9 hours. " +
            "It has a powerful magnetic field and more than 80 moons, " +
            "including Io, Europa, Ganymede, and Callisto. " +
            "Space missions like Pioneer, Voyager, Galileo, and Juno revealed detailed information.",

        data_title: "Data about Jupiter",
        data_orbit: "Orbital Period: 11.86 Earth years",
        data_rotation: "Rotation Period: 9.9 hours",
        data_diameter: "Diameter: 139,820 km",
        data_mass: "Mass: 1.90 × 10²⁷ kg",
        data_gravity: "Surface Gravity: 24.79 m/s²",
        data_temp: "Average Temperature: -145°C",
        data_moons: "Moons: 80+ (Io, Europa, Ganymede, Callisto)",
        data_atmos: "Atmosphere: Hydrogen & Helium",

        video_title: "Video", 
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        hero_title: "مرحبًا بك في",
        planet_name: "المشتري",
        hero_subtitle: "عملاق النظام الشمسي",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن كوكب المشتري",
        about_text:
            "المشتري هو الكوكب الخامس من الشمس وأكبر كواكب النظام الشمسي. " +
            "يبلغ قطره حوالي 139,820 كم وتزيد كتلته عن 300 ضعف كتلة الأرض. " +
            "المشتري كوكب غازي يتكون أساسًا من الهيدروجين والهيليوم ولا يمتلك سطحًا صلبًا. " +
            "يتميز بغلاف جوي ملون وبقعة حمراء عظيمة وهي عاصفة هائلة أكبر من الأرض. " +
            "يدور المشتري بسرعة كبيرة حيث يكمل دورة في 9.9 ساعات فقط. " +
            "يمتلك مجالًا مغناطيسيًا قويًا وأكثر من 80 قمرًا، " +
            "من أشهرها آيو وأوروبا وجانيميد وكاليستو. " +
            "قدمت بعثات فضائية مثل بايونير وفوييجر وجاليليو وجونو معلومات مفصلة.",

        data_title: "بيانات عن المشتري",
        data_orbit: "مدة الدوران حول الشمس: 11.86 سنة أرضية",
        data_rotation: "مدة الدوران حول المحور: 9.9 ساعات",
        data_diameter: "القطر: 139,820 كم",
        data_mass: "الكتلة: ‎1.90 × 10²⁷ كجم",
        data_gravity: "الجاذبية السطحية: ‎24.79 م/ث²",
        data_temp: "متوسط الحرارة: ‎-145°م",
        data_moons: "الأقمار: أكثر من 80 قمرًا",
        data_atmos: "الغلاف الجوي: هيدروجين وهيليوم",

        video_title: "فيديو",
        ask_ai: "اسأل الذكاء الاصطناعي",  // ✅ add Arabic
        send: "إرسال"  
    }
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
    const lang = switcher.value;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = translations[lang][key];
    });

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
});
