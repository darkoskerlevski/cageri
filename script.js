/* ============================
   Data
   ============================ */
const cageriData = {
    "Ponedelnik": {
        "00:00": "Те сака", "01:01": "Време е да решите", "02:02": "Некој ќе ти се јави",
        "03:03": "Поглед во четири очи", "04:04": "Љубоморен е", "05:05": "Ќе бидеш среќна",
        "06:06": "Те мисли", "07:07": "Очекувај порака", "08:08": "Нова љубов",
        "09:09": "Некој те посакува", "10:10": "Плав дечко те мисли", "11:11": "Бакнеж",
        "12:12": "Состанок", "13:13": "Те сака црн дечко", "14:14": "Љубов на повидок",
        "15:15": "Ќе се скарате", "16:16": "Верност", "17:17": "Среќа во љубовта",
        "18:18": "Долго ќе бидете заедно", "19:19": "Те лаже", "20:20": "Ќе ти се пушта",
        "21:21": "Ти си му се", "22:22": "Не може без тебе", "23:23": "Те сонува"
    },
    "Vtornik": {
        "00:00": "Ќе се фатите", "01:01": "Сака усни твои", "02:02": "Не може без тебе",
        "03:03": "Сака да е со тебе", "04:04": "Крај е на се", "05:05": "Те обожава",
        "06:06": "Ќе ти се јави", "07:07": "Нова љубов", "08:08": "Мисли на тебе",
        "09:09": "Љубомори", "10:10": "Му се допаѓаш", "11:11": "Се би сторил за тебе",
        "12:12": "Изненадувања", "13:13": "Ќе ти се пушти", "14:14": "Ќе те прегрне",
        "15:15": "Лудо заљубен", "16:16": "Те мрази", "17:17": "Ќе се скарате",
        "18:18": "Ќе се видите", "19:19": "Те лаже", "20:20": "Сака пак да си со него",
        "21:21": "Те сака повеќе од се", "22:22": "Ќе те баци", "23:23": "Не може без тебе"
    },
    "Sreda": {
        "00:00": "Замисли желба", "01:01": "Те мисли", "02:02": "Ќе се фатиш",
        "03:03": "Ќе раскинете", "04:04": "Те свиѓа", "05:05": "Те сака",
        "06:06": "Те мисли плав дечко", "07:07": "Некој ви се меша", "08:08": "Бакнеж",
        "09:09": "Љубоморен", "10:10": "Ќе се муваш", "11:11": "Другар му те свиѓа",
        "12:12": "Понуда од плав дечко", "13:13": "Мисли на тебе", "14:14": "Крие дека те сака",
        "15:15": "Чека прв чекор", "16:16": "Понуда од црн дечко", "17:17": "Ќе останете другари",
        "18:18": "Сака друга", "19:19": "Добра врска", "20:20": "Корпа",
        "21:21": "Нова врска", "22:22": "Среќна си", "23:23": "Ти си му во срцето"
    },
    "Cetvrtok": {
        "00:00": "Ќе ти се исполни желбата", "01:01": "Наскоро среќа", "02:02": "Ќе го видиш",
        "03:03": "Ќе те бакне", "04:04": "Разочаран е", "05:05": "Те сонува",
        "06:06": "Авантура", "07:07": "Цел ден среќа", "08:08": "Другар му ќе ти се пушта",
        "09:09": "Писмо", "10:10": "Разговор", "11:11": "Заедно ќе бидете",
        "12:12": "Постојано си му во мисли", "13:13": "Сака нешто посебно",
        "14:14": "Ќе ти признае љубов", "15:15": "Големи шанси", "16:16": "Порака наскоро",
        "17:17": "Му се допаѓа на другар му", "18:18": "Изненадна среќа",
        "19:19": "Ќе каже те сакам", "20:20": "Остави го", "21:21": "Ќе ти се пушта",
        "22:22": "Му се свиѓаш", "23:23": "Се опива за тебе"
    },
    "Petok": {
        "00:00": "Ќе ти се пушта", "01:01": "Те сака само тебе", "02:02": "Љубов",
        "03:03": "Некој те мисли", "04:04": "Не може без тебе", "05:05": "Ќе се скарате",
        "06:06": "Те лаже", "07:07": "Среќен ден", "08:08": "Порака",
        "09:09": "Те обожава", "10:10": "Ќе те бакне", "11:11": "Мисли на тебе",
        "12:12": "Нова љубов", "13:13": "Те мисли", "14:14": "Ќе се смирите",
        "15:15": "Те сака црн дечко", "16:16": "Ќе се видите", "17:17": "Бакнеж",
        "18:18": "Љубоморен е", "19:19": "Среќа", "20:20": "Признание",
        "21:21": "Те сака многу", "22:22": "Ќе се фатите", "23:23": "Мисли на тебе"
    },
    "Vikend": {
        "00:00": "Те мисли", "01:01": "Кавга", "02:02": "Љубоморен",
        "03:03": "Му се допаѓаш", "04:04": "Изненадување", "05:05": "Те сака",
        "06:06": "Средба", "07:07": "Бакнеж", "08:08": "Среќа",
        "09:09": "Те обожава", "10:10": "Повик", "11:11": "Те сонува",
        "12:12": "Состанок", "13:13": "Признание", "14:14": "Те сака",
        "15:15": "Сака да те види", "16:16": "Авантура", "17:17": "Среќа",
        "18:18": "Пуштање", "19:19": "Те обожава", "20:20": "Мисли на тебе",
        "21:21": "Љубов", "22:22": "Те сака многу", "23:23": "Не може без тебе"
    }
};

