document.addEventListener("DOMContentLoaded", () => {
  const page =
    document.body.dataset.page || window.location.pathname.split("/").pop();

  initCommon();

  if (page === "index.html" || page === "login.html") initLogin();
  if (page === "dashboard.html" || page === "dashboard") fillDashboard();
  if (page === "stok.html" || page === "stok") {
    renderKatalog();
    renderGallery();
    addPesanButton();
  }
  if (page === "checkout.html" || page === "checkout") initCheckout();
  if (page === "laporan.html" || page === "laporan") loadLaporanBaru();
  if (page === "tracking.html" || page === "tracking") loadTrackingBaru();
});

// ---------------- COMMON ----------------
function initCommon() {
  const trackBtn = document.getElementById("track-btn");
  if (trackBtn) trackBtn.addEventListener("click", cariTracking);
}

function showToast(message, type = "success") {
  const toastContainer =
    document.getElementById("toast-container") ||
    (() => {
      const div = document.createElement("div");
      div.id = "toast-container";
      div.style.position = "fixed";
      div.style.top = "20px";
      div.style.right = "20px";
      div.style.zIndex = "1055";
      document.body.appendChild(div);
      return div;
    })();

  const colors = {
    success: "#388e3c",
    error: "#e57373",
    warning: "#ffb74d",
    info: "#64b5f6",
  };

  const toast = document.createElement("div");
  toast.style.background = colors[type] || "#81c784";
  toast.style.color = "#fff";
  toast.style.padding = "12px 18px";
  toast.style.marginTop = "10px";
  toast.style.borderRadius = "10px";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
  toast.style.transition = "all 0.4s ease";
  toast.style.opacity = "0";
  toast.textContent = message;

  toastContainer.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 100);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ---------------- LOGIN ----------------
function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = dataPengguna.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("userLogin", JSON.stringify(user));
      showToast("Login berhasil, selamat datang!", "success");
      setTimeout(() => (window.location.href = "dashboard.html"), 1000);
    } else {
      showToast("Email atau password salah!", "error");
    }
  });
}

// ---------------- DASHBOARD ----------------
function fillDashboard() {
  const greetEl = document.getElementById("greeting");
  const userRoleEl = document.getElementById("userRole");
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const jam = new Date().getHours();
  const ucapan =
    jam < 12
      ? "Selamat Pagi"
      : jam < 15
      ? "Selamat Siang"
      : jam < 18
      ? "Selamat Sore"
      : "Selamat Malam";

  if (greetEl)
    greetEl.textContent = `${ucapan}${user ? ", " + user.nama : ""}!`;
  if (userRoleEl) userRoleEl.textContent = user ? user.role : "";

  renderRiwayatPesananDashboard();
}

