// قاعدة بيانات الأذكار
const azkarData = {
    sabah: [
        { text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...", count: 1, source: "آية الكرسي" },
        { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ...", count: 1, source: "رواه مسلم" },
        { text: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...", count: 1, source: "سيد الاستغفار" },
        { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.", count: 3, source: "رواه أبو داود" },
        { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.", count: 3, source: "رواه مسلم" }
    ],
    masea: [
        { text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", count: 1, source: "آية الكرسي" },
        { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ...", count: 1, source: "رواه مسلم" },
        { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3, source: "رواه مسلم" },
        { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.", count: 1, source: "رواه الترمذي" }
    ],
    nom: [
        { text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", count: 1, source: "آية الكرسي" },
        { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ...", count: 1, source: "رواه البخاري" },
        { text: "اللَّهُمَّ خَلَقْتَ نَفْسِي وَأَنْتَ تَتَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا...", count: 1, source: "رواه مسلم" },
        { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", count: 3, source: "رواه أبو داود" }
    ],
    salah: [
        { text: "أَسْتَغْفِرُ اللَّهَ (ثَلاَثاً)... اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ.", count: 1, source: "رواه مسلم" },
        { text: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33).", count: 33, source: "رواه مسلم" },
        { text: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: 1, source: "تمام المائة" }
    ],
    anbiya: [
        { text: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ.", count: 1, source: "سيدنا آدم عليه السلام" },
        { text: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي.", count: 1, source: "سيدنا موسى عليه السلام" },
        { text: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.", count: 1, source: "سيدنا يونس عليه السلام" },
        { text: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ.", count: 1, source: "سيدنا زكريا عليه السلام" }
    ]
};

let currentCategory = 'sabah';
let currentIndex = 0;
let currentCount = 0;
let masbahaCount = 0;

// Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// التنقل بين الأقسام
function switchTab(tabId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    if (azkarData[tabId]) {
        currentCategory = tabId;
        currentIndex = 0;
        loadZekr();
        document.getElementById('azkarView').classList.add('active');
    } else {
        document.getElementById(tabId + 'View').classList.add('active');
    }
}

// الأذكار
function loadZekr() {
    const data = azkarData[currentCategory];
    if (!data || data.length === 0) return;

    const item = data[currentIndex];
    document.getElementById('zekrText').textContent = item.text;
    document.getElementById('zekrSource').textContent = item.source;
    document.getElementById('azkarProgress').textContent = `${currentIndex + 1} من ${data.length}`;
    currentCount = item.count;
    document.getElementById('zekrCount').textContent = currentCount;
}

function countDown() {
    if (currentCount > 0) {
        currentCount--;
        document.getElementById('zekrCount').textContent = currentCount;
        if (currentCount === 0) nextZekr();
    }
}

function nextZekr() {
    const data = azkarData[currentCategory];
    if (currentIndex < data.length - 1) {
        currentIndex++;
        loadZekr();
    }
}

function prevZekr() {
    if (currentIndex > 0) {
        currentIndex--;
        loadZekr();
    }
}

function copyZekr() {
    navigator.clipboard.writeText(document.getElementById('zekrText').textContent);
    alert('تم نسخ الذكر بنجاح!');
}

// القرآن الكريم API
async function loadSurahs() {
    const list = document.getElementById('surahList');
    list.innerHTML = 'جاري تحميل السور...';

    try {
        const response = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await response.json();
        list.innerHTML = '';

        data.data.forEach(surah => {
            const item = document.createElement('div');
            item.className = 'surah-item';
            item.innerHTML = `<strong>${surah.number}. ${surah.name}</strong>`;
            item.onclick = () => loadSurahContent(surah.number, surah.name);
            list.appendChild(item);
        });
    } catch (e) {
        list.innerHTML = 'حدث خطأ أثناء تحميل السور، يرجى التأكد من الاتصال بالإنترنت.';
    }
}

async function loadSurahContent(number, name) {
    document.getElementById('surahTitle').textContent = name;
    document.getElementById('surahContent').textContent = 'جاري جلب الآيات...';
    document.getElementById('quranModal').style.display = 'flex';

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}`);
        const data = await response.json();
        
        let fullText = "";
        data.data.ayahs.forEach(ayah => {
            fullText += `${ayah.text} ﴿${ayah.numberInSurah}﴾ `;
        });

        document.getElementById('surahContent').textContent = fullText;
    } catch (e) {
        document.getElementById('surahContent').textContent = 'عذرًا، حدث خطأ في جلب النص.';
    }
}

function closeQuran() {
    document.getElementById('quranModal').style.display = 'none';
}

function filterSurahs() {
    const input = document.getElementById('surahSearch').value.toLowerCase();
    document.querySelectorAll('.surah-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(input) ? 'block' : 'none';
    });
}

// البوصلة
function initCompass() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', e => {
            if (e.alpha !== null) {
                document.getElementById('compassArrow').style.transform = `rotate(${e.alpha}deg)`;
                document.getElementById('compassStatus').textContent = `الاتجاه: ${Math.round(e.alpha)}°`;
            }
        });
    } else {
        document.getElementById('compassStatus').textContent = "خاصية الاتجاه غير مدعومة مباشرة هنا.";
    }
}

// المسبحة
function incrementMasbaha() {
    masbahaCount++;
    document.getElementById('counterDisplay').textContent = masbahaCount;
}

function resetMasbaha() {
    masbahaCount = 0;
    document.getElementById('counterDisplay').textContent = masbahaCount;
}

// تشغيل جلب السور فور الفتح
loadSurahs();