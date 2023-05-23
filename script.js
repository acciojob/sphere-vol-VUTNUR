function volume_sphere() {
    //Write your code here
  let r=parseFloat(window.document.getElementById("radius").value);
	window.document.getElementsByTagName("input")[1].value=(4/3)*3.14*(r*r*r);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
