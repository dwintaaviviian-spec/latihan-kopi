
//script untuk kontak.html
const form = document.getElementById("formKontak");

form.addEventListener("submit", function(event) {
  let valid = true;

  // Nama
  const nama = document.getElementById("nama");
  const errorNama = document.getElementById("errorNama");
  if (nama.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    errorNama.textContent = "";
  }

  // Email harus @gmail.com
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const emailPattern = /^[^@ \t\r\n]+@gmail\.com$/i;
  if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Email harus @gmail.com dan format benar.";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  // Kategori dipilih
  const kategori = document.getElementById("kategori");
  const errorKategori = document.getElementById("errorKategori");
  if (kategori.value === "") {
    errorKategori.textContent = "Pilih salah satu kategori.";
    valid = false;
  } else {
    errorKategori.textContent = "";
  }

  // Pesan minimal 10 karakter
  const pesan = document.getElementById("pesan");
  const errorPesan = document.getElementById("errorPesan");
  if (pesan.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
    valid = false;
  } else {
    errorPesan.textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  } else {
    event.preventDefault();
    alert("Pesan berhasil dikirim!");
    form.reset();
    errorNama.textContent = "";
    errorEmail.textContent = "";
    errorKategori.textContent = "";
    errorPesan.textContent = "";
  }
});

// Validasi blur nama
document.getElementById("nama").addEventListener("blur", function() {
  const errorNama = document.getElementById("errorNama");
  if (this.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
  } else {
    errorNama.textContent = "";
  }
});

// Validasi realtime pesan
document.getElementById("pesan").addEventListener("input", function() {
  const errorPesan = document.getElementById("errorPesan");
  if (this.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
  } else {
    errorPesan.textContent = "";
  }
});

// Validasi checkbox
document.getElementById("langganan").addEventListener("change", function() {
  if (this.checked) {
    alert("Terima kasih telah berlangganan newsletter!");
  }
});


//script untuk produk.html
document.addEventListener("DOMContentLoaded", function () {
  const produkInput = document.getElementById("produkInput");
  const tambahBtn = document.getElementById("tambahBtn");
  const daftarProduk = document.getElementById("daftarProduk");
  const previewProduk = document.getElementById("previewProduk");
  const temaSelect = document.getElementById("temaSelect");

  tambahBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const namaProduk = produkInput.value.trim();
    if (namaProduk !== "") {
      const li = document.createElement("li");
      li.textContent = namaProduk;

      li.addEventListener("mouseover", () => li.style.backgroundColor = "#e0e0e0");
      li.addEventListener("mouseout", () => li.style.backgroundColor = "");
      li.addEventListener("dblclick", () => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
          li.remove();
        }
      });

      daftarProduk.appendChild(li);
      produkInput.value = "";
      previewProduk.textContent = "";
    }
  });

  produkInput.addEventListener("keyup", function () {
    previewProduk.textContent = produkInput.value;
  });

  temaSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = temaSelect.value;
  });
});

