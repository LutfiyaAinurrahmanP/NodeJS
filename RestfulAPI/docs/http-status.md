# Daftar Lengkap HTTP Status Code

## Kelas 1xx: Informasi

- **100 Continue**:
  - Server telah menerima header permintaan awal dan klien dapat melanjutkan mengirim body permintaan.
  - Digunakan dalam permintaan yang membutuhkan verifikasi sebelum mengirim data besar.

- **101 Switching Protocols**:
  - Server menyetujui permintaan klien untuk mengubah protokol.
  - Biasa digunakan saat beralih ke WebSocket dari HTTP.

## Kelas 2xx: Sukses

- **200 OK**:
  - Permintaan berhasil diproses dengan sempurna.
  - Respon default untuk permintaan yang berhasil.

- **201 Created**:
  - Permintaan berhasil dan sumber daya baru telah dibuat.
  - Umum digunakan setelah operasi POST yang berhasil.

- **202 Accepted**:
  - Permintaan diterima untuk diproses, tetapi pemrosesan belum selesai.
  - Berguna untuk tugas latar belakang atau antrian.

- **204 No Content**:
  - Server berhasil memproses permintaan, tetapi tidak mengembalikan konten.
  - Sering digunakan untuk operasi seperti DELETE atau UPDATE tanpa perlu respons.

- **206 Partial Content**:
  - Server mengembalikan sebagian konten yang diminta.
  - Digunakan untuk download parsial atau streaming.

## Kelas 3xx: Pengalihan

- **301 Moved Permanently**:
  - Sumber daya telah dipindahkan secara permanen ke URL baru.
  - Mesin pencari akan memperbarui tautan mereka.

- **302 Found**:
  - Sumber daya sementara dialihkan ke URL lain.
  - Klien harus menggunakan URL sementara ini.

- **304 Not Modified**:
  - Sumber daya tidak diubah sejak permintaan terakhir.
  - Membantu menghemat bandwidth dengan caching.

- **307 Temporary Redirect**:
  - Mirip 302, tetapi mengharuskan metode HTTP asli tetap digunakan.
  - Menjaga integritas metode permintaan.

- **308 Permanent Redirect**:
  - Mirip 301, tetapi mengharuskan metode HTTP asli tetap digunakan.

## Kelas 4xx: Kesalahan Klien

- **400 Bad Request**:
  - Permintaan tidak dapat diproses karena kesalahan sintaks.
  - Biasanya karena parameter atau format yang salah.

- **401 Unauthorized**:
  - Klien harus melakukan autentikasi terlebih dahulu.
  - Diperlukan kredensial yang valid untuk mengakses sumber daya.

- **403 Forbidden**:
  - Server mengerti permintaan, tetapi menolak otorisasinya.
  - Klien tidak memiliki izin untuk mengakses sumber daya.

- **404 Not Found**:
  - Sumber daya yang diminta tidak dapat ditemukan di server.
  - Halaman atau endpoint tidak ada.

- **405 Method Not Allowed**:
  - Metode HTTP yang digunakan tidak diizinkan untuk sumber daya ini.
  - Contoh: mencoba GET pada endpoint yang hanya menerima POST.

- **408 Request Timeout**:
  - Server tidak menerima permintaan lengkap dalam waktu yang ditentukan.
  - Koneksi ditutup karena waktu tunggu habis.

- **409 Conflict**:
  - Permintaan bertentangan dengan status saat ini sumber daya.
  - Misalnya: konflik saat update data yang sama.

- **429 Too Many Requests**:
  - Klien telah mengirim terlalu banyak permintaan dalam waktu singkat.
  - Membatasi untuk mencegah penyalahgunaan atau overload.

## Kelas 5xx: Kesalahan Server

- **500 Internal Server Error**:
  - Kesalahan umum di sisi server.
  - Kondisi yang tidak terduga mencegah permintaan dipenuhi.

- **501 Not Implemented**:
  - Server tidak mendukung fungsionalitas yang diperlukan.
  - Metode atau fitur belum diimplementasi.

- **502 Bad Gateway**:
  - Server gateway atau proxy menerima respons tidak valid dari server hulu.
  - Masalah komunikasi antar server.

- **503 Service Unavailable**:
  - Server sementara tidak dapat menangani permintaan.
  - Biasanya karena server overload atau pemeliharaan.

- **504 Gateway Timeout**:
  - Server gateway tidak menerima respons tepat waktu dari server hulu.
  - Waktu tunggu koneksi antar server habis.

- **505 HTTP Version Not Supported**:
  - Versi HTTP yang digunakan tidak didukung oleh server.
  - Server hanya mendukung versi HTTP tertentu.

## Catatan Tambahan

- Status code adalah bagian penting dari komunikasi HTTP
- Membantu klien memahami hasil dari permintaan mereka
- Berguna untuk debugging dan menangani berbagai skenario
