<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Record OT 2026</title>
    <!-- Menggunakan Tailwind CSS untuk mempermudah styling -->
    <script src="https://tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased">

    <!-- Header / Navbar -->
    <header class="bg-blue-900 text-white p-4 shadow-md">
        <div class="max-w-4xl mx-auto flex justify-between items-center">
            <div>
                <h1 class="text-xl font-bold tracking-wide">Record OT 2026</h1>
                <p class="text-xs text-blue-200 mt-1">Pencatatan lembur, penghasilan, potongan, dan rekap bulanan.</p>
            </div>
            <button class="bg-white text-blue-900 px-4 py-1.5 rounded-lg font-medium text-sm hover:bg-blue-50 transition shadow">Keluar</button>
        </div>
    </header>

    <!-- Main Content Container -->
    <main class="max-w-4xl mx-auto p-4 space-y-4">
        
        <!-- Tab Navigasi -->
        <div class="flex space-x-2 bg-slate-100 p-1 rounded-xl shadow-inner">
            <button id="btn-dashboard" onclick="switchTab('dashboard')" class="flex-1 py-2 text-center rounded-lg text-sm font-semibold transition bg-blue-600 text-white shadow">Dashboard</button>
            <button id="btn-input" onclick="switchTab('input')" class="flex-1 py-2 text-center rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-200 transition">Input Bulanan</button>
            <button id="btn-pengaturan" onclick="switchTab('pengaturan')" class="flex-1 py-2 text-center rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-200 transition">Pengaturan</button>
        </div>

        <!-- Halaman 1: DASHBOARD -->
        <div id="tab-dashboard" class="space-y-4">
            <!-- Grid Ringkasan Ringkasan Ringkas -->
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p class="text-xs text-slate-400 font-medium">Total Bruto Setahun</p>
                    <p id="total-bruto" class="text-lg font-bold text-slate-800 mt-1">Rp0</p>
                </div>
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p class="text-xs text-slate-400 font-medium">Total Netto Setahun</p>
                    <p id="total-netto" class="text-lg font-bold text-slate-800 mt-1">Rp0</p>
                </div>
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p class="text-xs text-slate-400 font-medium">Total Potongan</p>
                    <p id="total-potongan" class="text-lg font-bold text-slate-800 mt-1">Rp0</p>
                </div>
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p class="text-xs text-slate-400 font-medium">Total Unit TUL</p>
                    <p id="total-tul" class="text-lg font-bold text-slate-800 mt-1">0</p>
                </div>
            </div>

            <!-- Rekap per Bulan Table Card -->
            <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 class="text-base font-bold text-slate-800">Rekap per Bulan</h3>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="border-b border-slate-100 text-slate-400 font-semibold">
                                <th class="py-2">Bulan</th>
                                <th class="py-2">Bruto</th>
                                <th class="py-2">Netto</th>
                                <th class="py-2">Potongan</th>
                                <th class="py-2">TUL</th>
                            </tr>
                        </thead>
                        <tbody id="tabel-rekap-body">
                            <!-- Data akan dimuat otomatis lewat JavaScript di sini -->
                        </tbody>
                    </table>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-50">Data disimpan pada browser/perangkat ini saja. Gunakan backup secara berkala.</p>
            </div>
        </div>

        <!-- Halaman 2: INPUT BULANAN (Form untuk mengedit data) -->
        <div id="tab-input" class="hidden bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 class="text-base font-bold text-slate-800">Input / Edit Data Bulanan</h3>
            <form id="form-input" onsubmit="simpanData(event)" class="space-y-3 text-sm">
                <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1">Pilih Bulan</label>
                    <select id="input-bulan" class="w-full p-2 border border-slate-200 rounded-lg focus:outline-blue-500" required>
                        <option value="Januari">Januari</option>
                        <option value="Februari">Februari</option>
                        <option value="Maret">Maret</option>
                        <option value="April">April</option>
                        <option value="Mei">Mei</option>
                        <option value="Juni">Juni</option>
                        <option value="Juli">Juli</option>
                        <option value="Agustus">Agustus</option>
                        <option value="September">September</option>
                        <option value="Oktober">Oktober</option>
                        <option value="November">November</option>
                        <option value="Desember">Desember</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1">Pendapatan Bruto (Rp)</label>
                    <input type="number" id="input-bruto" class="w-full p-2 border border-slate-200 rounded-lg focus:outline-blue-500" placeholder="0" required>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1">Pendapatan Netto (Rp)</label>
                    <input type="number" id="input-netto" class="w-full p-2 border border-slate-200 rounded-lg focus:outline-blue-500" placeholder="0" required>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1">Potongan (Rp)</label>
                    <input type="number" id="input-potongan" class="w-full p-2 border border-slate-200 rounded-lg focus:outline-blue-500" placeholder="0" required>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1">Unit TUL</label>
                    <input type="number" id="input-tul" class="w-full p-2 border border-slate-200 rounded-lg focus:outline-blue-500" placeholder="0" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition">Simpan Data</button>
            </form>
        </div>

        <!-- Halaman 3: PENGATURAN -->
        <div id="tab-pengaturan" class="hidden bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <h3 class="text-base font-bold text-slate-800">Pengaturan Aplikasi</h3>
            <p class="text-xs text-slate-500">Fitur untuk manajemen data lokal aplikasi Anda.</p>
            <div class="pt-2">
                <button onclick="hapusSemuaData()" class="bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-red-600 transition">Hapus Semua Data Browser</button>
            </div>
        </div>

    </main>

    <!-- JavaScript Logika & Manajemen Data -->
    <script>
        // Inisialisasi struktur data default jika data lokal kosong
        let recordData = JSON.parse(localStorage.getItem('record_ot_2026')) || {};

        // Fungsi mengganti Tab Halaman
        function switchTab(tabName) {
            const tabs = ['dashboard', 'input', 'pengaturan'];
            tabs.forEach(t => {
                document.getElementById(`tab-${t}`).classList.add('hidden');
                document.getElementById(`btn-${t}`).className = "flex-1 py-2 text-center rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-200 transition";
            });

            // Aktifkan tab yang dipilih
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');
            document.getElementById(`btn-${tabName}`).className = "flex-1 py-2 text-center rounded-lg text-sm font-semibold transition bg-blue-600 text-white shadow";
        }

        // Format angka ke format mata uang Rupiah (IDR)
        function formatRupiah(angka) {
            return 'Rp' + new Intl.NumberFormat('id-ID').format(angka);
        }

        // Fungsi memuat data ke Dashboard dan Tabel
        function hitungDanTampilkanData() {
            let totalBruto = 0;
            let totalNetto = 0;
            let totalPotongan = 0;
            let totalTul = 0;

            const daftarBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const tbody = document.getElementById('tabel-rekap-body');
            tbody.innerHTML = ''; // Kosongkan tabel sebelum di-render ulang

            let adaData = false;

            daftarBulan.forEach(bulan => {
                if (recordData[bulan]) {
                    adaData = true;
                    const data = recordData[bulan];
                    totalBruto += data.bruto;
                    totalNetto += data.netto;
                    totalPotongan += data.potongan;
