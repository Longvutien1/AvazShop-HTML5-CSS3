
  // --------------------------------------click bannner-----------------------------------
var headerMain = document.getElementsByClassName("header-main")[0];
var header = document.getElementsByClassName("header")[0];
var iconMenu = document.getElementsByClassName("iconMenu")[0];
document.getElementById("p6_3").style.display = "none";

  function menuDong() {
    headerMain.style.visibility = "hidden";
    headerMain.style.opacity = "0";
    headerMain.style.top =  "45%";
    headerMain.style.transition = "all 0.4s ease-in-out";

    header.style.height = "80px";
    header.style.visibility = "visible";  
    header.style.transition = "all 0.5s ease-in-out"
   document.getElementById("p6_4").style.display = "none";
   document.getElementById("p6_3").style.display = "block";
    
  }

  document.getElementById("p6_4").addEventListener("click",menuDong);

  function menuBanDau() {
    headerMain.style.background =" #3F3F3F ";
    headerMain.style.visibility = "visible ";
    headerMain.style.display = "block";
    headerMain.style.top = "64%";
    headerMain.style.opacity = "2";
    headerMain.style.position = "absolute";
    headerMain.style.transition = " all 0.5s ease-in-out";
    // headerMain.style.width = "100%";

    header.style.height = "122px";
    header.style.transition = "all 0.5s ease-in-out";
    header.style.visibility = "visible";
    document.getElementById("p6_3").style.display = "none";
    document.getElementById("p6_4").style.display = "block";
   

  }

  document.getElementById("p6_3").addEventListener("click", menuBanDau);

    

// ------------------------------------------banner------------------------------------

var kichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("chuyenSlide")[0];
// alert(kichThuoc);
var img = chuyenSlide.getElementsByTagName("img");
var max = kichThuoc *( img.length -1);

var chuyen = 0;

function next() {
    chuyen += kichThuoc;
   if (chuyen > max) {
       chuyen = 0;
   }
    chuyenSlide.style.marginLeft = '-' +chuyen + 'px';
    chuyenSlide.style.transition = "all 1s ease-in-out";
}


function pre() {
    chuyen-= kichThuoc;
    if (chuyen < 0) {
        chuyen = max;
    }
    chuyenSlide.style.marginLeft = '-' +chuyen + 'px';
    chuyenSlide.style.transition = "all 1s ease-in-out";
}

setInterval(function () {
  next();
},3000);
// ------------------------------------------------







//------------------------------------------------banner 2------------------------------------------------

  
 //m???i slide c?? 1 ch??? s??? ri??ng c???a n?? ,????? ????n gi???n ch??ng ta s??? g??n ch??? s??? m???ng cho c??c slide
var slideIndex = 0;
var slideArray = [];
// m???ng l??u tr??? c??c slide c???a ch??ng ta
var currentSlideIndex = 0;
//h??m d?????i ????y s??? gi??p ta t???o ra c??c ?????i t?????ng slide
// bao g???m: ti??u ?????, m?? t??? , ???nh, ???????ng d???n khi nh???p v??o button tr??n slide, v?? id c???a m???i slide
function Slide(title, subtitle, img, textSpan) {
    this.title = title;
    this.subtitle = subtitle;
    this.img = img;
    this.textSpan = textSpan;
//    ch??ng ta c???n m???t id ????? nh???m m???c ti??u sau n??y b???ng c??ch s??? d???ng getElementById
    this.id2 = "slide" + slideIndex;
//t??ng d???n id l??n
    slideIndex++;
// add slide to array
    slideArray.push(this);
}


//t???o c??c ?????i t?????ng slide

var clientsSay = new Slide(
    "CLIENTS SAY",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.",
    "../Assignment/img/logo_banner2.jpg",
    "Andrela"

);

var longChanh = new Slide(
    "V?? Ti???n Long",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.",
    "../Assignment/img/logo_banner2.jpg",
    "Andrela"

);

