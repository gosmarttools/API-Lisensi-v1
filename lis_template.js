(function() {
    var apiUrl = "https://script.google.com/macros/s/AKfycbwa7CAOT1gnc8jUMgrKxyH9CGdu7Ul0tQiWxcWa3Mt9e1X3ewliDThebnNOysK0RCVF/exec"; 
    var currentDomain = window.location.hostname;

    fetch(apiUrl + "?domain=" + encodeURIComponent(currentDomain))
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (!data.status) {
                document.open();
                document.write(
                    '<div style="background:#000; color:#fff; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:monospace; text-align:center; padding:20px;">' +
                    '<h1 style="color:#ff4d4d; font-size:24px;">PEMBERITAHUAN: LISENSI TIDAK VALID</h1>' +
                    '<p>Domain <b>' + currentDomain + '</b> tidak memiliki izin resmi atau lisensi telah kedaluwarsa.</p>' +
                    '<p style="font-size:12px; color:#888;">Silakan hubungi pembuat template untuk mendapatkan lisensi resmi.</p>' +
                    '</div>'
                );
                document.close();
            }
        })
        .catch(function(error) {
            console.error("Gagal memvalidasi lisensi:", error);
        });
})();