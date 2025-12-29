const translations = {
    en: {
        title: "Neptune",
        hero_title: "Welcome to<br><span>Neptune</span>",
        hero_subtitle: "The distant blue ice giant",

        btn_about: "about the planet",
        btn_stats: "statistics about the planet",
        btn_video: "Explanation video",

        about_title: "about Neptune",
        about_text:
            "Neptune is the eighth and farthest planet from the Sun in the Solar System. " +
            "It is classified as an ice giant due to its cold atmosphere and composition " +
            "of hydrogen, helium, and ices like water, ammonia, and methane.",

        data_title: "data about Neptune",
        data_orbit: "<strong>Orbital Period:</strong> 164.8 Earth years",
        data_rotation: "<strong>Rotation Period:</strong> 16.1 hours",
        data_diameter: "<strong>Diameter:</strong> 49,244 km",
        data_mass: "<strong>Mass:</strong> 1.02 × 10²⁶ kg",
        data_gravity: "<strong>Surface Gravity:</strong> 11.15 m/s²",
        data_temp: "<strong>Average Temperature:</strong> -200°C",
        data_moons: "<strong>Moons:</strong> 14",
        data_atmosphere: "<strong>Atmosphere:</strong> Hydrogen, Helium, Methane",

        video_title: "video"
        ,
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        title: "نبتون",
        hero_title: "مرحبًا بك في<br><span>نبتون</span>",
        hero_subtitle: "العملاق الجليدي الأزرق البعيد",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن نبتون",
        about_text:
            "نبتون هو الكوكب الثامن والأبعد عن الشمس في النظام الشمسي. " +
            "يُصنف كعملاق جليدي بسبب غلافه الجوي البارد وتكوينه من " +
            "الهيدروجين والهيليوم والجليد مثل الماء والأمونيا والميثان.",

        data_title: "بيانات عن نبتون",
        data_orbit: "<strong>مدة الدوران حول الشمس:</strong> 164.8 سنة أرضية",
        data_rotation: "<strong>مدة الدوران حول نفسه:</strong> 16.1 ساعة",
        data_diameter: "<strong>القطر:</strong> 49,244 كم",
        data_mass: "<strong>الكتلة:</strong> 1.02 × 10²⁶ كجم",
        data_gravity: "<strong>الجاذبية السطحية:</strong> 11.15 م/ث²",
        data_temp: "<strong>متوسط الحرارة:</strong> -200° م",
        data_moons: "<strong>الأقمار:</strong> 14",
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
