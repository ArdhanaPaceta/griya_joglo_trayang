DESIGN.md: Website Griya Joglo Trayang

Panduan desain untuk website penjualan rumah joglo Griya Joglo Trayang. Dibangun dengan Bootstrap 5, HTML, CSS, dan JavaScript vanilla. Dokumen ini mengikuti struktur halaman di PRD: beranda, tentang, produk, galeri, blog, dan kontak.

1. Arah Desain
Karakter: hangat, kokoh, tradisional, dan premium dengan sentuhan modern.
Warna dasar: moccasin dan putih. Moccasin memberi kesan kayu jati yang hangat, putih menjaga halaman tetap bersih dan lega.
Warna teks dan aksen: coklat tua dan coklat jati, selaras dengan logo yang berwarna dasar coklat.
Prinsip:
Foto joglo adalah bintang utama. Desain memberi ruang, bukan bersaing dengan foto.
Satu aksi utama di setiap layar: konsultasi via WhatsApp.
Ritme warna bergantian antara putih dan moccasin agar setiap section terasa terpisah tanpa garis tebal.
Animasi seperlunya dan halus, tidak ada efek yang hanya pamer.
2. Warna
2.1 Token
Token	Hex	Fungsi
--gjt-moccasin	
#FFE4B5	Warna dasar brand: background hero, section selang-seling, breadcrumb band
--gjt-moccasin-soft	
#FFF4DE	Tint lebih terang: card di atas moccasin, header accordion aktif
--gjt-moccasin-deep	
#F2CE94	Border halus, divider, hover pada elemen moccasin
--gjt-white	
#FFFFFF	Warna dasar kedua: background halaman, card, form
--gjt-ink	
#4A2C1A	Teks utama dan heading
--gjt-ink-muted	
#6B4A32	Teks pendukung, caption, tanggal
--gjt-teak	
#8B5A2B	Aksen utama: tombol primary, link, ikon, eyebrow
--gjt-teak-dark	
#6F4521	Hover dan active tombol primary dan link
--gjt-bark	
#3B2214	Section gelap: CTA band, footer
--gjt-border-strong	
#A67C52	Border input dan elemen interaktif (kontras minimal 3:1)
--gjt-gold	
#C8963E	Dekoratif saja (garis kecil, ornamen). Jangan dipakai untuk teks
--gjt-wa	
#25D366	Khusus tombol WhatsApp mengambang
--gjt-danger	
#B3261E	Pesan error validasi form

Komposisi yang dituju: sekitar 60% putih dan moccasin, 30% coklat untuk teks, 10% aksen (teak dan bark).

2.2 Kontras (WCAG)

Rasio dihitung dengan rumus WCAG 2.x. Teks normal wajib minimal 4.5:1, komponen UI minimal 3:1.

Teks / elemen	Latar	Rasio	Keterangan
ink	moccasin	10.2:1	Lulus AAA
ink	putih	12.6:1	Lulus AAA
ink	moccasin-soft	11.6:1	Lulus AAA
ink-muted	moccasin	6.4:1	Lulus AA
ink-muted	putih	7.9:1	Lulus AAA
teak (link)	putih	5.8:1	Lulus AA
teak (link)	moccasin	4.7:1	Lulus AA, beri garis bawah pada link di dalam paragraf
putih	teak (tombol)	5.8:1	Lulus AA
putih	teak-dark (hover)	8.2:1	Lulus AAA
moccasin	bark	11.9:1	Lulus AAA
putih	bark	14.7:1	Lulus AAA
border-strong	putih	3.7:1	Lulus untuk border input
border-strong	moccasin	3.0:1	Batas minimum, hindari input langsung di atas moccasin

Catatan: --gjt-gold hanya 2.7:1 di atas putih, jadi tidak boleh dipakai untuk teks atau ikon yang membawa informasi.

2.3 Ritme Warna Antar Section

Sections diselang-seling supaya batas antar bagian jelas tanpa banyak garis.

