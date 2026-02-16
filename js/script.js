document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar a").forEach(link => {
    let linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// REGISTER USER
function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || phone === "" || password === "") {
    alert("Semua field harus diisi!");
    return;
  }

  let userData = {
    name: name,
    email: email,
    phone: phone,
    password: password,
    role: "user"
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login-user.html";
}

// LOGIN USER
function loginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    alert("Belum ada akun! Silakan register dulu.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("loggedInRole", "user");
    alert("Login User berhasil!");
    window.location.href = "user-dashboard.html";
  } else {
    alert("Email atau Password salah!");
  }
}

// LOGIN ADMIN
function loginAdmin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let adminEmail = "admin@baliguide.com";
  let adminPass = "admin123";

  if (email === adminEmail && password === adminPass) {
    localStorage.setItem("loggedInRole", "admin");
    alert("Login Admin berhasil!");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Login Admin gagal! Email/Password salah.");
  }
}

// CHECK ACCESS
function checkRole(requiredRole) {
  let role = localStorage.getItem("loggedInRole");

  if (role !== requiredRole) {
    alert("Akses ditolak! Silakan login terlebih dahulu.");
    window.location.href = "index.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInRole");
  alert("Logout berhasil!");
  window.location.href = "index.html";
}

// ===============================
// MENU ACTIVE NAVBAR
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar a").forEach(link => {
    let linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});


// ===============================
// AUTH SYSTEM
// ===============================
function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || phone === "" || password === "") {
    alert("Semua field harus diisi!");
    return;
  }

  let userData = {
    name: name,
    email: email,
    phone: phone,
    password: password,
    role: "user"
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login-user.html";
}

function loginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    alert("Belum ada akun! Silakan register dulu.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("loggedInRole", "user");
    alert("Login User berhasil!");
    window.location.href = "user-dashboard.html";
  } else {
    alert("Email atau Password salah!");
  }
}

function loginAdmin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let adminEmail = "admin@baliguide.com";
  let adminPass = "admin123";

  if (email === adminEmail && password === adminPass) {
    localStorage.setItem("loggedInRole", "admin");
    alert("Login Admin berhasil!");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Login Admin gagal! Email/Password salah.");
  }
}

