 
//   تغيير الخلفية عند التمرير  

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//    تحديد القسم الحالي نشطاً 

const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

//    قائمة الموبايل 

const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("navLinks");
const hamIcon = document.getElementById("hamIcon");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
  hamIcon.className = navLinksContainer.classList.contains("open") ? "fas fa-times" : "fas fa-bars";
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove("open");
    hamIcon.className = "fas fa-bars";
  });
});

//   إظهار وإخفاء الباسورد  

function togglePass() {
  const input = document.getElementById('passInput');
  const icon = document.getElementById('passIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

//     نظام بحث وفلترة متكامل 

const filterButtons = document.querySelectorAll(".filter");
const carCards = document.querySelectorAll(".car-card");
const searchInput = document.getElementById("searchCar");

function filterAndSearchCars() {
  const activeFilter = document.querySelector(".filter.active").dataset.filter;
  const searchValue = searchInput.value.toLowerCase().trim();

  carCards.forEach(card => {
    const category = card.dataset.category;
    const carName = card.querySelector("h3").textContent.toLowerCase();
    
    const matchesFilter = (activeFilter === "all" || category === activeFilter);
    const matchesSearch = carName.includes(searchValue);

    if (matchesFilter && matchesSearch) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// تشغيل الفلترة عند الضغط على الأزرار

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    filterAndSearchCars();
  });
});

// تشغيل الفلترة والبحث الفوري أثناء الكتابة
searchInput.addEventListener("keyup", filterAndSearchCars);

// ── 6. WISHLIST: زر المفضلة ──
function toggleWish(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  icon.className = btn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
}

// ── 7. REVEAL ANIMATION: إظهار العناصر عند السكرول ──
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
});