Halaman	Section	Background
Semua halaman	Navbar	Putih, border bawah moccasin-deep
Beranda	Hero	Moccasin
Beranda	Tentang	Putih
Beranda	Why Choose Us	Moccasin
Beranda	Produk	Putih
Beranda	Galeri	Moccasin-soft
Beranda	Testimoni	Putih
Beranda	FAQ	Moccasin
Halaman dalam	Breadcrumb band + judul halaman	Moccasin
Tentang	Tentang Kami, Keunggulan	Putih
Tentang	Visi Misi	Moccasin-soft
Produk, Galeri, Blog	Section isi	Putih
Kontak	Section form	Moccasin (form berupa card putih)
Semua halaman	CTA band	Bark
Semua halaman	Footer	
#2A190F (sedikit lebih gelap dari bark)
3. Tipografi
Heading: Fraunces, serif hangat dengan karakter. Bobot 600.
Isi dan UI: Plus Jakarta Sans, sans-serif bersih dan terbaca baik di layar kecil. Bobot 400, 500, 600, 700.
Fallback: Georgia, 'Times New Roman', serif untuk heading dan system-ui, -apple-system, 'Segoe UI', sans-serif untuk isi.
Muat font dengan display=swap dan hanya bobot yang dipakai agar PageSpeed tetap tinggi.
html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
Elemen	Ukuran	Bobot	Line-height	Catatan
H1	clamp(2.25rem, 1rem + 4vw, 3.75rem)	600	1.1	Fraunces, letter-spacing: -0.01em
H2	clamp(1.75rem, 1rem + 2.5vw, 2.5rem)	600	1.2	Fraunces
H3	1.375rem	600	1.3	Fraunces
Body	1rem	400	1.7	Plus Jakarta Sans
Body besar (lead)	1.125rem	400	1.7	Subjudul hero dan pembuka section
Kecil	0.875rem	400	1.5	Caption, tanggal, breadcrumb
Eyebrow	0.8125rem	600	1.4	Huruf kapital, letter-spacing: 0.12em, warna teak
Tombol	1rem	600	1.2	Plus Jakarta Sans

Aturan teks:

Lebar baris paragraf maksimal 65 karakter (max-width: 65ch).
Teks rata kiri. Rata tengah hanya untuk judul section yang pendek dan blok CTA.
Satu h1 per halaman: di hero untuk beranda, dan di breadcrumb band untuk halaman dalam.
4. Layout dan Spasi
Container: Bootstrap container, lebar maksimum 1140px. Padding samping 16px di mobile.
Breakpoint: bawaan Bootstrap (576, 768, 992, 1200, 1400). Desain mobile first, diuji mulai lebar 360px.
Skala spasi (kelipatan 8px): 4, 8, 16, 24, 32, 48, 64, 96.
Padding section: 64px (mobile), 96px (desktop).
Jarak judul section ke isi: 48px.
Gutter grid: 24px (g-4).
Komponen	Mobile	Tablet	Desktop
Card produk	1 kolom	2 kolom	3 kolom
Card blog	1 kolom	2 kolom	3 kolom
Grid galeri	2 kolom	3 kolom	4 kolom
Why Choose Us	1 kolom	2 kolom	3 kolom
Testimoni	Scroll horizontal (scroll-snap)	2 kolom	3 kolom
5. Bentuk dan Elevasi
Elemen	Radius	Border	Shadow
Tombol, input	8px	1px	Tidak ada
Card, gambar, tile galeri	12px	1px moccasin-deep	0 2px 8px rgba(74, 44, 26, 0.06)
Card form kontak	16px	Tidak ada	0 12px 32px rgba(74, 44, 26, 0.12)
Card saat hover	12px	1px moccasin-deep	0 12px 28px rgba(74, 44, 26, 0.14)
Badge	999px	Tidak ada	Tidak ada

Shadow selalu berwarna coklat transparan, bukan hitam, agar menyatu dengan palet.

6. Integrasi Bootstrap

Simpan token di bagian atas style.css, lalu timpa variabel Bootstrap agar komponen bawaan ikut memakai palet ini.

