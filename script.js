const MUSIC_LIST = document.querySelector(".music-list a");
const WEB_LIST = document.querySelector(".web-list a");
const WEB_LIST_2 = document.querySelector(".web-list-2 a");
const WORK_LIST = document.querySelector(".work-list a");
const EDU_LIST = document.querySelector(".edu-list a");
const FC_LIST = document.querySelector(".fc-list a");
const GALLERY_LIST = document.querySelector(".gallery-list a");


const TITLES = document.querySelector(".titles");
const RESUME = document.querySelector(".resume");

const MUSIC = document.querySelector(".music");
const WEB = document.querySelector(".web");
const WORK = document.querySelector(".work");
const EDU = document.querySelector(".edu");
const FC = document.querySelector(".fc");
const GALLERY = document.querySelector(".gallery");
const CAROUSEL = document.querySelector(".slideshow-container");

const AVATAR = document.querySelector(".avatar");
const NAV_BAR = document.querySelector(".navigation");

const BIG_DOT = document.querySelector(".big_dot");
const FOOTER = document.querySelectorAll(".foot li");

const WORK_DES_1 = document.querySelector(".work_description_1");
const WORK_DES_2 = document.querySelector(".work_description_2");
const WORK_DES_3 = document.querySelector(".work_description_3");
const WORK_DES_4 = document.querySelector(".work_description_4");
const WORK_DES_5 = document.querySelector(".work_description_5");

const WORK_ITEMS = document.querySelectorAll('.work_item');


const EDU_DES_1 = document.querySelector(".edu_description_1");
const EDU_DES_2 = document.querySelector(".edu_description_2");
const EDU_DES_3 = document.querySelector(".edu_description_3");


const SUB_MENU = document.querySelectorAll(".work_list");
const SUB_MENU_e = document.querySelectorAll(".edu_list");


var section = 0;
var sub_section = 0;


// --------------------------------------------------> REAVEAL SECTIONS
function reveal(section) {
  // e.preventDefault();

  var revealed = false;

  if (section == 1) {  //---------> MUSIC
    MUSIC.classList.toggle("hide");
    MUSIC_LIST.style.textDecoration = "underline double #fda403";

    if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
      WORK_LIST.style.textDecoration = "none";
    }
    if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
      WEB_LIST.style.textDecoration = "none";
    }
    if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
      EDU_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
      FC_LIST.style.textDecoration = "none";
    }
    if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
      GALLERY_LIST.style.textDecoration = "none";
    }

    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }
  else if (section == 2) {  //---------> WEB
    WEB.classList.toggle("hide");
    WEB_LIST.style.textDecoration = "underline double #fda403";

    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
      MUSIC_LIST.style.textDecoration = "none";
    }
    if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
      WORK_LIST.style.textDecoration = "none";
    }
    if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
      EDU_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
      FC_LIST.style.textDecoration = "none";
    }
    if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
      GALLERY_LIST.style.textDecoration = "none";
    }


    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }
  else if (section == 3) {  //---------> WORK
    WORK.classList.toggle("hide");
    WORK_LIST.style.textDecoration = "underline double #fda403";

    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
      MUSIC_LIST.style.textDecoration = "none";
    }
    if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
      WEB_LIST.style.textDecoration = "none";
    }
    if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
      EDU_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
      FC_LIST.style.textDecoration = "none";
    }
    if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
      GALLERY_LIST.style.textDecoration = "none";
    }

    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }
  else if (section == 4) {  //---------> EDUCATION
    EDU.classList.toggle("hide");
    EDU_LIST.style.textDecoration = "underline double #fda403";

    if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
      WORK_LIST.style.textDecoration = "none";
    }
    if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
      WEB_LIST.style.textDecoration = "none";
    }
    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
      MUSIC_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
      FC_LIST.style.textDecoration = "none";
    }
    if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
      GALLERY_LIST.style.textDecoration = "none";
    }

    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }
  else if (section == 5) {  //---------> FOUNDERS & CODERS
    FC.classList.toggle("hide");
    FC_LIST.style.textDecoration = "underline double #fda403";

    if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
      WORK_LIST.style.textDecoration = "none";
    }
    if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
      WEB_LIST.style.textDecoration = "none";
    }
    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
      MUSIC_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
      EDU_LIST.style.textDecoration = "none";
    }
    if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
      GALLERY_LIST.style.textDecoration = "none";
    }

    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }
  else if (section == 6) {  //---------> GALLERY
    GALLERY.classList.toggle("hide");
    GALLERY_LIST.style.textDecoration = "underline double #fda403";

    if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
      WORK_LIST.style.textDecoration = "none";
    }
    if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
      WEB_LIST.style.textDecoration = "none";
    }
    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
      MUSIC_LIST.style.textDecoration = "none";
    }
    if (RESUME.classList.length == 1) {
      RESUME.classList.toggle("hide");
    }
    if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
      EDU_LIST.style.textDecoration = "none";
    }
    if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
      FC_LIST.style.textDecoration = "none";
    }

    BIG_DOT.style.display = "none";
    TITLES.classList.add("titles_small");

    AVATAR.classList.remove("avatar_big");
    AVATAR.classList.add("avatar_small");

    NAV_BAR.classList.remove("nav_bar");
    NAV_BAR.classList.add("nav_bar_small");
    revealed = true;
  }


  footBar();
  
  if ((MUSIC.classList.length == 2) && (WEB.classList.length == 2) && (WORK.classList.length == 2) && (EDU.classList.length == 2) && (FC.classList.length == 2) && (GALLERY.classList.length == 2)){
    RESUME.classList.toggle("hide");
    revealed = false;

    for (var i = 0; i < FOOTER.length; i++) {
      FOOTER[i].style.display = "none";
    }

    MUSIC_LIST.style.textDecoration = "none";
    WEB_LIST.style.textDecoration = "none";
    WORK_LIST.style.textDecoration = "none";
    EDU_LIST.style.textDecoration = "none";
    FC_LIST.style.textDecoration = "none";
    GALLERY_LIST.style.textDecoration = "none";

    BIG_DOT.style.display = "inline-block";
    TITLES.classList.remove("titles_small");

    AVATAR.classList.remove("avatar_small");
    AVATAR.classList.add("avatar_big");

    NAV_BAR.classList.remove("nav_bar_small");
    NAV_BAR.classList.add("nav_bar");
  }


}