// T??? m???ng slide ???? t???o, ta ti???n h??nh ????a n?? v??o source HTML
function buildSiver() {
//  T???o m???t bi???n ????? gi??? t???t c??? HTML c???a ch??ng ta
var  myHtml = "";
// b???t ?????u th??m

    for (var j = 0; j < slideArray.length; j++) {
        myHtml+=
        "<div id='" + slideArray[j].id2 + "' class='singleSlide'>" +
        "<div class='slideOverlay' style= '  padding-top: 23px;'>"+
        "<h1 style='padding: 30px;font-weight: 600;font-size: 55px; '>" +
        slideArray[j].title +
        "</h1>" +
        "<h6 style = ' width: 783px;margin: auto;font-size: 14px; '>" +
        slideArray[j].subtitle +
        "</h6>" +
        "<img  src='" +
        slideArray[j].img +
        "'  style=' margin: auto;  padding: 21px; border-radius: 100%'>" +
        "<span>" +
        slideArray[j].textSpan +
        "</span>" +
        "</div>" +
      "</div>";
     
    }
  
      // ????a HTML ch??ng ta v???a t???o v??o id #mySlider
  document.getElementById("mySlider").innerHTML = myHtml;
 
 // ?????ng th???i hi???n th??? slide ?????u ti??n
 document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSiver();

// X??? l?? b???m n??t chuy???n slide tr?????c ????
function prevSlide() {
    // T??m slide tr?????c ????
    var nextSlideIndex;
    // N???u ch??? s??? slide l?? 0, v??? slide cu???i
    if (currentSlideIndex == 0) {
      nextSlideIndex = slideArray.length - 1;
    } else {
      // N???u kh??ng th?? gi???m ch??? s??? ??i 1
      nextSlideIndex = currentSlideIndex - 1;
    }
   
    // ???n slide hi???n t???i, hi???n slide "currentSlideIndex"
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
   
    // Th??m class ????? chuy???n slide c?? animation ???? ?????nh ngh??a ??? b?????c 3
      document
      .getElementById("slide" + nextSlideIndex)
      .setAttribute("class", "singleSlide slideInLeft");
    document
      .getElementById("slide" + currentSlideIndex)
      .setAttribute("class", "singleSlide slideOutRight");
   
    // C???p nh???t gi?? tr??? slide hi???n t???i
    currentSlideIndex = nextSlideIndex;
  }
   
  // X??? l?? b???m n??t chuy???n slide ti???p theo
  // C??ch x??? l?? t????ng t??? nh?? prevSlide ???? tr??nh b??y ??? tr??n
  function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex == slideArray.length - 1) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = currentSlideIndex + 1;
    }
   
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
  
    document
      .getElementById("slide" + nextSlideIndex)
      .setAttribute("class", "singleSlide slideInRight");
    document
      .getElementById("slide" + currentSlideIndex)
      .setAttribute("class", "singleSlide slideOutLeft");
    
    currentSlideIndex = nextSlideIndex;
  }


// ---------------------------------------------------------------

var chuyenSlide2 = document.getElementsByClassName("chuyenSlide_hotDeal")[0];
// var hot = ;

var max2 = 1172;
var kichThuoc2 = 293;
var chuyen2 = 0;

function next3() {
    chuyen2 += kichThuoc2;
  
   if (chuyen2 > max2) {
       chuyen2 = 0;
   }
   console.log(chuyen2);
   chuyenSlide2.style.marginLeft = '-' + chuyen2 + 'px';  
   chuyenSlide2.style.transition = "all 0.5s ease-in-out";
   
   
  
   
}


function pre3() {
    chuyen2 -= kichThuoc2;
    if (chuyen2 < 0) {
        chuyen2 = max2;
    }
    chuyenSlide2.style.marginLeft = '-' + chuyen2 + 'px';
    chuyenSlide2.style.transition = "all 0.5s ease-in-out";
}


// -------------------------product3-------------------------------------

var chuyenSlide3 = document.getElementsByClassName("chuyenSlide_product_Slide3")[0];


var max3 = 720;
var kichThuoc3 = 360;
var chuyen3 = 0;

function next4() {
    chuyen3 += kichThuoc3;
   if (chuyen3 > max3) {
       chuyen3 = 0;
   }
   console.log(chuyen3);
   chuyenSlide3.style.marginLeft = '-' + chuyen3 + 'px';
   chuyenSlide3.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre4() {
    chuyen3 -= kichThuoc3;
    if (chuyen3 < 0) {
        chuyen3 = max3;
    }
    chuyenSlide3.style.marginLeft = '-' + chuyen3 + 'px';
    chuyenSlide3.style.transition = "all 0.5s ease-in-out";
}


// c???t 2


var chuyenSlide4 = document.getElementsByClassName("chuyenSlide_product_Slide4")[0];


var max4 = 720;
var kichThuoc4 = 360;
var chuyen4 = 0;

function next5() {
    chuyen4 += kichThuoc4;
   if (chuyen4 > max4) {
       chuyen4 = 0;
   }
   console.log(chuyen4);
   chuyenSlide4.style.marginLeft = '-' + chuyen4 + 'px';
   chuyenSlide4.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre5() {
    chuyen4 -= kichThuoc4;
    if (chuyen4 < 0) {
        chuyen4 = max4;
    }
    chuyenSlide4.style.marginLeft = '-' + chuyen4 + 'px';
    chuyenSlide4.style.transition = "all 0.5s ease-in-out";
}

// c???t 3

var chuyenSlide5 = document.getElementsByClassName("chuyenSlide_product_Slide5")[0];


var max5 = 720;
var kichThuoc5 = 360;
var chuyen5 = 0;

function next6() {
    chuyen5 += kichThuoc5;
   if (chuyen5 > max5) {
       chuyen5 = 0;
   }
   console.log(chuyen5);
   chuyenSlide5.style.marginLeft = '-' + chuyen5 + 'px';
   chuyenSlide5.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre6() {
    chuyen5 -= kichThuoc5;
    if (chuyen5 < 0) {
        chuyen5 = max5;
    }
    chuyenSlide5.style.marginLeft = '-' + chuyen5 + 'px';
    chuyenSlide5.style.transition = "all 0.5s ease-in-out";
}
