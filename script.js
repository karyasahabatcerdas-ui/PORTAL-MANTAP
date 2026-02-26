// SERVICE WORKER REGISTRATION
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("PWA Active"))
    .catch(err => console.log("PWA Error", err));
}


// DAFTAR STATUS MODUL (Ubah 'active' jadi 'maintenance' untuk menonaktifkan tombol tertentu)
const MODUL_STATUS = {
    "admin": "maintenance",
    "maintenance": "active", // Contoh: Modul ini sedang diperbaiki
    "she": "maintenance",
    "finance": "maintenance",
    "system": "maintenance",
    "develop": "maintenance"
};

// Deteksi Perangkat
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function navigasi(modulKey, targetDevice, url) {
    // 1. Cek apakah modul tersebut aktif atau maintenance
    if (MODUL_STATUS[modulKey] !== "active") {
        alert("⚠️ MODUL SEDANG MAINTENANCE\nMaaf, modul " + modulKey.toUpperCase() + " saat ini sedang tidak dapat diakses untuk sementara waktu.");
        return; // Berhenti di sini, jangan redirect
    }

    // 2. Cek Kesesuaian Perangkat
    if (targetDevice === 'desktop' && isMobile) {
        alert("💻 KHUSUS DESKTOP\nModul ini hanya bisa diakses via Komputer/Laptop.");
    } 
    else if (targetDevice === 'mobile' && !isMobile) {
        alert("📱 KHUSUS MOBILE\nModul ini hanya tersedia untuk perangkat Smartphone.");
    } 
    else {
        // Jika status ACTIVE dan PERANGKAT COCOK, barulah pindah halaman
        window.location.href = url;
    }
}

// 1. LOGIKA TEMA
function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('portal_theme', themeName);
}

// Cek tema yang tersimpan saat halaman dimuat
window.onload = () => {
    const savedTheme = localStorage.getItem('portal_theme') || 'light';
    setTheme(savedTheme);
};

// Deteksi apakah user pakai HP atau bukan
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// 3. LOGIKA NAVIGASI
function navigasi(modulKey, targetDevice, url) {
    // 1. Cek apakah modul tersebut aktif atau maintenance
    if (MODUL_STATUS[modulKey] !== "active") {
        alert("⚠️ MODUL SEDANG MAINTENANCE\nMaaf, modul " + modulKey.toUpperCase() + " saat ini sedang tidak dapat diakses untuk sementara waktu.");
        return; // Berhenti di sini, jangan redirect
    }

    // 2. Cek Kesesuaian Perangkat
    if (targetDevice === 'desktop' && isMobile) {
        alert("💻 KHUSUS DESKTOP\nModul ini hanya bisa diakses via Komputer/Laptop.");
    } 
    else if (targetDevice === 'mobile' && !isMobile) {
        alert("📱 KHUSUS MOBILE\nModul ini hanya tersedia untuk perangkat Smartphone.");
    } 
    else {
        // Jika status ACTIVE dan PERANGKAT COCOK, barulah pindah halaman
        window.location.href = url;
    }
}

// VARIABEL STATUS PORTAL
const STATUS_PORTAL = "nonactive"; // Ganti jadi "nonactive" untuk menutup akses

window.onload = () => {
    // Cek Status Portal
    if (STATUS_PORTAL !== "active") {
        window.location.href = "maintenance.html"; // Kirim user ke halaman peringatan
        return;
    }

    const savedTheme = localStorage.getItem('portal_theme') || 'light';
    setTheme(savedTheme);
};
