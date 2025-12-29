const translations = {
    en: {
        hero_title: "Welcome to",
        planet_name: "Earth",
        hero_subtitle: "The Blue Planet — our home in the Solar System",

        btn_about: "About the planet",
        btn_stats: "Statistics about the planet",
        btn_video: "Explanation video",

        about_title: "About Earth",
        about_text:
            "Earth is the third planet from the Sun and the only known planet to support life. " +
            "It has a diameter of about 12,742 km and is the largest terrestrial planet in the Solar System. " +
            "Earth has a diverse atmosphere composed mainly of nitrogen and oxygen. " +
            "Its surface is about 71% water and 29% land. " +
            "Earth rotates every 24 hours and completes one orbit in 365.25 days. " +
            "The Moon influences tides and stabilizes Earth's tilt. " +
            "Earth’s magnetic field protects life from solar radiation.",

        data_title: "Data about Earth",
        data_orbit: "Orbital Period: 365.25 days",
        data_rotation: "Rotation Period: 24 hours",
        data_diameter: "Diameter: 12,742 km",
        data_mass: "Mass: 5.97 × 10²⁴ kg",
        data_gravity: "Surface Gravity: 9.81 m/s²",
        data_temp: "Average Temperature: ~15°C",
        data_moons: "Moons: 1 (The Moon)",
        data_atmos: "Atmosphere: Nitrogen & Oxygen",

        video_title: "Video",
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"               // ✅ add this
    },

    ar: {
        hero_title: "مرحبًا بك في",
        planet_name: "الأرض",
        hero_subtitle: "الكوكب الأزرق — موطننا في النظام الشمسي",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن كوكب الأرض",
        about_text:
            "الأرض هي الكوكب الثالث من الشمس والوحيد المعروف بدعمه للحياة. " +
            "يبلغ قطرها حوالي 12,742 كم وهي أكبر الكواكب الصخرية. " +
            "تمتلك غلافًا جويًا غنيًا بالنيتروجين والأكسجين. " +
            "تغطي المياه 71% من سطحها والباقي يابسة. " +
            "تدور الأرض كل 24 ساعة وتكمل دورتها حول الشمس في 365.25 يومًا. " +
            "يؤثر القمر على المد والجزر ويثبت ميل الأرض. " +
            "يحمي المجال المغناطيسي الأرض من الإشعاع الشمسي.",

        data_title: "بيانات عن الأرض",
        data_orbit: "مدة الدوران حول الشمس: 365.25 يوم",
        data_rotation: "مدة الدوران حول المحور: 24 ساعة",
        data_diameter: "القطر: 12,742 كم",
        data_mass: "الكتلة: ‎5.97 × 10²⁴ كجم",
        data_gravity: "الجاذبية السطحية: ‎9.81 م/ث²",
        data_temp: "متوسط الحرارة: ‎~15°م",
        data_moons: "الأقمار: قمر واحد",
        data_atmos: "الغلاف الجوي: نيتروجين وأكسجين",

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
