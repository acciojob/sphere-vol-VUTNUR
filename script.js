function volume_sphere() {
    //Write your code here
  let r=parseFloat(window.document.getElementById("radius").value);
	window.document.getElementById("volume").value=(4/3)*Math.PI*Math.pow(r,3);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
