function volume_sphere() {
    //Write your code here
  let r=window.document.getElementById("radius").value
	window.document.getElementById("volume").value=(4/3)*3.14*r*r*r;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
