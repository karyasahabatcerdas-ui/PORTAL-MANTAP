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

// 2. DETEKSI PERANGKAT
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// 3. LOGIKA NAVIGASI
function navigasi(tipe, url) {
    if (tipe === 'desktop' && isMobile) {
        alert("⚠️ MODUL KHUSUS DESKTOP\nSilakan gunakan Laptop/PC untuk membuka modul ini.");
    } else if (tipe === 'mobile' && !isMobile) {
        alert("⚠️ MODUL KHUSUS MOBILE\nSilakan buka link ini melalui Smartphone Anda.");
    } else {
        // Efek loading sederhana sebelum pindah halaman
        document.body.style.opacity = "0.5";
        window.location.href = url;
    }
}