const daysMk = {
    "Ponedelnik": "Пон", "Vtornik": "Вто", "Sreda": "Сре",
    "Cetvrtok": "Чет", "Petok": "Пет", "Vikend": "Викенд"
};

const daysMkFull = {
    "Ponedelnik": "Понеделник", "Vtornik": "Вторник", "Sreda": "Среда",
    "Cetvrtok": "Четврток", "Petok": "Петок", "Vikend": "Викенд"
};

/* ============================
   State
   ============================ */
let selectedDay = getCurrentDayKey();
let lastActiveTime = null;

/* ============================
   Helpers
   ============================ */
function getCurrentDayKey() {
    const day = new Date().getDay();
    if (day === 1) return "Ponedelnik";
    if (day === 2) return "Vtornik";
    if (day === 3) return "Sreda";
    if (day === 4) return "Cetvrtok";
    if (day === 5) return "Petok";
    return "Vikend";
}

function padTwo(n) {
    return String(n).padStart(2, '0');
}

function computeCountdown(nextTimeStr, now) {
    const [h, m] = nextTimeStr.split(':').map(Number);
    const next = new Date(now);
    next.setHours(h, m, 0, 0);

    let diffMs = next - now;
    if (diffMs <= 0) {
        // Day rollover
        next.setDate(next.getDate() + 1);
        diffMs = next - now;
    }

    const totalSecs = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    if (hours >= 1) return `за ${hours} ч ${mins} мин`;
    if (mins >= 1)  return `за ${mins} мин ${secs} сек`;
    return `за ${secs} сек`;
}

/* ============================
   Dark Mode
   ============================ */
function initDarkMode() {
    const saved = localStorage.getItem('cageri_theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
    updateDarkToggleIcon();

    // Track system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem('cageri_theme')) {
            updateDarkToggleIcon();
        }
    });
}

function toggleDarkMode() {
    const current = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = current === 'dark' || (!current && prefersDark);
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cageri_theme', newTheme);
    updateDarkToggleIcon();
}

function updateDarkToggleIcon() {
    const current = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = current === 'dark' || (!current && prefersDark);
    const btn = document.getElementById('dark-toggle');
    if (btn) {
        btn.textContent = isDark ? '☀️' : '🌙';
        btn.setAttribute('aria-label', isDark ? 'Светла тема' : 'Темна тема');
    }
}

/* ============================
   Tab Navigation
   ============================ */
function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
    });

    const section = document.getElementById(id);
    section.classList.add('active');
    section.removeAttribute('aria-hidden');

    if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
    }

    if (id === 'schedule') renderList();
    if (id === 'favorites') renderFavorites();
}

/* ============================
   Clock & Home Screen
   ============================ */
function updateClock() {
    const now = new Date();
    const h = padTwo(now.getHours());
    const m = padTwo(now.getMinutes());
    const s = padTwo(now.getSeconds());
    const timeKey = `${h}:${m}`;
    const currentDayKey = getCurrentDayKey();
    const dayData = cageriData[currentDayKey];

    document.getElementById('real-time-clock').textContent = `${h}:${m}:${s}`;
    document.getElementById('current-date').textContent = now.toLocaleDateString('mk-MK', {
        weekday: 'long', day: 'numeric', month: 'long'
    });

    // Prev / Next logic
    const times = Object.keys(dayData);
    const currentInMins = now.getHours() * 60 + now.getMinutes();

    let prevTime = times[times.length - 1];
    let nextTime = times[0];

    for (let i = 0; i < times.length; i++) {
        const [th, tm] = times[i].split(':').map(Number);
        const mins = th * 60 + tm;
        if (mins < currentInMins) prevTime = times[i];
        if (mins > currentInMins) {
            nextTime = times[i];
            break;
        }
    }

    // Active cager
    const isActive = Boolean(dayData[timeKey]);
    renderActiveInfo(isActive, timeKey, nextTime, currentDayKey, dayData, now);

    // Countdown
    const countdownEl = document.getElementById('countdown-display');
    if (countdownEl) {
        countdownEl.textContent = `⏱ Следен цагер ${computeCountdown(nextTime, now)}`;
    }

    // Prev / Next boxes
    document.getElementById('prev-cager-content').innerHTML =
        `<span class="rel-time">${prevTime}</span><span class="rel-text">${dayData[prevTime]}</span>`;
    document.getElementById('next-cager-content').innerHTML =
        `<span class="rel-time">${nextTime}</span><span class="rel-text">${dayData[nextTime]}</span>`;
}

