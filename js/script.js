// Toggle menu + change icon
document.querySelector(".toggler").addEventListener("click", function () {
  const menu = document.querySelector(".menu-part");
  const icon = this.querySelector("i");
  menu.classList.toggle("d-block");

  // Switch icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Auto close when clicking a nav link
document.querySelectorAll(".menu-part a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".menu-part").classList.remove("d-block");

    const icon = document.querySelector(".toggler i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// active in nav bar
let navlinks = document.querySelectorAll(".menu-part ul li a");
let menuPart = document.querySelector(".nav-wrapper .menu-part");
let toggleIcon = document.querySelector(".toggler i");

// Loop through all nav links
for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
        // Remove old active link
        for (let j = 0; j < navlinks.length; j++) {
            navlinks[j].classList.remove("active");
        }

        // Add active class to current link
        this.classList.add("active");

        // Hide menu after click (remove .d-block class)
        if (menuPart) {
            menuPart.classList.remove("d-menu");
        }

        // Reset toggler icon back to bars
        if (toggleIcon) {
            toggleIcon.classList.remove("fa-xmark");
            toggleIcon.classList.add("fa-bars");
        }
    });
}

// Project Filter” or “Category Filter” feature
let projects = document.querySelectorAll(".project");
console.log(projects);
function filterProjects(catagory) {
  if (catagory === "all") {
    projects.forEach(function (project) {
      project.style.display = "block";
    });
  } else {
    projects.forEach(function (project) {
      project.style.display = "none";
    });
    // To show a particular project
    let selectedprctCatagory = document.querySelectorAll("." + catagory);
    selectedprctCatagory.forEach(function (project) {
      project.style.display = "block";
    });
  }
}

// stroke svg percentage
window.onload = function () {
  let meter = document.querySelectorAll(".meter");

  meter.forEach(function (meter, i) {
    // console.log(i);
    let percent = meter
      .closest(".item")
      .querySelector("h4")
      .textContent.replace("%", "");

    // total circle length=377;
    let total = 377;

    let offset = total - (total * percent) / 100;

    meter.style.strokeDashoffset = offset;
  });
};


// scroll - up - btn
let btn = document.getElementById("scrollBtn");
window.addEventListener("scroll", function () {
    //page scroll
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //displayarea height
    let windowHeight = window.innerHeight;
    // total document height
    let docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // ✅ smooth animation
    });
});

//sticky-navbar on tablet screen 
let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navBar.classList.add("sticky");
    }
    else {
        navBar.classList.remove("sticky");
    }
});