css
:root {
  /* Token brand */
  --gjt-moccasin: #FFE4B5;
  --gjt-moccasin-soft: #FFF4DE;
  --gjt-moccasin-deep: #F2CE94;
  --gjt-white: #FFFFFF;
  --gjt-ink: #4A2C1A;
  --gjt-ink-muted: #6B4A32;
  --gjt-teak: #8B5A2B;
  --gjt-teak-dark: #6F4521;
  --gjt-bark: #3B2214;
  --gjt-border-strong: #A67C52;
  --gjt-gold: #C8963E;
  --gjt-wa: #25D366;
  --gjt-danger: #B3261E;

  /* Timpa variabel Bootstrap 5.3 */
  --bs-body-bg: var(--gjt-white);
  --bs-body-color: var(--gjt-ink);
  --bs-body-font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --bs-body-line-height: 1.7;
  --bs-heading-color: var(--gjt-ink);
  --bs-link-color: var(--gjt-teak);
  --bs-link-hover-color: var(--gjt-teak-dark);
  --bs-border-color: var(--gjt-moccasin-deep);
  --bs-border-radius: 8px;
  --bs-border-radius-lg: 12px;
  --bs-primary: var(--gjt-teak);
  --bs-primary-rgb: 139, 90, 43;
}

h1, h2, h3, .h1, .h2, .h3 {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-weight: 600;
}

.btn-primary {
  --bs-btn-bg: var(--gjt-teak);
  --bs-btn-border-color: var(--gjt-teak);
  --bs-btn-color: #fff;
  --bs-btn-hover-bg: var(--gjt-teak-dark);
  --bs-btn-hover-border-color: var(--gjt-teak-dark);
  --bs-btn-hover-color: #fff;
  --bs-btn-active-bg: var(--gjt-teak-dark);
  --bs-btn-active-border-color: var(--gjt-teak-dark);
  --bs-btn-focus-shadow-rgb: 139, 90, 43;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}

.btn-outline-brand {
  --bs-btn-color: var(--gjt-teak);
  --bs-btn-border-color: var(--gjt-teak);
  --bs-btn-hover-bg: var(--gjt-teak);
  --bs-btn-hover-border-color: var(--gjt-teak);
  --bs-btn-hover-color: #fff;
  --bs-btn-active-bg: var(--gjt-teak-dark);
  --bs-btn-active-color: #fff;
  --bs-btn-focus-shadow-rgb: 139, 90, 43;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}

