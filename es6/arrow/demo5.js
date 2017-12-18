var button = document.getElementById('myButton1');  
button.addEventListener('click', () => {  
  console.log(this); // => windows boject
 // this.innerHTML = 'Clicked button';
});
var button2 = document.getElementById('myButton2');  
button2.addEventListener('click', function(){  
  console.log(this); // => button object
 // this.innerHTML = 'Clicked button';
});