function renderActiveInfo(isActive, timeKey, nextTime, dayKey, dayData, now) {
    const box = document.getElementById('active-info');

    if (isActive) {
        const meaning = dayData[timeKey];

        // Pulse animation on new active cager
        if (lastActiveTime !== timeKey) {
            lastActiveTime = timeKey;
            box.classList.remove('pulse');
            void box.offsetWidth; // force reflow to reset CSS animation
            box.classList.add('pulse');
        }

        box.innerHTML = `
            <h3 style="color:var(--accent); margin-bottom:8px;">АКТИВЕН ЦАГЕР! ✨</h3>
            <p style="font-size:1.25rem; font-weight:800; margin-bottom:4px;">${timeKey}</p>
            <p style="font-size:1rem; color:var(--text); margin-bottom:10px;">${meaning}</p>
            <button class="share-btn" data-share-time="${timeKey}" data-share-meaning="${meaning.replace(/"/g, '&quot;')}" data-share-day="${dayKey}" aria-label="Сподели го овој цагер">
                📤 Сподели
            </button>`;
    } else {
        lastActiveTime = null;

        box.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">🕰️</span>
                <h3>Нема активен цагер</h3>
                <p>Следниот цагер доаѓа наскоро ✨</p>
                <div class="empty-next-preview">
                    <div class="next-time">${nextTime}</div>
                    <div class="next-meaning">${dayData[nextTime]}</div>
                    <button class="share-btn" data-share-time="${nextTime}" data-share-meaning="${dayData[nextTime].replace(/"/g, '&quot;')}" data-share-day="${dayKey}" aria-label="Сподели го следниот цагер">
                        📤 Сподели
                    </button>
                </div>
            </div>`;
    }
}

/* ============================
   Schedule / List View
   ============================ */
function initSchedule() {
    const selector = document.getElementById('day-selector');
    Object.keys(daysMk).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `day-btn${key === selectedDay ? ' selected' : ''}`;
        btn.textContent = daysMk[key];
        btn.setAttribute('aria-label', daysMkFull[key]);
        btn.addEventListener('click', () => {
            selectedDay = key;
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            renderList();
        });
        selector.appendChild(btn);
    });
    renderList();
}

function renderList() {
    const container = document.getElementById('cager-list-container');
    container.innerHTML = '';
    const data = cageriData[selectedDay];
    const isToday = selectedDay === getCurrentDayKey();
    const now = new Date();
    const currentInMins = now.getHours() * 60 + now.getMinutes();
    const timeKey = `${padTwo(now.getHours())}:${padTwo(now.getMinutes())}`;

    let activeTime = null;
    let nextTime = null;

    if (isToday) {
        if (data[timeKey]) activeTime = timeKey;
        for (const t of Object.keys(data)) {
            const [th, tm] = t.split(':').map(Number);
            if (th * 60 + tm > currentInMins) { nextTime = t; break; }
        }
    }

    const favs = getFavorites();

    Object.keys(data).forEach(time => {
        const meaning = data[time];
        const isFav = favs.some(f => f.time === time && f.day === selectedDay);
        const isActiveCager = isToday && time === activeTime;
        const isNextCager = isToday && time === nextTime && !activeTime;

        const item = document.createElement('div');
        item.className = 'cager-item';
        if (isActiveCager) item.classList.add('active-highlight');
        else if (isNextCager) item.classList.add('next-highlight');

        let badge = '';
        if (isActiveCager) badge = '<span class="cager-badge badge-active">Активен</span>';
        else if (isNextCager) badge = '<span class="cager-badge badge-next">Следен</span>';

        item.innerHTML = `
            <span class="cager-time">${time}</span>
            <span class="cager-text">${meaning}</span>
            ${badge}
            <div class="cager-actions">
                <button class="icon-btn${isFav ? ' fav-active' : ''}"
                    data-action="fav"
                    data-time="${time}"
                    data-meaning="${meaning.replace(/"/g, '&quot;')}"
                    data-day="${selectedDay}"
                    aria-label="${isFav ? 'Отстрани од омилени' : 'Додади во омилени'}"
                    aria-pressed="${isFav}">${isFav ? '❤️' : '🤍'}</button>
                <button class="icon-btn"
                    data-action="share"
                    data-time="${time}"
                    data-meaning="${meaning.replace(/"/g, '&quot;')}"
                    data-day="${selectedDay}"
                    aria-label="Сподели">📤</button>
            </div>`;

        container.appendChild(item);
    });
}

/* ============================
   Favorites
   ============================ */
function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('cageri_favorites') || '[]');
    } catch {
        return [];
    }
}

function toggleFavorite(time, meaning, day) {
    const favs = getFavorites();
    const idx = favs.findIndex(f => f.time === time && f.day === day);
    if (idx >= 0) {
        favs.splice(idx, 1);
        localStorage.setItem('cageri_favorites', JSON.stringify(favs));
        return false; // removed
    }
    favs.push({ time, meaning, day });
    localStorage.setItem('cageri_favorites', JSON.stringify(favs));
    return true; // added
}

function handleFavToggle(time, meaning, day, btn) {
    const added = toggleFavorite(time, meaning, day);
    if (btn) {
        btn.textContent = added ? '❤️' : '🤍';
        btn.classList.toggle('fav-active', added);
        btn.setAttribute('aria-label', added ? 'Отстрани од омилени' : 'Додади во омилени');
        btn.setAttribute('aria-pressed', String(added));
    }
    showToast(added ? 'Додадено во омилени ❤️' : 'Отстрането од омилени');
}

function renderFavorites() {
    const container = document.getElementById('favorites-container');
    const favs = getFavorites();

    if (favs.length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <span class="fav-empty-icon">🤍</span>
                <h3>Немате омилени цагери</h3>
                <p>Одете во <strong>Листата</strong> и допрете ❤️ покрај некој цагер за да го зачувате.</p>
            </div>`;
        return;
    }

    container.innerHTML = '';
    favs.forEach(({ time, meaning, day }) => {
        const item = document.createElement('div');
        item.className = 'cager-item';
        item.innerHTML = `
            <span class="cager-time">${time}</span>
            <div style="flex-grow:1; min-width:0;">
                <div class="cager-text">${meaning}</div>
                <div class="fav-day-label">${daysMkFull[day] || day}</div>
            </div>
            <div class="cager-actions">
                <button class="icon-btn fav-active"
                    data-action="fav"
                    data-time="${time}"
                    data-meaning="${meaning.replace(/"/g, '&quot;')}"
                    data-day="${day}"
                    aria-label="Отстрани од омилени"
                    aria-pressed="true">❤️</button>
                <button class="icon-btn"
                    data-action="share"
                    data-time="${time}"
                    data-meaning="${meaning.replace(/"/g, '&quot;')}"
                    data-day="${day}"
                    aria-label="Сподели">📤</button>
            </div>`;
        container.appendChild(item);
    });
}