function checkRole(requiredRole) {
  let role = localStorage.getItem("loggedInRole");

  if (role !== requiredRole) {
    alert("Akses ditolak! Silakan login terlebih dahulu.");
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedInRole");
  alert("Logout berhasil!");
  window.location.href = "index.html";
}


// ===============================
// DEFAULT DATA INIT (DESTINASI + GUIDE)
// ===============================
function initData() {
  if (!localStorage.getItem("destinations")) {
    let destinations = [
      {
        id: 1,
        name: "Pura Tanah Lot",
        image: "https://images.unsplash.com/photo-1544551763-ced6d1b6a8d6?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: 2,
        name: "Ubud Monkey Forest",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: 3,
        name: "Pantai Kuta",
        image: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: 4,
        name: "Nusa Penida",
        image: "https://images.unsplash.com/photo-1589196198131-67b42f6fd4e3?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: 5,
        name: "Pura Uluwatu",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=900&q=80"
      }
    ];

    localStorage.setItem("destinations", JSON.stringify(destinations));
  }

  if (!localStorage.getItem("guides")) {
    let guides = [
      {
        id: 1,
        name: "I Made Arya",
        location: "Ubud",
        specialization: "Budaya Bali & Pura",
        language: "Indonesia, English",
        experience: "7 tahun",
        whatsapp: "6281234567890"
      },
      {
        id: 2,
        name: "Ni Luh Sari Dewi",
        location: "Kuta / Seminyak",
        specialization: "City Tour & Sunset",
        language: "Indonesia, English",
        experience: "5 tahun",
        whatsapp: "6289876543210"
      },
      {
        id: 3,
        name: "Kadek Putra",
        location: "Nusa Penida",
        specialization: "Snorkeling & Island Tour",
        language: "Indonesia, English",
        experience: "6 tahun",
        whatsapp: "6281112223334"
      }
    ];

    localStorage.setItem("guides", JSON.stringify(guides));
  }
}

initData();


// ===============================
// LOAD DESTINATIONS TO PAGE
// ===============================
function loadDestinations() {
  let destinationContainer = document.getElementById("destinationList");
  if (!destinationContainer) return;

  let destinations = JSON.parse(localStorage.getItem("destinations")) || [];
  destinationContainer.innerHTML = "";

  destinations.forEach(dest => {
    destinationContainer.innerHTML += `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
      </div>
    `;
  });
}


// ===============================
// LOAD GUIDES TO PAGE
// ===============================
function loadGuides() {
  let guideContainer = document.getElementById("guideList");
  if (!guideContainer) return;

  let guides = JSON.parse(localStorage.getItem("guides")) || [];
  guideContainer.innerHTML = "";

  guides.forEach(g => {
    guideContainer.innerHTML += `
      <div class="guide-card">
        <h3>${g.name}</h3>
        <p><b>Lokasi:</b> ${g.location}</p>
        <p><b>Spesialisasi:</b> ${g.specialization}</p>
        <p><b>Bahasa:</b> ${g.language}</p>
        <p><b>Pengalaman:</b> ${g.experience}</p>

        <a class="btn-wa" target="_blank"
          href="https://wa.me/${g.whatsapp}?text=Halo%20${encodeURIComponent(g.name)},%20saya%20ingin%20booking%20tour%20di%20Bali.">
          Chat WhatsApp
        </a>
      </div>
    `;
  });
}


// ===============================
// ADMIN CRUD DESTINATIONS
// ===============================
function adminLoadDestinations() {
  let container = document.getElementById("adminDestinationList");
  if (!container) return;

  let destinations = JSON.parse(localStorage.getItem("destinations")) || [];
  container.innerHTML = "";

  destinations.forEach(dest => {
    container.innerHTML += `
      <div class="guide-card">
        <h3>${dest.name}</h3>
        <p><b>Gambar:</b> ${dest.image}</p>

        <button onclick="deleteDestination(${dest.id})" style="margin-top:10px; width:100%; padding:10px; border:none; background:red; color:white; border-radius:10px; cursor:pointer;">
          Hapus
        </button>
      </div>
    `;
  });
}

function addDestination() {
  let name = document.getElementById("destName").value;
  let image = document.getElementById("destImage").value;

  if (name === "" || image === "") {
    alert("Nama dan Link gambar wajib diisi!");
    return;
  }

  let destinations = JSON.parse(localStorage.getItem("destinations")) || [];

  let newDestination = {
    id: Date.now(),
    name: name,
    image: image
  };

  destinations.push(newDestination);
  localStorage.setItem("destinations", JSON.stringify(destinations));

  alert("Destinasi berhasil ditambahkan!");

  document.getElementById("destName").value = "";
  document.getElementById("destImage").value = "";

  adminLoadDestinations();
}

function deleteDestination(id) {
  let destinations = JSON.parse(localStorage.getItem("destinations")) || [];
  destinations = destinations.filter(d => d.id !== id);

  localStorage.setItem("destinations", JSON.stringify(destinations));
  alert("Destinasi berhasil dihapus!");

  adminLoadDestinations();
}


// ===============================
// ADMIN CRUD GUIDES
// ===============================
function adminLoadGuides() {
  let container = document.getElementById("adminGuideList");
  if (!container) return;

  let guides = JSON.parse(localStorage.getItem("guides")) || [];
  container.innerHTML = "";

  guides.forEach(g => {
    container.innerHTML += `
      <div class="guide-card">
        <h3>${g.name}</h3>
        <p><b>Lokasi:</b> ${g.location}</p>
        <p><b>Spesialisasi:</b> ${g.specialization}</p>
        <p><b>Bahasa:</b> ${g.language}</p>
        <p><b>Pengalaman:</b> ${g.experience}</p>
        <p><b>WA:</b> ${g.whatsapp}</p>

        <button onclick="deleteGuide(${g.id})" style="margin-top:10px; width:100%; padding:10px; border:none; background:red; color:white; border-radius:10px; cursor:pointer;">
          Hapus
        </button>
      </div>
    `;
  });
}

function addGuide() {
  let name = document.getElementById("guideName").value;
  let location = document.getElementById("guideLocation").value;
  let specialization = document.getElementById("guideSpecialization").value;
  let language = document.getElementById("guideLanguage").value;
  let experience = document.getElementById("guideExperience").value;
  let whatsapp = document.getElementById("guideWhatsapp").value;

  if (name === "" || location === "" || specialization === "" || language === "" || experience === "" || whatsapp === "") {
    alert("Semua data guide wajib diisi!");
    return;
  }

  let guides = JSON.parse(localStorage.getItem("guides")) || [];

  let newGuide = {
    id: Date.now(),
    name: name,
    location: location,
    specialization: specialization,
    language: language,
    experience: experience,
    whatsapp: whatsapp
  };

  guides.push(newGuide);
  localStorage.setItem("guides", JSON.stringify(guides));

  alert("Guide berhasil ditambahkan!");

  document.getElementById("guideName").value = "";
  document.getElementById("guideLocation").value = "";
  document.getElementById("guideSpecialization").value = "";
  document.getElementById("guideLanguage").value = "";
  document.getElementById("guideExperience").value = "";
  document.getElementById("guideWhatsapp").value = "";

  adminLoadGuides();
}

function deleteGuide(id) {
  let guides = JSON.parse(localStorage.getItem("guides")) || [];
  guides = guides.filter(g => g.id !== id);

  localStorage.setItem("guides", JSON.stringify(guides));
  alert("Guide berhasil dihapus!");

  adminLoadGuides();
}
