RECORD OT 2026 - versi pribadi dengan login sederhana

FILE:
- login.html : halaman login
- index.html : aplikasi utama
- README.txt : panduan

LOGIN AWAL:
Username: admin
Password: ot2026!

PENTING:
Login ini hanya penghalang sederhana berbasis browser. GitHub Pages merupakan hosting publik dan JavaScript dapat dilihat/dilewati oleh orang yang memahami web. Jangan mengandalkan login ini untuk data sangat rahasia atau pada perangkat bersama. Data lembur tersimpan pada localStorage browser dan TIDAK otomatis pindah antar-browser/perangkat. Unduh backup JSON secara berkala. Jangan hapus data situs sebelum backup.

GITHUB PAGES:
1. Ekstrak ZIP.
2. Di repository GitHub yang sudah Anda gunakan, upload/ganti index.html dan tambahkan login.html pada folder utama (root).
3. Commit changes.
4. Buka Settings > Pages.
5. Pada Build and deployment pilih Deploy from a branch.
6. Branch: main; folder: /(root); klik Save.
7. Buka URL Pages. Jika langsung membuka index.html tanpa login, aplikasi mengarahkan ke login.html.
8. Login awal admin / ot2026!, lalu buka Pengaturan dan ganti username/password.
9. Lakukan uji coba dengan data dummy, unduh backup JSON.

KETERBATASAN:
- Data workbook asli belum diimpor.
- Pemetaan unit TUL dan formula pajak adalah placeholder awal; perlu divalidasi terhadap rumus Excel asli.
- localStorage hanya ada di browser/perangkat tersebut.