/* ============================
   Share / Copy
   ============================ */
async function shareCager(time, meaning, day) {
    const text = `${time} — ${meaning} (${daysMkFull[day] || day}) | Цагери`;
    const url = window.location.href;

    if (navigator.share) {
        try {
            await navigator.share({ title: 'Цагери', text, url });
            return;
        } catch (e) {
            if (e.name === 'AbortError') return;
        }
    }
    copyToClipboard(text);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('Копирано во клипборд 📋'))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        document.execCommand('copy');
        showToast('Копирано во клипборд 📋');
    } catch {
        showToast('Не може да се копира');
    }
    document.body.removeChild(ta);
}

/* ============================
   Toast
   ============================ */
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ============================
   Event Delegation
   ============================ */
function setupEventDelegation() {
    // Schedule list
    document.getElementById('cager-list-container').addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const { action, time, meaning, day } = btn.dataset;
        if (action === 'fav') handleFavToggle(time, meaning, day, btn);
        if (action === 'share') shareCager(time, meaning, day);
    });

    // Favorites list
    document.getElementById('favorites-container').addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const { action, time, meaning, day } = btn.dataset;
        if (action === 'fav') {
            handleFavToggle(time, meaning, day, btn);
            renderFavorites();
        }
        if (action === 'share') shareCager(time, meaning, day);
    });

    // Active info box (share button rendered dynamically)
    document.getElementById('active-info').addEventListener('click', e => {
        const btn = e.target.closest('[data-share-time]');
        if (!btn) return;
        shareCager(btn.dataset.shareTime, btn.dataset.shareMeaning, btn.dataset.shareDay);
    });
}

/* ============================
   Service Worker
   ============================ */
function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // SW registration is best-effort; silent failure is acceptable
        });
    }
}

/* ============================
   Init
   ============================ */
function init() {
    initDarkMode();
    setupEventDelegation();
    initSchedule();
    updateClock();
    setInterval(updateClock, 1000);
    registerSW();
}

document.addEventListener('DOMContentLoaded', init);