.bg-moccasin { background-color: var(--gjt-moccasin); }
.bg-moccasin-soft { background-color: var(--gjt-moccasin-soft); }
.bg-bark { background-color: var(--gjt-bark); color: var(--gjt-moccasin); }
7. Komponen
7.1 Navbar
Tinggi 72px (desktop) dan 64px (mobile), menempel di atas (sticky-top), background putih, border bawah 1px moccasin-deep.
Logo di kiri (tinggi 40px), enam menu di tengah atau kanan, tombol "Konsultasi" (primary) di ujung kanan.
Link menu berwarna ink-muted, hover ink. Halaman aktif ditandai garis bawah 2px teak dengan text-underline-offset: 8px dan aria-current="page".
Mobile: menu hamburger (Bootstrap collapse), panel berwarna putih, area sentuh minimal 48px.
Saat halaman di-scroll lebih dari 8px, tambahkan shadow 0 2px 12px rgba(74, 44, 26, 0.08).
7.2 Breadcrumb Band (halaman dalam)
Band moccasin dengan padding vertikal 40px. Isinya h1 judul halaman (Fraunces) dan breadcrumb di bawahnya.
Breadcrumb 14px, pemisah › (--bs-breadcrumb-divider: '›'), link teak, halaman saat ini ink dengan aria-current="page".
Bungkus dengan <nav aria-label="Breadcrumb">.
7.3 Hero (beranda)
Background moccasin, dua kolom (teks 6, gambar 6) di desktop. Di mobile gambar di bawah teks.
Urutan teks: eyebrow, H1, lead, dua tombol (primary "Konsultasi via WhatsApp" dan outline "Lihat Produk").
Gambar: foto joglo, rasio 4:5 di desktop dan 4:3 di mobile, radius 12px, loading="eager" dan fetchpriority="high".
Ornamen opsional: pola garis bertingkat terinspirasi tumpang sari sebagai SVG, opacity 6 sampai 8%, hanya di belakang hero.
7.4 Tombol
Primary: latar teak, teks putih. Dipakai untuk aksi utama (konsultasi, kirim form).
Outline brand: garis teak, teks teak, hover terisi teak. Dipakai untuk aksi sekunder dan tombol di dalam card.
Di atas bark: latar moccasin, teks ink, hover moccasin-soft.
Tinggi minimal 48px. Ikon WhatsApp (Bootstrap Icons bi-whatsapp) di kiri teks untuk tombol yang menuju WhatsApp.
Fokus keyboard: outline 3px rgba(139, 90, 43, 0.4) dengan offset 2px, tidak boleh dihilangkan.
7.5 Card Produk
Latar putih (di atas section putih beri border moccasin-deep), radius 12px, overflow: hidden.
Gambar rasio 4:3 (aspect-ratio: 4 / 3; object-fit: cover).
Badge kondisi di atas gambar: Baru (latar moccasin, teks ink) dan Antik (latar bark, teks moccasin).
Isi card (padding 20px): nama produk (H3), daftar spesifikasi singkat (ukuran, jenis kayu) 14px ink-muted, penjelasan 2 sampai 3 baris, harga atau "Hubungi untuk harga" tebal 700.
Tombol "Tanya produk ini" selebar card (outline brand) dengan ikon WhatsApp.
Hover: card naik 4px dan shadow membesar, gambar zoom scale(1.04) dalam wadah overflow: hidden.
7.6 Why Choose Us
Section moccasin. Setiap poin berupa ikon dalam lingkaran putih 56px (ikon teak, gaya garis Bootstrap Icons), judul H3, dan satu kalimat penjelasan.
Tata letak rata kiri, bukan rata tengah, supaya tidak terlihat seperti template generik.
7.7 Galeri
Grid CSS dengan gap: 12px, tile rasio 1:1 atau 4:3, radius 12px.
Hover desktop: overlay gradien bark transparan di bagian bawah dan caption teks moccasin. Di mobile caption selalu terlihat agar tidak bergantung hover.
Klik membuka lightbox (Bootstrap modal): gambar besar, caption, tombol sebelumnya dan berikutnya, tombol tutup. Fokus terkunci di dalam modal dan tombol Esc menutup.
Gambar di bawah layar pertama memakai loading="lazy".
7.8 Card Blog
Struktur seperti card produk: gambar rasio 16:10, kategori (eyebrow teak), tanggal 14px ink-muted, judul H3 maksimal 2 baris (line-clamp), ringkasan maksimal 3 baris, link "Baca selengkapnya" dengan panah.
7.9 Testimoni
Card moccasin-soft di atas section putih, radius 12px, padding 24px.
Kutipan 1rem, tanda kutip dekoratif Fraunces 48px berwarna teak di pojok kiri atas. Di bawahnya nama (tebal) dan kota (ink-muted).
Mobile: baris card yang bisa digeser dengan scroll-snap-type: x mandatory.
7.10 FAQ (Accordion)
Section moccasin. Setiap item berupa card putih terpisah (jarak 12px), border moccasin-deep, radius 12px.
Header tombol: teks ink bobot 600. Saat terbuka latar moccasin-soft, ikon panah teak.
Ganti warna fokus biru bawaan Bootstrap dengan ring teak.
7.11 Form Pemesanan (halaman kontak)
Section moccasin dengan card putih (padding 32px, radius 16px, shadow besar). Input tidak boleh langsung di atas moccasin.
Label di atas input, 14px, bobot 600, warna ink.
Input: latar putih, border 1px border-strong, radius 8px, tinggi minimal 48px, padding 12px 16px.
Fokus: border teak dan ring 0 0 0 3px rgba(139, 90, 43, 0.25).
Error: border dan pesan danger, pesan di bawah field dan dihubungkan lewat aria-describedby. Jangan hanya mengandalkan warna, tambahkan teks.
Tombol kirim: primary selebar form di mobile, dengan ikon WhatsApp dan teks "Kirim via WhatsApp".
7.12 Tombol WhatsApp Mengambang
Lingkaran 56px, latar --gjt-wa, ikon putih 28px, posisi kanan bawah (20px dari tepi, ditambah env(safe-area-inset-bottom)).
aria-label="Chat via WhatsApp", z-index: 1030 agar tetap di bawah modal.
Tautan membuka wa.me dengan pesan pembuka bawaan.
7.13 CTA Band dan Footer
CTA band: latar bark, H2 moccasin, teks putih, tombol moccasin. Rata tengah, satu aksi saja.
Footer: latar 
#2A190F, teks moccasin. Empat kolom di desktop: brand dan deskripsi singkat, tautan cepat, kontak, media sosial. Garis pemisah rgba(255, 228, 181, 0.2) sebelum baris hak cipta.
8. Gambar dan Ikon
Penggunaan	Rasio	Catatan
Hero	4:5 (desktop), 4:3 (mobile)	Foto joglo utuh dengan cahaya alami
Card produk	4:3	Satu sudut utama yang konsisten antar produk
Galeri	1:1 dan 4:3	Campur foto eksterior, interior, dan detail ukiran
Card blog	16:10	Gambar sampul tiap artikel
Logo	1:1	Siapkan versi untuk latar terang dan gelap
Format WebP, lebar maksimum 1200px untuk hero dan 800px untuk card, kompres hingga di bawah 150 KB per gambar.
Semua gambar punya alt deskriptif, dan width serta height untuk mencegah layout bergeser.
Gaya foto: cahaya alami, tekstur kayu dan detail ukiran terlihat jelas, hindari foto gelap atau buram. Beri warna hangat yang konsisten agar serasi dengan moccasin.
Ikon: Bootstrap Icons gaya garis, ukuran 20 sampai 28px, warna teak. Jangan memakai emoji sebagai ikon.
9. Gerak dan Interaksi