// 🔹 Tampilkan riwayat di dashboard
function renderRiwayatPesananDashboard() {
  const container = document.getElementById("riwayat-container");
  if (!container) return;

  const riwayat = JSON.parse(localStorage.getItem("riwayatPesanan")) || [];
  if (riwayat.length === 0) {
    container.innerHTML = `<p class="text-muted">Belum ada pesanan yang tercatat.</p>`;
    return;
  }

  const terbaru = riwayat.slice(-5).reverse();
  let html = `
  <div class="card shadow-sm border-0 rounded-3 p-3" style="background:#fff;">
    <h5 class="mb-3"><i class="bi bi-clock-history"></i> Riwayat Pesanan</h5>
    <div class="table-responsive">
      <table class="table table-sm align-middle">
        <thead class="table-light">
          <tr class="text-center">
            <th>No</th><th>Nomor DO</th><th>Nama</th><th>Tanggal</th><th>Status</th>
          </tr>
        </thead><tbody>
  `;

  let i = 1;
  terbaru.forEach((p) => {
    const badgeClass =
      p.status === "Selesai"
        ? "bg-success text-white"
        : p.status === "Dalam Pengiriman"
        ? "bg-info text-dark"
        : "bg-warning text-dark";

    html += `
      <tr>
        <td class="text-center">${i++}</td>
        <td>${p.nomorDO}</td>
        <td>${p.nama}</td>
        <td>${p.tanggal}</td>
        <td class="text-center">
          <span class="badge ${badgeClass}" style="padding:6px 10px;">${
      p.status
    }</span>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  </div>
  `;

  container.innerHTML = html;
}

// ---------------- STOK ----------------
function renderKatalog() {
  const tbody = document.querySelector("#tableKatalog tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  dataKatalogBuku.forEach((b) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${b.cover}" alt="${b.namaBarang}" style="width:70px; height:100px; object-fit:cover; border-radius:6px;"></td>
      <td>${b.kodeBarang}</td>
      <td>${b.namaBarang}</td>
      <td>${b.jenisBarang}</td>
      <td>${b.edisi}</td>
      <td>${b.stok}</td>
      <td>${b.harga}</td>`;
    tbody.appendChild(tr);
  });
  addPesanButton();
}

// ---------------- STOK ----------------
function renderKatalog() {
  const tbody = document.querySelector("#tableKatalog tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  dataKatalogBuku.forEach((b) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${b.cover}" alt="${b.namaBarang}" style="width:70px; height:100px; object-fit:cover; border-radius:6px;"></td>
      <td>${b.kodeBarang}</td>
      <td>${b.namaBarang}</td>
      <td>${b.jenisBarang}</td>
      <td>${b.edisi}</td>
      <td>${b.stok}</td>
      <td>${b.harga}</td>`;
    tbody.appendChild(tr);
  });

  // panggil tombol pesan sekarang
  addPesanButton();
}

// ✅ Tambahkan fungsi ini
function addPesanButton() {
  const table = document.querySelector("#tableKatalog");
  if (!table) return;
  if (document.getElementById("btnPesanSekarang")) return; // supaya tidak dobel

  const btnContainer = document.createElement("div");
  btnContainer.className = "text-end mt-3";
  btnContainer.innerHTML = `
    <button id="btnPesanSekarang" class="btn btn-edu fw-semibold px-4 py-2">
      <i class="bi bi-bag-check"></i> Pesan Sekarang
    </button>
  `;
  table.parentElement.appendChild(btnContainer);

  document.getElementById("btnPesanSekarang").addEventListener("click", () => {
    showToast("Menuju ke halaman checkout...", "info");
    setTimeout(() => (window.location.href = "checkout.html"), 800);
  });
}

// ---------------- CHECKOUT ----------------
let pesanan = [];

function initCheckout() {
  const listBuku = document.getElementById("listBuku");
  if (listBuku) {
    dataKatalogBuku.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.kodeBarang;
      opt.textContent = `${b.namaBarang} - ${b.harga}`;
      listBuku.appendChild(opt);
    });
  }
}

function tambahPesanan() {
  const kode = document.getElementById("listBuku").value;
  const qty = parseInt(document.getElementById("qty").value) || 1;
  const nama = document.getElementById("namaPemesan").value.trim();
  const alamat = document.getElementById("alamatPemesan").value.trim();
  if (!nama || !alamat)
    return showToast("Isi nama dan alamat dulu!", "warning");

  const buku = dataKatalogBuku.find((b) => b.kodeBarang === kode);
  if (!buku) return showToast("Pilih buku terlebih dahulu!", "error");

  const hargaNum = Number(String(buku.harga).replace(/[^0-9]/g, ""));
  pesanan.push({
    nama,
    alamat,
    judul: buku.namaBarang,
    qty,
    harga: hargaNum,
    total: hargaNum * qty,
  });

  renderPesanan();
  showToast("Buku ditambahkan ke pesanan!", "success");
  document.getElementById("namaPemesan").value = "";
  document.getElementById("alamatPemesan").value = "";
  document.getElementById("qty").value = 1;
}

