# Panduan Singkat APK NgajiKu

Project ini sekarang disiapkan untuk 3 bentuk:

- web online
- PWA
- APK Android

## Jalur Kerja

Urutan paling aman:

1. Edit project
2. Build project
3. Sync ke Android wrapper
4. Buka Android Studio
5. Build APK

## Perintah Penting

Di folder project `NgajiKu`:

- `npm.cmd run build`
- `npm.cmd run cap:sync`
- `npm.cmd run android`

## Arti Perintah

- `build`
  Membuat hasil web terbaru ke folder `dist`
- `cap:sync`
  Mengirim hasil web terbaru ke project Android
- `android`
  Membuka wrapper Android di Android Studio

## App ID Saat Ini

Saat ini dipakai:

- `com.azbhy.ngajiku`

Kalau nanti ingin ganti nama package Android, bisa kita ubah.

## Catatan Penting

Kalau suatu hari nanti kamu ingin APK versi terbaru:

1. kita update kodenya
2. jalankan build lagi
3. jalankan sync lagi
4. export APK lagi

Jadi tidak perlu bikin ulang project dari nol.

