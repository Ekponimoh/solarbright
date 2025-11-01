"use strict";

//NAV TOGGLE
document.addEventListener("DOMContentLoaded", ()=> {
  const header = document.querySelector(".header");
  const btnNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".header__link");

  //TOGGLE NAV
  btnNav.addEventListener('click', ()=> {
    header.classList.toggle('nav-open');
     console.log("button clicked");
  });

  //close nav when a link is clicked
  navLinks.forEach((link)=> {
    link.addEventListener('click',()=> {
      header.classList.toggle("nav-open");
    });
  });

  //close when clicking outside
  document.addEventListener('click', (e) => {
    if(!header.contains(e.target) && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
    }
  });
 
});



//ACTIVE LINK
const headerLinks = document.querySelectorAll(".header__link");
headerLinks.forEach((link)=> {
  link.addEventListener('click',()=> {
    headerLinks.forEach((I)=> I.classList.remove("active"));
    link.classList.add("active");
  });
});


//FADE INS
 const fadeIns = document.querySelectorAll(".fade-in");

 const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
     entries.forEach((entry)=> {
      if(!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
     });
  },
   {
    threshold: 0.3,
   }
 );

 fadeIns.forEach((el) => appearOnScroll.observe(el));

    // ACCORDION
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const icon = header.querySelector(".accordion-icon");

    // Close all others first
    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".accordion-icon").textContent = "+";
      }
    });

    // Toggle clicked one
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});


//MODAL POPUP
 
// ================= MODALS =================
const modals = {
  eligibility: document.querySelector("#eligibilityModal"),
  quote: document.querySelector("#quoteModal"),
  call: document.querySelector("#callModal"),
};

const triggers = {
  eligibility: document.querySelectorAll(".open-eligibility"),
  quote: document.querySelectorAll(".open-quote"),
  call: document.querySelectorAll(".open-call"),
};

const closeBtns = document.querySelectorAll(".close-modal");

// ===== Scroll Lock Helpers =====
function lockScroll() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.paddingRight = `${scrollBarWidth}px`;
}

function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.documentElement.style.paddingRight = "";
}

// ===== Open Modals =====
Object.keys(triggers).forEach((key) => {
  triggers[key].forEach((btn) => {
    btn.addEventListener("click", () => {
      modals[key].classList.add("active");
      lockScroll();
    });
  });
});

// ===== Close Modals =====
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    Object.values(modals).forEach((m) => m.classList.remove("active"));
    unlockScroll();
  });
});

// ===== Close when clicking overlay =====
window.addEventListener("click", (e) => {
  Object.values(modals).forEach((m) => {
    if (e.target === m) {
      m.classList.remove("active");
      unlockScroll();
    }
  });
});

// ===== Form Submission (Dummy) =====
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your form has been submitted successfully.");
    form.reset();
    Object.values(modals).forEach((m) => m.classList.remove("active"));
    unlockScroll();
  });
});


//SCROLL TO TOP
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", ()=> {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  }else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener('click', ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});