Gerak dipakai untuk memberi petunjuk, bukan hiasan.

Efek	Durasi	Easing	Dipakai di
Muncul saat di-scroll (fade + naik 16px), sekali saja	500ms	ease-out	Judul section, card, blok teks
Card naik 4px + shadow	250ms	ease	Card produk dan blog
Gambar zoom 1.04	400ms	ease-out	Gambar di card dan tile galeri
Shadow navbar saat scroll	200ms	ease	Navbar
Warna tombol dan link	150ms	ease	Semua tombol dan link
css
.js .reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.js .reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
  * { scroll-behavior: auto !important; }
}

Aturan implementasi:

Tambahkan class js pada <html> lewat JavaScript, supaya konten tetap terlihat jika JavaScript gagal.
Gunakan IntersectionObserver dan hentikan pengamatan setelah elemen muncul. Jika card dirender dari array JavaScript, jalankan observer setelah card ditambahkan ke halaman.
Stagger antar card maksimal 60ms per item, dan total tidak lebih dari 300ms.
Tidak ada animasi yang berjalan terus-menerus, parallax berat, atau efek yang menggeser layout.
10. Aksesibilitas
Kontras mengikuti tabel di bagian 2.2. Jangan memakai kombinasi warna di luar tabel tanpa mengecek rasionya.
Landmark semantik: header, nav, main, section, footer. Satu main per halaman.
Semua elemen interaktif bisa dioperasikan dengan keyboard dan punya indikator fokus yang jelas.
Area sentuh minimal 48 x 48px.
Form: setiap input punya label yang terhubung, atribut autocomplete yang sesuai, dan pesan error berupa teks.
Hormati prefers-reduced-motion.
11. Yang Dihindari
Gradien ungu atau biru, blob dekoratif, dan efek kaca (glassmorphism). Tidak cocok dengan karakter kayu jati.
Tiga kolom ikon bergaya template dengan semua teks rata tengah.
Warna di luar palet, terutama biru bawaan Bootstrap untuk link, fokus, atau tombol.
Teks krem atau moccasin di atas putih, dan teks gold di atas apa pun.
Terlalu banyak font atau bobot. Cukup dua keluarga font di atas.
Foto stok generik. Gunakan foto joglo dan proyek asli sebisa mungkin.
12. Checklist Sebelum Rilis
 Token warna dan font sudah diterapkan di seluruh halaman.
 Ritme background antar section sesuai bagian 2.3.
 Breadcrumb hadir di semua halaman selain beranda.
 Rasio kontras semua teks lulus AA.
 Gambar WebP, berukuran sesuai, dan memiliki alt, width, dan height.
 Skor PageSpeed mobile minimal 85.
 Form kontak berhasil membuka WhatsApp dengan pesan yang benar di mobile dan desktop.
 Animasi dimatikan saat prefers-reduced-motion aktif.
 Diuji pada lebar 360px, 768px, dan 1280px.