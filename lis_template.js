/**
 * Script Validasi Lisensi Template - Client Side
 * Menghubungkan ke Google Apps Script API (Google Sheet Database)
 * Jika domain tidak terdaftar atau tidak aktif, dialihkan ke halaman peringatan developer.
 */

(function() {
    // URL Web App Google Apps Script Anda
    var apiUrl = "https://script.google.com/macros/s/AKfycbwa7CAOT1gnc8jUMgrKxyH9CGdu7Ul0tQiWxcWa3Mt9e1X3ewliDThebnNOysK0RCVF/exec"; 
    
    // Mendapatkan nama domain dari website client yang sedang dibuka
    var currentDomain = window.location.hostname;

    // Lakukan permintaan fetch ke server API Google Sheet
    fetch(apiUrl + "?domain=" + encodeURIComponent(currentDomain))
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Jika status false (domain tidak terdaftar / tidak aktif)
            if (!data.status) {
                // Alihkan (redirect) paksa ke halaman peringatan developer
                window.location.href = "https://gosmartstore.blogspot.com/p/peringatan-lisensi.html";
            }
        })
        .catch(function(error) {
            // Tindakan pengaman jika koneksi ke server Google terputus total
            console.error("Gagal memvalidasi lisensi:", error);
        });
})();
