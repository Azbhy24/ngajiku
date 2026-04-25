import {BookOpen, CalendarCheck2, Crown, HeartHandshake, Mic2, ShieldCheck, Sparkles, Users} from 'lucide-react';
import {appHighlights, dashboardStats, developmentPhases, moduleCards, studentSpotlights} from './data/demo-data';

const quickAccess = [
  {label: 'Santri', icon: Users, tone: 'from-emerald-500 to-teal-500'},
  {label: 'Wali', icon: HeartHandshake, tone: 'from-sky-500 to-cyan-500'},
  {label: 'Absensi', icon: CalendarCheck2, tone: 'from-amber-500 to-orange-500'},
  {label: 'Hafalan', icon: BookOpen, tone: 'from-indigo-500 to-violet-500'},
];

function App() {
  return (
    <div className="min-h-screen bg-[var(--app-bg)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="glass-panel sticky top-4 z-20 mb-6 overflow-hidden rounded-[28px] px-5 py-4 sm:px-6">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.22),_transparent_65%)]" />
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/20">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
                  Blueprint TPQ System
                </p>
                <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">NgajiKu Next</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Fondasi baru untuk sistem manajemen TPQ dan masjid yang fokus pada Qur&apos;an, adab,
                  mutaba&apos;ah, dan pelaporan wali.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex">
              {quickAccess.map(({label, icon: Icon, tone}) => (
                <button
                  key={label}
                  type="button"
                  className={`rounded-[20px] bg-gradient-to-br ${tone} px-4 py-3 text-left text-white shadow-lg shadow-slate-900/10 transition-transform duration-200 hover:-translate-y-0.5`}
                >
                  <Icon className="mb-2 h-5 w-5" />
                  <span className="block text-xs font-bold uppercase tracking-[0.2em]">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <section className="space-y-6">
            <div className="hero-card overflow-hidden rounded-[36px] p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-50">
                    <Sparkles className="h-4 w-4" />
                    Tahap Rombak Sistem
                  </div>
                  <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                    Mobile-first untuk santri, ustadz, dan wali dalam satu alur.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/90 sm:text-base">
                    Fokus tahap ini adalah membangun kerangka modular agar modul wajib seperti santri,
                    wali, absensi, mutaba&apos;ah, dan hafalan bisa ditumbuhkan pelan-pelan tanpa kembali
                    ke file tunggal yang berat dirawat.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {appHighlights.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-white/14 bg-white/10 p-4 backdrop-blur-md">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 rounded-[30px] bg-slate-950/24 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100/75">
                        Fokus V1
                      </p>
                      <h3 className="mt-2 text-xl font-black text-white">Tiga modul wajib</h3>
                    </div>
                    <ShieldCheck className="h-10 w-10 text-emerald-100" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {moduleCards.slice(0, 3).map((module) => (
                      <div key={module.title} className="rounded-[24px] bg-white/10 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-bold text-white">{module.title}</p>
                            <p className="mt-1 text-xs leading-5 text-emerald-50/80">{module.summary}</p>
                          </div>
                          <span className="rounded-full bg-white/14 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                            {module.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardStats.map((stat) => (
                <article key={stat.label} className="surface-card rounded-[28px] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {stat.label}
                    </p>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${stat.badgeClass}`}>
                      {stat.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.caption}</p>
                </article>
              ))}
            </div>

            <section className="surface-card rounded-[32px] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Modul Sistem</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight">Peta modul TPQ yang akan kita bangun</h2>
                </div>
                <Crown className="hidden h-10 w-10 text-amber-500 sm:block" />
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                {moduleCards.map((module) => (
                  <article key={module.title} className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-black tracking-tight text-slate-900">{module.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{module.summary}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${module.statusClass}`}>
                        {module.status}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-2 text-[11px] font-semibold tracking-[0.04em] text-slate-700 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="surface-card rounded-[32px] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <Mic2 className="h-8 w-8 text-sky-600" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Media Center</p>
                    <h2 className="text-2xl font-black tracking-tight">Contoh alur konten ustadz</h2>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {studentSpotlights.map((spotlight) => (
                    <article
                      key={spotlight.name}
                      className="rounded-[26px] border border-sky-100 bg-gradient-to-r from-white to-sky-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-black text-slate-900">{spotlight.name}</h3>
                          <p className="mt-1 text-sm font-semibold text-sky-700">{spotlight.track}</p>
                        </div>
                        <span className="rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                          {spotlight.progress}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{spotlight.note}</p>
                      <div className="mt-4">
                        <div className="h-2 overflow-hidden rounded-full bg-sky-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                            style={{width: spotlight.percent}}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          <span>Mutaba&apos;ah pekan ini</span>
                          <span>{spotlight.percent}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-[32px] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Roadmap</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Urutan implementasi aman</h2>

                <div className="mt-6 space-y-4">
                  {developmentPhases.map((phase, index) => (
                    <article key={phase.title} className="relative rounded-[26px] border border-slate-200 bg-white p-5">
                      <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">
                        {index + 1}
                      </div>
                      <div className="pl-12">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-black tracking-tight text-slate-900">{phase.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{phase.summary}</p>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                            {phase.scope}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </section>

          <aside className="space-y-6">
            <section className="surface-card rounded-[32px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Checklist Wajib</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">Yang kita kunci lebih dulu</h2>
              <ul className="mt-5 space-y-3">
                {[
                  'Schema inti santri, wali, kelas, dan ustadz',
                  'Absensi harian dan rekap kehadiran',
                  "Mutaba'ah ibadah dan adab",
                  'Tracking Iqra, tahfidz, dan murajaah',
                  'Materi audio, PDF, dan video',
                  'Riwayat notifikasi ke wali',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-[22px] bg-slate-50 px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="surface-card rounded-[32px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Peran Pengguna</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">Hak akses yang sehat</h2>
              <div className="mt-5 grid gap-3">
                {[
                  {role: 'Admin', text: 'Mengelola setting, master data, dan kebijakan reward.'},
                  {role: 'Ustadz', text: 'Mencatat absensi, mutaba\'ah, hafalan, dan materi.'},
                  {role: 'Wali', text: 'Melihat progres, pengumuman, dan laporan anak.'},
                  {role: 'Santri', text: 'Melihat progres pribadi, materi, dan target hafalan.'},
                ].map((entry) => (
                  <article key={entry.role} className="rounded-[24px] border border-slate-200 bg-white p-4">
                    <p className="text-sm font-black tracking-tight text-slate-900">{entry.role}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{entry.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface-card rounded-[32px] bg-slate-950 p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">Catatan Arsitektur</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">Prinsip implementasi</h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-200">
                <p>Frontend akan dipisah per modul, bukan lagi satu file besar.</p>
                <p>Data profil, histori, dan laporan disimpan dalam koleksi terpisah agar audit lebih rapi.</p>
                <p>Integrasi WhatsApp dan PDF masuk setelah alur inti belajar sudah stabil.</p>
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
