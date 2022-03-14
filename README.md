# README

Kode ini dibuat menggunakan bahasa pemrograman Javascript dan dengan bantuan `express JS` untuk dapat membuat server. Hasil experimen kemarin ada di dalam `app.js`. 

Kemarin kita mencoba untuk membuat API film, seperti dibawah

|Method|Path|Keterangan|
|-----|-----|--|
|GET|/movies| mendapatkan semua data film
|GET|/movies/:id| mendapatkan semua data film by id
|POST|/movies| menambahkan film
|DELETE|/movies/:id| Menghapus film berdasarkan id
|PUT|/movies/:id| Mengupdate film berdasarkan id

Tapi ternyata masih ada yang kurang, coba lengkapilah kode kemarin supaya dapat:
- Menghapus data berdasarkan ID yang dapat diakses pada path `/movies/:id`. Gunakan `app.DELETE()`
- Mengupdate data berdasarkan ID yang dapat diakses pada path `/movies/:id`. Gunakan `app.PUT()`

Jika sudah selesai:
- upload kode ke dalam github
- hubungkan heroku dengan github untuk mendeploy aplikasi
- kumpulkan link yg sudah di deploy ke google form challenge