function renderPesanan() {
  const tbody = document.querySelector("#tablePesanan tbody");
  const totalEl = document.getElementById("grandTotal");
  if (!tbody || !totalEl) return;
  tbody.innerHTML = "";
  let totalAll = 0;
  pesanan.forEach((p) => {
    totalAll += p.total;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${p.judul}</td><td>${p.qty}</td>
      <td>Rp ${p.harga.toLocaleString("id-ID")}</td>
      <td>Rp ${p.total.toLocaleString("id-ID")}</td>`;
    tbody.appendChild(tr);
  });
  totalEl.textContent = `Total: Rp ${totalAll.toLocaleString("id-ID")}`;
}

function confirmCheckout() {
  if (pesanan.length === 0)
    return showToast("Belum ada item dalam pesanan!", "error");

  const metode = document.getElementById("metodePembayaran").value;
  if (!metode || metode === "Pilih Metode Pembayaran")
    return showToast("Pilih metode pembayaran!", "warning");

  const riwayatLama = JSON.parse(localStorage.getItem("riwayatPesanan")) || [];
  const pesananBaru = pesanan.map((p) => ({
    ...p,
    metode,
    tanggal: new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    nomorDO: "DO-" + Math.floor(Math.random() * 90000 + 10000),
    status: "Dalam Pengiriman",
  }));
  localStorage.setItem(
    "riwayatPesanan",
    JSON.stringify([...riwayatLama, ...pesananBaru])
  );

  showToast("Pesanan berhasil disimpan ke laporan!", "success");
  pesanan = [];
  renderPesanan();
  setTimeout(() => (window.location.href = "laporan.html"), 1200);
}

// ---------------- LAPORAN ----------------
function loadLaporanBaru() {
  const tbody = document.getElementById("laporan-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  const riwayat = JSON.parse(localStorage.getItem("riwayatPesanan")) || [];

  if (riwayat.length === 0) {
    tbody.innerHTML = "<tr><td colspan='8'>Belum ada pesanan.</td></tr>";
    return;
  }

  let i = 1;
  riwayat.forEach((p) => {
    const badgeClass =
      p.status === "Selesai"
        ? "bg-success text-white"
        : p.status === "Dalam Pengiriman"
        ? "bg-info text-dark"
        : "bg-warning text-dark";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i++}</td>
      <td>${p.nomorDO}</td>
      <td>${p.nama}</td>
      <td>${p.tanggal}</td>
      <td><span class="badge ${badgeClass}" style="padding:6px 10px;">${
      p.status
    }</span></td>
      <td>Rp ${p.total.toLocaleString("id-ID")}</td>
      <td>${p.metode}</td>
      <td>
        <button class="btn btn-sm btn-edu" onclick="lihatTracking('${
          p.nomorDO
        }')">
          <i class="bi bi-truck"></i> Lihat Tracking
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 🔄 Refresh tabel laporan tanpa reload halaman
function refreshLaporan() {
  showToast("Menyegarkan laporan...", "info");
  setTimeout(() => {
    loadLaporanBaru();
  }, 500);
}

// 🗑️ Hapus semua laporan dari localStorage
function hapusSemuaLaporan() {
  if (confirm("Apakah kamu yakin ingin menghapus semua data laporan?")) {
    localStorage.removeItem("riwayatPesanan");
    showToast("Semua data laporan telah dihapus!", "error");
    loadLaporanBaru();
  }
}

// ---------------- TRACKING ----------------
function lihatTracking(nomorDO) {
  localStorage.setItem("trackingDO", nomorDO);
  showToast(`Melihat status pengiriman untuk ${nomorDO}...`, "info");
  setTimeout(() => (window.location.href = "tracking.html"), 800);
}

function loadTrackingBaru() {
  const cariBtn = document.getElementById("btnCariTracking");
  const input = document.getElementById("inputTracking");
  const result = document.getElementById("tracking-result");

  if (!cariBtn || !input || !result) return;

  cariBtn.addEventListener("click", () => {
    const nomorDO = input.value.trim();
    if (!nomorDO)
      return (result.innerHTML = `<p class="text-danger">Masukkan nomor DO terlebih dahulu!</p>`);

    const riwayat = JSON.parse(localStorage.getItem("riwayatPesanan")) || [];
    const pesanan = riwayat.find((p) => p.nomorDO === nomorDO);

    if (!pesanan)
      return (result.innerHTML = `<p class="text-danger">Nomor DO <b>${nomorDO}</b> tidak ditemukan.</p>`);

    result.innerHTML = `
      <div class="card p-3 shadow-sm">
        <h5>Tracking Pengiriman untuk <b>${pesanan.nama}</b></h5>
        <p><b>Nomor DO:</b> ${pesanan.nomorDO}</p>
        <p><b>Judul Buku:</b> ${pesanan.judul}</p>
        <div class="progress my-3" style="height:14px;">
          <div id="progress-bar" class="progress-bar bg-success" style="width:0%">Menunggu Konfirmasi</div>
        </div>
        <p id="status-text">Status: Menunggu konfirmasi pembayaran...</p>
      </div>
    `;

    const bar = document.getElementById("progress-bar");
    const statusText = document.getElementById("status-text");
    let progress = 0;

    const interval = setInterval(() => {
      progress += 25;
      if (progress === 25) {
        bar.style.width = "25%";
        bar.textContent = "Diproses";
        statusText.textContent = "Status: Pesanan sedang diproses...";
      } else if (progress === 50) {
        bar.style.width = "50%";
        bar.textContent = "Dikemas";
        statusText.textContent = "Status: Barang sedang dikemas...";
      } else if (progress === 75) {
        bar.style.width = "75%";
        bar.textContent = "Dalam Pengiriman";
        statusText.textContent = "Status: Barang sedang dikirim...";
      } else {
        clearInterval(interval);
        bar.style.width = "100%";
        bar.textContent = "Terkirim ✅";
        statusText.textContent = "Status: Barang telah diterima.";
      }
    }, 1200);
  });
}
