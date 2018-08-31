
$number = 0;
const right = $('.fa-angle-right');
const left = $('.fa-angle-left');

right.click(addRight);
left.click(addLeft);

function addRight(){
  $number++;
  if($number > 4) {
    $number = 0;
  };
  if($number == 0) {
    $('.img3').hide();
    $('.img').fadeIn();
  }
  if($number == 1) {
    $('.img').hide();
    $('.img0').fadeIn();
  } 
  if($number == 2) {
    $('.img0').hide();
    $('.img1').fadeIn();
  } 
  if($number == 3) {
    $('.img1').hide();
    $('.img2').fadeIn();
  } 
  if($number == 4) {
    $('.img2').hide();
    $('.img3').fadeIn();
  }    
}

function addLeft(){
  $number--;  
  if($number < 0) {
    $number = 4;
  };
  if($number == 0) {
    $('.img0').hide();
    $('.img').fadeIn();
  }
  if($number == 1) {
    $('.img1').hide();
    $('.img0').fadeIn();
  } 
  if($number == 2) {
    $('.img2').hide();
    $('.img1').fadeIn();
  } 
  if($number == 3) {
    $('.img3').hide();
    $('.img2').fadeIn();
  } 
  if($number == 4) {
    $('.img').hide();
    $('.img3').fadeIn();
  }  
  if($number > 4) {
    $number = 0;
  };  
}