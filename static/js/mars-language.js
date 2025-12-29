const translations = {
    en: {
        hero_title: "Welcome to",
        planet_name: "Mars",
        hero_subtitle: "The Red Planet — a world of deserts and mountains",

        btn_about: "About the planet",
        btn_stats: "Statistics about the planet",
        btn_video: "Explanation video",

        about_title: "About Mars",
        about_text:
            "Mars is the fourth planet from the Sun and is known as the Red Planet because of its reddish surface caused by iron oxide. " +
            "It has a diameter of about 6,779 km, roughly half the size of Earth. " +
            "Mars has a thin atmosphere made mostly of carbon dioxide, " +
            "and its surface includes deserts, valleys, and Olympus Mons, " +
            "the largest volcano in the Solar System. " +
            "Mars rotates every 24.6 hours and completes an orbit in 687 Earth days. " +
            "It has two small moons, Phobos and Deimos. " +
            "Robotic missions like Spirit, Opportunity, Curiosity, and Perseverance " +
            "have explored the planet in search of water and life.",

        data_title: "Data about Mars",
        data_orbit: "Orbital Period: 687 Earth days",
        data_rotation: "Rotation Period: 24.6 hours",
        data_diameter: "Diameter: 6,779 km",
        data_mass: "Mass: 6.42 × 10²³ kg",
        data_gravity: "Surface Gravity: 3.71 m/s²",
        data_temp: "Average Temperature: -60°C",
        data_moons: "Moons: 2 (Phobos, Deimos)",
        data_atmos: "Atmosphere: CO₂, N₂, Argon",

        video_title: "Video"
        ,
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        hero_title: "مرحبًا بك في",
        planet_name: "المريخ",
        hero_subtitle: "الكوكب الأحمر — عالم من الصحارى والجبال",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن كوكب المريخ",
        about_text:
            "المريخ هو الكوكب الرابع من الشمس ويُعرف بالكوكب الأحمر بسبب لونه الناتج عن أكسيد الحديد. " +
            "يبلغ قطره حوالي 6,779 كم، أي نصف حجم الأرض تقريبًا. " +
            "يمتلك غلافًا جويًا رقيقًا يتكون أساسًا من ثاني أكسيد الكربون. " +
            "تضم تضاريسه صحارى وأودية وبركان أوليمبوس مونس، وهو الأكبر في النظام الشمسي. " +
            "يدور المريخ حول محوره كل 24.6 ساعة ويتم دورته حول الشمس في 687 يومًا أرضيًا. " +
            "لديه قمران صغيران هما فوبوس وديموس. " +
            "قامت بعثات روبوتية مثل سبيريت وأوبورتيونيتي وكوريوسيتي وبيرسيفيرانس " +
            "باستكشافه بحثًا عن الماء وإمكانية الحياة.",

        data_title: "بيانات عن المريخ",
        data_orbit: "مدة الدوران حول الشمس: 687 يومًا أرضيًا",
        data_rotation: "مدة الدوران حول المحور: 24.6 ساعة",
        data_diameter: "القطر: 6,779 كم",
        data_mass: "الكتلة: ‎6.42 × 10²³ كجم",
        data_gravity: "الجاذبية السطحية: ‎3.71 م/ث²",
        data_temp: "متوسط الحرارة: ‎-60°م",
        data_moons: "الأقمار: 2 (فوبوس، ديموس)",
        data_atmos: "الغلاف الجوي: ثاني أكسيد الكربون، نيتروجين، أرجون",

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
