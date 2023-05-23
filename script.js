function volume_sphere() {
    //Write your code here
  let r=window.document.getElementByIdName("radius").value
	window.document.getElementByIdName("volume").value=(4/3)*3.14*r*r*r;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
