document.getElementById('color-1').onclick = lightpink;
document.getElementById('color-2').onclick = multicolored;
document.getElementById('color-3').onclick = black;
document.getElementById('color-4').onclick = red;
document.getElementById('color-5').onclick = textureone;
document.getElementById('color-6').onclick = texturetwo;
document.getElementById('color-7').onclick = texturethree;



function lightpink() {
  document.querySelector('path').style.fill = 'lightpink';
  
}

function multicolored() {
    document.querySelector('path').style.fill = 'tan';
    
}

function black() {
    document.querySelector('path').style.fill = 'gray';
    
}

function red() {
    document.querySelector('path').style.fill = 'red';
    
}

function textureone() {
    document.querySelector('path').style.fill = 'lavender';
    
}

function texturetwo() {
    document.querySelector('path').style.fill = 'navajowhite';
    
}

function texturethree() {
    document.querySelector('path').style.fill = 'rgb(52, 146, 209)';
    
}



