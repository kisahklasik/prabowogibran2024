function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#preview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function drawImage() {

  var twibbon = new Image();
  var picture = new Image();
  var twibbon = document.getElementById('twibbon');
  var picture = document.getElementById('preview');
  var canvas = document.getElementById('cvs');
  var context = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 1080;
  context.drawImage(picture, 0, 0, canvas.width, canvas.height);
  context.drawImage(twibbon, 0, 0, canvas.width, canvas.height);

  var hasil = canvas.toDataURL("image/png");
  document.getElementById('preview').src = hasil;

  console.log("Drew!");

  $('#dpwload').css('display', 'none');
  $('#dpwload2').css('display', 'inline-block');
  $('#dpwload2').attr('href', hasil);
}

$("#fileInput").change(function() {
  readURL(this);
});

// validation

$(document).ready(function() {
$('#dpwload').bind("click",function() 
{ 
var imgVal = $('#fileInput').val(); 
if(imgVal=='') 
{ 
alert("Error!\nTidak ada file yang dipilih! Lanjutkan Download?"); 

} 
return false; 

}); 
});

// Copyright

document.getElementById("copyright").innerHTML = new Date().getFullYear();
