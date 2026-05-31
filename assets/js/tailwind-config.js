// File konfigurasi tema Tailwind (Warna & Font)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',   // Biru utama
                secondary: '#1e40af', // Biru gelap
                accent: '#f59e0b',    // Kuning/orange untuk aksen
                dark: '#111827',      // Warna teks/background gelap
                light: '#f9fafb',     // Warna background terang
            },
            fontFamily: {
                sans: ['"Inter Display"', 'sans-serif'],
                display: ['"PP Neue Montreal"', 'sans-serif'],
            }
        }
    }
}