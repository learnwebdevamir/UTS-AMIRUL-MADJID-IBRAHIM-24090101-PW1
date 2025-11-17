# UTS Pemrograman Web 1 - Konversi Desain ke Website Fungsional

Proyek ini adalah hasil Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1.

| Keterangan | Detail |
| :--- | :--- |
| **Nama** | AMIRUL MADJID IBRAHIM |
| **NIM** | 24090101 |
| **Nama Repository** | `UTS-AMIRUL MADJID IBRAHIM-24090101-PW1` |

***

## 🔗 Tautan Penting

| Deskripsi | Tautan |
| :--- | :--- |
| **GitHub Repository** | https://github.com/learnwebdevamir/UTS-AMIRUL-MADJID-IBRAHIM-24090101-PW1.git |
| **GitHub Pages (Live Demo)** | https://learnwebdevamir.github.io/UTS-AMIRUL-MADJID-IBRAHIM-24090101-PW1/ |


***

UNTUK VALIDASI LOGIN MENGGUNAKAN 
EMAIL ADDRES : madjidamirul@gmail.com
USERNAME : madjidamirul
PASSWORLD : 24090101

***

## 📝 Deskripsi Proyek dan Fungsionalitas

Proyek ini mengimplementasikan tiga halaman utama berdasarkan desain yang diberikan, dengan kemiripan UI sekitar 90%, dan menggunakan **HTML, CSS (untuk *styling*),** serta **JavaScript (untuk fungsionalitas)**.

### 1. Halaman Login (`index.html`)

Halaman ini menggunakan desain UI modern dua kolom.

* **Fungsi:** Mengambil input Email dan Password.
* **Validasi:** Menggunakan JavaScript untuk memeriksa bahwa kedua kolom input **tidak boleh kosong**.
* **Aksi:** Jika validasi berhasil (kedua kolom terisi), akan muncul `alert("Login berhasil")` dan pengguna akan diarahkan ke `dashboard.html`.

### 2. Halaman Dashboard (`dashboard.html`)

Halaman ini berfungsi sebagai ringkasan data.

* **Fungsi:** Menampilkan *summary card* (Total Products, Total Sales, Total Revenue) yang datanya diambil dari variabel objek `summary` di `js/script.js`.
* **Navigasi:** Memiliki tombol yang mengarahkan ke halaman `products.html`.

### 3. Halaman List Data Produk (`products.html`)

Halaman ini menampilkan data dalam bentuk tabel.

* **Fungsi:** Menampilkan data produk (Nama, Harga, Stok) yang bersumber dari array of object (`products`) di `js/script.js` melalui manipulasi DOM.
* **Aksi Tabel:**
    * **Edit:** Saat diklik, menampilkan `alert()` yang berisi nama produk.
    * **Delete:** Saat diklik, menampilkan `confirm()` untuk konfirmasi, kemudian **menghapus data produk dari array** (`products`) dan me-*render* ulang tabel.
