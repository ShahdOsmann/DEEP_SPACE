const translations = {
    en: {
        hero_title: "Welcome to",
        planet_name: "Mercury",
        hero_subtitle: "The smallest and innermost planet in the Solar System",

        btn_about: "About the planet",
        btn_stats: "Statistics about the planet",
        btn_video: "Explanation video",

        about_title: "About Mercury",
        about_text:
            "Mercury is the closest planet to the Sun and the smallest planet in the Solar System. " +
            "It has a diameter of about 4,880 km, roughly 38% the size of Earth. " +
            "Mercury has almost no atmosphere, causing extreme temperature differences. " +
            "Daytime temperatures reach about 430°C, while nighttime temperatures drop to -180°C. " +
            "Its surface is heavily cratered, similar to the Moon. " +
            "Mercury completes one orbit around the Sun in just 88 Earth days. " +
            "Despite its small size, it has a large iron core and a magnetic field. " +
            "Missions such as Mariner 10 and MESSENGER provided detailed maps of the planet.",

        data_title: "Data about Mercury",
        data_orbit: "Orbital Period: 88 Earth days",
        data_rotation: "Rotation Period: 58.6 Earth days",
        data_diameter: "Diameter: 4,880 km",
        data_mass: "Mass: 3.30 × 10²³ kg",
        data_gravity: "Surface Gravity: 3.7 m/s²",
        data_temp: "Temperature: -180°C to 430°C",
        data_moons: "Moons: None",
        data_atmos: "Atmosphere: Very thin (oxygen, sodium, hydrogen)",

        video_title: "Video"
        ,
        ask_ai: "Ask the AI",      // ✅ add this
        send: "Send"   
    },

    ar: {
        hero_title: "مرحبًا بك في",
        planet_name: "عطارد",
        hero_subtitle: "أصغر كواكب المجموعة الشمسية وأقربها إلى الشمس",

        btn_about: "عن الكوكب",
        btn_stats: "إحصائيات الكوكب",
        btn_video: "فيديو توضيحي",

        about_title: "عن كوكب عطارد",
        about_text:
            "عطارد هو أقرب كوكب إلى الشمس وأصغر كواكب المجموعة الشمسية. " +
            "يبلغ قطره حوالي 4,880 كم، أي ما يقارب 38% من حجم الأرض. " +
            "لا يمتلك غلافًا جويًا كثيفًا، مما يؤدي إلى فروق كبيرة في درجات الحرارة. " +
            "تصل درجة الحرارة نهارًا إلى 430 درجة مئوية، وتنخفض ليلًا إلى -180 درجة مئوية. " +
            "سطحه مليء بالفوهات ويشبه سطح القمر. " +
            "يتم عطارد دورة حول الشمس كل 88 يومًا أرضيًا. " +
            "رغم صغر حجمه، يمتلك نواة حديدية كبيرة ومجالًا مغناطيسيًا. " +
            "قامت بعثات مثل مارينر 10 وميسنجر برسم خرائط تفصيلية للكوكب.",

        data_title: "بيانات عن عطارد",
        data_orbit: "مدة الدوران حول الشمس: 88 يومًا أرضيًا",
        data_rotation: "مدة الدوران حول المحور: 58.6 يومًا أرضيًا",
        data_diameter: "القطر: 4,880 كم",
        data_mass: "الكتلة: ‎3.30 × 10²³ كجم",
        data_gravity: "الجاذبية السطحية: ‎3.7 م/ث²",
        data_temp: "درجة الحرارة: من ‎-180°م إلى ‎430°م",
        data_moons: "الأقمار: لا يوجد",
        data_atmos: "الغلاف الجوي: رقيق جدًا (أكسجين، صوديوم، هيدروجين)",

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