// --------------------------------------------------> REVEAL FOOTER
function footBar() {

  for (var i = 0; i < FOOTER.length; i++) {
    FOOTER[i].style.display = "inline-flex";
  }

  BIG_DOT.style.display = "none";
}

// --------------------------------------------------> INIT
function init() {

  if ((MUSIC.classList.length == 1) || (WEB.classList.length == 1) || (WORK.classList.length == 1) || (EDU.classList.length == 1) || (FC.classList.length == 1) || (GALLERY.classList.length == 1) || (CAROUSEL.classList.length == 1)) {
    
    RESUME.classList.toggle("hide");
    revealed = false;


    if (MUSIC.classList.length == 1) {
      MUSIC.classList.toggle("hide");
    }
    else if (WEB.classList.length == 1) {
      WEB.classList.toggle("hide");
    }
    else if (WORK.classList.length == 1) {
      WORK.classList.toggle("hide");
    }
    else if (EDU.classList.length == 1) {
      EDU.classList.toggle("hide");
    }
    else if (FC.classList.length == 1) {
      FC.classList.toggle("hide");
    }
    else if (GALLERY.classList.length == 1) {
      GALLERY.classList.toggle("hide");
    }
    // else if (CAROUSEL.classList.length == 1) {
    //   CAROUSEL.classList.toggle("hide");
    // }


    MUSIC_LIST.style.textDecoration = "none";
    WEB_LIST.style.textDecoration = "none";
    WORK_LIST.style.textDecoration = "none";
    EDU_LIST.style.textDecoration = "none";
    FC_LIST.style.textDecoration = "none";
    GALLERY_LIST.style.textDecoration = "none";

    BIG_DOT.style.display = "inline-block";
    TITLES.classList.remove("titles_small");

    AVATAR.classList.remove("avatar_small");
    AVATAR.classList.add("avatar_big");

    NAV_BAR.classList.remove("nav_bar_small");
    NAV_BAR.classList.add("nav_bar");
  }

  for (var i = 0; i < FOOTER.length; i++) {
    FOOTER[i].style.display = "none";
  }
  BIG_DOT.style.display = "inline-block";
}


// --------------------------------------------------> SUB_MENU

function subMenu(sub_section) {

  SUB_MENU[sub_section].classList.toggle("hide");
}


// --------------------------------------------------> SUB_MENU_EDUCATION

function subMenuE(sub_section) {

  SUB_MENU_e[sub_section].classList.toggle("hide");
}


// ----------------------------------------------------> REVEAL WORK ITEMS LIST

// fire an event when we scroll
window.addEventListener('scroll', reavealWorkItems);

reavealWorkItems();

function reavealWorkItems() {
  // ratio after which the panel is triggered to appear
  const triggerBottom = window.innerHeight / 4 * 3;

  WORK_ITEMS.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  })
}


// ----------------------------------------------------> GALLERY CAROUSEL



const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;

    changeImage();
}

function changeImage() {
    // the *img* is the list of images we have in the image-container
    if(idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0 ) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener('click', () => {
    idx--;

    changeImage();
    resetInterval();
})

rightBtn.addEventListener('click', () => {
    idx++;

    changeImage();
    resetInterval();
})







// ----------------------------------------------------> EVENT LISTENERS

// MUSIC_LIST.addEventListener('click', press, false);
MUSIC_LIST.addEventListener('click', function(){reveal(1);}, false);
WEB_LIST.addEventListener('click', function(){reveal(2);}, false);
WEB_LIST_2.addEventListener('click', function(){reveal(2);}, false);
WORK_LIST.addEventListener('click', function(){reveal(3);}, false);
EDU_LIST.addEventListener('click', function(){reveal(4);}, false);
FC_LIST.addEventListener('click', function(){reveal(5);}, false);
GALLERY_LIST.addEventListener('click', function(){reveal(6);}, false);

AVATAR.addEventListener('click', init, false);
BIG_DOT.addEventListener('click', footBar, false);

WORK_DES_1.addEventListener('click', function(){subMenu(0);}, false);
WORK_DES_2.addEventListener('click', function(){subMenu(1);}, false);
WORK_DES_3.addEventListener('click', function(){subMenu(2);}, false);
WORK_DES_4.addEventListener('click', function(){subMenu(3);}, false);
WORK_DES_5.addEventListener('click', function(){subMenu(4);}, false);

EDU_DES_1.addEventListener('click', function(){subMenuE(0);}, false);
EDU_DES_2.addEventListener('click', function(){subMenuE(1);}, false);
EDU_DES_3.addEventListener('click', function(){subMenuE(2);}, false);

// for (const work_d of WORK_DES) {
//   work_d.addEventListener('click', subMenu, false);
// }

