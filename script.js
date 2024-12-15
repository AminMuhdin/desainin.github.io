// Untuk scrolll
let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll terakhir
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Ketika scroll ke bawah
    navbar.style.transform = "translateY(-100%)"; // Sembunyikan navbar
  } else {
    // Ketika scroll ke atas
    navbar.style.transform = "translateY(0)"; // Tampilkan navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Menghindari nilai negatif
});

//
document.addEventListener("DOMContentLoaded", () => {
  const navbarCollapse = document.getElementById("navbarNavAltMarkup");
  const jumbotron = document.querySelector(".jumbotron");

  navbarCollapse.addEventListener("shown.bs.collapse", () => {
    // Ketika navbar dibuka, tambahkan margin-top pada jumbotron
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    jumbotron.style.marginTop = `${navbarHeight}px`;
  });

  navbarCollapse.addEventListener("hidden.bs.collapse", () => {
    // Ketika navbar ditutup, hapus margin-top pada jumbotron
    jumbotron.style.marginTop = "0";
  });
});

// Smooth scroll for navigation links
// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollLinks = document.querySelectorAll(".page-scroll");
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Tinggi navbar

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah perilaku default tautan
      const targetID = this.getAttribute("href"); // Mendapatkan target ID dari href
      const targetElement = document.querySelector(targetID);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop; // Posisi elemen target dari atas
        const offsetPosition = targetPosition - navbarHeight; // Kurangi tinggi navbar agar target tertutup

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Efek scroll halus
        });
      }
    });
  });
});

// Chat BOT
function startWhatsAppChat() {
  // Nomor telepon dengan format internasional tanpa tanda +
  const phoneNumber = "6281234567890";
  // Pesan otomatis
  const message = "Halo, saya ingin bertanya tentang layanan Anda.";
  // URL WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  // Buka tab baru
  window.open(whatsappUrl, "_blank");
}
