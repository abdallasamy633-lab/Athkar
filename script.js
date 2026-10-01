// ==============================
// A.S.A - أذكار المهندس عبدالله سامي
// ==============================

const data = {
    morning: {
        name: "أذكار الصباح",
        icon: "☀️",
        items: [
            {
                text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",
                source: "أبو داود والترمذي",
                repeat: 3
            },
            {
                text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
                source: "سورة التوبة: 129",
                repeat: 7
            },
            {
                text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                source: "رواه مسلم",
                repeat: 100
            }
        ]
    },

    evening: {
        name: "أذكار المساء",
        icon: "🌙",
        items: [
            {
                text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
                source: "رواه مسلم",
                repeat: 3
            },
            {
                text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",
                source: "أبو داود والترمذي",
                repeat: 3
            },
            {
                text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                source: "رواه مسلم",
                repeat: 100
            }
        ]
    },

    sleep: {
        name: "أذكار النوم",
        icon: "🛏️",
        items: [
            {
                text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
                source: "رواه البخاري",
                repeat: 1
            },
            {
                text: "سُبْحَانَ اللَّهِ.",
                source: "رواه البخاري ومسلم",
                repeat: 33
            },
            {
                text: "الْحَمْدُ لِلَّهِ.",
                source: "رواه البخاري ومسلم",
                repeat: 33
            },
            {
                text: "اللَّهُ أَكْبَرُ.",
                source: "رواه البخاري ومسلم",
                repeat: 34
            }
        ]
    },

    afterPrayer: {
        name: "أذكار بعد الصلاة",
        icon: "🕌",
        items: [
            {
                text: "أَسْتَغْفِرُ اللَّهَ.",
                source: "رواه مسلم",
                repeat: 3
            },
            {
                text: "اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ.",
                source: "رواه مسلم",
                repeat: 1
            },
            {
                text: "سُبْحَانَ اللَّهِ.",
                source: "رواه مسلم",
                repeat: 33
            },
            {
                text: "الْحَمْدُ لِلَّهِ.",
                source: "رواه مسلم",
                repeat: 33
            },
            {
                text: "اللَّهُ أَكْبَرُ.",
                source: "رواه مسلم",
                repeat: 33
            }
        ]
    },

    prophets: {
        name: "أدعية الأنبياء",
        icon: "🤲",
        items: [
            {
                text: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي.",
                source: "سورة طه: 25–26",
                repeat: 1
            },
            {
                text: "رَبِّ زِدْنِي عِلْمًا.",
                source: "سورة طه: 114",
                repeat: 1
            },
            {
                text: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ.",
                source: "سورة الأعراف: 23",
                repeat: 1
            },
            {
                text: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
                source: "سورة الأنبياء: 87",
                repeat: 1
            },
            {
                text: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ.",
                source: "سورة القصص: 24",
                repeat: 1
            },
            {
                text: "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ.",
                source: "سورة آل عمران: 38",
                repeat: 1
            }
        ]
    }
};


// ==============================
// المتغيرات
// ==============================

let currentSection = "morning";
let currentIndex = 0;


// ==============================
// عناصر الصفحة
// ==============================

const homeView = document.getElementById("homeView");
const dhikrView = document.getElementById("dhikrView");
const categoryGrid = document.getElementById("categoryGrid");


// ==============================
// كروت الأقسام
// ==============================

const categories = [
    {
        id: "morning",
        icon: "☀️",
        name: "أذكار الصباح",
        description: "ابدأ يومك بذكر الله"
    },
    {
        id: "evening",
        icon: "🌙",
        name: "أذكار المساء",
        description: "اختم يومك بذكر الله"
    },
    {
        id: "sleep",
        icon: "🛏️",
        name: "أذكار النوم",
        description: "أذكار قبل النوم"
    },
    {
        id: "afterPrayer",
        icon: "🕌",
        name: "أذكار بعد الصلاة",
        description: "أذكار ما بعد الصلاة"
    },
    {
        id: "prophets",
        icon: "🤲",
        name: "أدعية الأنبياء",
        description: "أدعية من القرآن الكريم"
    }
];


function renderCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(function(category) {

        const card = document.createElement("button");

        card.className = "category";

        card.innerHTML =
            '<div class="category-icon">' +
            category.icon +
            '</div>' +
            '<h3>' +
            category.name +
            '</h3>' +
            '<p>' +
            category.description +
            '</p>';

        card.addEventListener("click", function() {
            openSection(category.id);
        });

        categoryGrid.appendChild(card);
    });
}


// ==============================
// فتح قسم الأذكار
// ==============================

function openSection(section) {

    currentSection = section;
    currentIndex = 0;

    homeView.classList.add("hidden");
    dhikrView.classList.remove("hidden");

    updateNavigation(section);
    renderDhikr();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==============================
// الرئيسية
// ==============================

function showHome() {

    homeView.classList.remove("hidden");
    dhikrView.classList.add("hidden");

    updateNavigation("home");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==============================
// القائمة الجانبية
// ==============================

function updateNavigation(section) {

    document.querySelectorAll(".nav-item").forEach(function(button) {

        button.classList.remove("active");

        if (button.dataset.section === section) {
            button.classList.add("active");
        }

    });
}


document.querySelectorAll(".nav-item").forEach(function(button) {

    button.addEventListener("click", function() {

        const section = button.dataset.section;

        if (section === "home") {
            showHome();
        } else {
            openSection(section);
        }

    });

});


// ==============================
// عرض الذكر الحالي
// ==============================

function renderDhikr() {

    const group = data[currentSection];
    const item = group.items[currentIndex];

    document.getElementById("sectionBadge").textContent =
        group.icon + " " + group.name;

    document.getElementById("counterText").textContent =
        (currentIndex + 1) + " من " + group.items.length;

    const progress =
        ((currentIndex + 1) / group.items.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("dhikrNumber").textContent =
        String(currentIndex + 1).padStart(2, "0");

    document.getElementById("dhikrText").textContent =
        item.text;

    document.getElementById("dhikrSource").textContent =
        item.source;

    document.getElementById("repeatCount").textContent =
        item.repeat;

    document.getElementById("prevBtn").disabled =
        currentIndex === 0;

    document.getElementById("nextBtn").disabled =
        currentIndex === group.items.length - 1;
}


// ==============================
// الذكر التالي
// ==============================

function nextDhikr() {

    const group = data[currentSection];

    if (currentIndex < group.items.length - 1) {

        currentIndex++;

        renderDhikr();

    } else {

        alert("ما شاء الله، أتممت هذا القسم 🤍");

    }
}


// ==============================
// الذكر السابق
// ==============================

function previousDhikr() {

    if (currentIndex > 0) {

        currentIndex--;

        renderDhikr();

    }
}


// ==============================
// أزرار التالي والسابق
// ==============================

document.getElementById("nextBtn").addEventListener(
    "click",
    nextDhikr
);

document.getElementById("prevBtn").addEventListener(
    "click",
    previousDhikr
);


// ==============================
// زر تم الذكر
// ==============================

document.getElementById("doneBtn").addEventListener(
    "click",
    nextDhikr
);


// ==============================
// نسخ الذكر
// ==============================

document.getElementById("copyBtn").addEventListener(
    "click",
    async function() {

        const text =
            document.getElementById("dhikrText").textContent;

        try {

            await navigator.clipboard.writeText(text);

            alert("تم نسخ الذكر ✓");

        } catch (error) {

            alert("تعذر النسخ.");

        }

    }
);


// ==============================
// مشاركة الذكر
// ==============================

document.getElementById("shareBtn").addEventListener(
    "click",
    async function() {

        const text =
            document.getElementById("dhikrText").textContent;

        try {

            if (navigator.share) {

                await navigator.share({
                    title: "A.S.A | أذكار",
                    text: text
                });

            } else {

                await navigator.clipboard.writeText(text);

                alert("تم نسخ الذكر للمشاركة ✓");

            }

        } catch (error) {

            console.log("تم إلغاء المشاركة.");

        }

    }
);


// ==============================
// الوضع الليلي
// ==============================

document.getElementById("themeBtn").addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");

        const button =
            document.getElementById("themeBtn");

        if (document.body.classList.contains("dark")) {

            button.textContent = "☀️";

        } else {

            button.textContent = "🌙";

        }

    }
);


// ==============================
// تشغيل الموقع
// ==============================

renderCategories();