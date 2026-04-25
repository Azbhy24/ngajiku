import type {Highlight, ModuleCard, Phase, Spotlight, StatCard} from '../types/domain';

export const appHighlights: Highlight[] = [
  {
    title: 'Kurikulum Qurani',
    description: "Mutaba'ah, tahfidz, iqra, dan adab jadi inti proses belajar.",
  },
  {
    title: 'Komunikasi Wali',
    description: 'Setiap progres anak nanti bisa diteruskan ke wali dengan alur yang jelas.',
  },
  {
    title: 'Operasional Ringan',
    description: 'Didesain mobile-first agar ustadz dan pengurus tetap nyaman dari HP.',
  },
];

export const dashboardStats: StatCard[] = [
  {
    label: 'Modul prioritas',
    value: '6',
    badge: 'V1',
    badgeClass: 'bg-emerald-50 text-emerald-700',
    caption: 'Santri, wali, absensi, mutaba\'ah, hafalan, dan materi jadi fondasi awal.',
  },
  {
    label: 'Role sistem',
    value: '4',
    badge: 'Akses',
    badgeClass: 'bg-sky-50 text-sky-700',
    caption: 'Admin, ustadz, wali, dan santri akan dipisah hak aksesnya.',
  },
  {
    label: 'Jalur belajar',
    value: '3',
    badge: 'Quran',
    badgeClass: 'bg-violet-50 text-violet-700',
    caption: 'Iqra, tilawah Al-Qur\'an, dan tahfidz bisa dicatat terpisah.',
  },
  {
    label: 'Target platform',
    value: 'HP',
    badge: 'Mobile',
    badgeClass: 'bg-amber-50 text-amber-700',
    caption: 'UI baru diprioritaskan nyaman dibuka dari ponsel guru dan wali.',
  },
];

export const moduleCards: ModuleCard[] = [
  {
    title: 'Santri & Wali',
    summary: 'Master data anak, wali, relasi keluarga, status aktif, dan kelompok belajar.',
    status: 'Wajib',
    statusClass: 'bg-emerald-50 text-emerald-700',
    items: ['Profil santri', 'Profil wali', 'Kontak WhatsApp', 'Status aktif', 'Kelompok'],
  },
  {
    title: 'Absensi',
    summary: 'Pencatatan hadir, izin, sakit, alpa, keterlambatan, dan rekap bulanan.',
    status: 'Wajib',
    statusClass: 'bg-emerald-50 text-emerald-700',
    items: ['Check-in', 'Rekap bulanan', 'Riwayat sesi', 'Catatan hadir'],
  },
  {
    title: "Mutaba'ah",
    summary: 'Ibadah harian, adab, tilawah, murajaah, sedekah, dan catatan karakter.',
    status: 'Wajib',
    statusClass: 'bg-emerald-50 text-emerald-700',
    items: ['Sholat', 'Tilawah', 'Murajaah', 'Adab', 'Catatan ustadz'],
  },
  {
    title: 'Hafalan & Iqra',
    summary: 'Tracking surah, ayat, jilid, halaman, tajwid, dan evaluasi kelancaran.',
    status: 'Wajib',
    statusClass: 'bg-emerald-50 text-emerald-700',
    items: ['Jilid Iqra', 'Surah terakhir', 'Ayat terakhir', 'Murajaah', 'Tajwid'],
  },
  {
    title: 'Materi & Audio',
    summary: 'Pusat materi untuk audio talqin, video, PDF, dan tautan belajar rumah.',
    status: 'Tahap 2',
    statusClass: 'bg-sky-50 text-sky-700',
    items: ['Audio ustadz', 'Video', 'PDF', 'Tag kelas', 'Filter program'],
  },
  {
    title: 'Reward & Leaderboard',
    summary: 'Poin kehadiran, badge hafalan, papan peringkat, dan penukaran hadiah.',
    status: 'Tahap 2',
    statusClass: 'bg-amber-50 text-amber-700',
    items: ['Poin', 'Badge', 'Peringkat', 'Redeem hadiah'],
  },
];

export const studentSpotlights: Spotlight[] = [
  {
    name: 'Aisyah Rahma',
    track: 'Tahfidz Juz 30',
    progress: 'An-Naba 1-20',
    note: 'Butuh penguatan murajaah selepas Maghrib dan audio tajwid pendek untuk wali.',
    percent: '72%',
  },
  {
    name: 'Fahri Akbar',
    track: 'Iqra Jilid 4',
    progress: 'Halaman 18',
    note: 'Sudah lancar makhraj dasar, berikutnya fokus panjang-pendek dan disiplin hadir.',
    percent: '58%',
  },
];

export const developmentPhases: Phase[] = [
  {
    title: 'Rombak fondasi React',
    summary: 'Mengeluarkan logika dari file HTML besar ke modul React, tipe data, dan service terpisah.',
    scope: 'Sekarang',
  },
  {
    title: 'Schema inti Firebase',
    summary: 'Menata koleksi untuk santri, wali, kelas, ustadz, absensi, mutaba\'ah, dan hafalan.',
    scope: 'Berikutnya',
  },
  {
    title: 'Migrasi modul wajib',
    summary: 'Memindahkan fitur lama yang masih relevan ke modul baru tanpa membawa utang struktur lama.',
    scope: 'V1',
  },
  {
    title: 'Laporan & komunikasi',
    summary: 'Sesudah alur inti stabil, baru masuk ke PDF formal, notifikasi, dan integrasi WhatsApp.',
    scope: 'V2',
  },
];
