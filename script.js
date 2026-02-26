// SERVICE WORKER REGISTRATION
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("PWA Active"))
    .catch(err => console.log("PWA Error", err));
}


// DAFTAR STATUS MODUL (Ubah 'active' jadi 'maintenance' untuk menonaktifkan tombol tertentu)
const MODUL_STATUS = {
    "admin": "active",
    "maintenance": "active", // Contoh: Modul ini sedang diperbaiki
    "she": "nonactive",
    "finance": "nonactive",
    "system": "nonactive",
    "develop": "nonactive"
};

const STATUS_PORTAL = "active"; // Ganti jadi "nonactive" untuk menutup akses

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
