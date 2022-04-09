//ref https://dribbble.com/shots/3278810-I-Love-You-Responsive

setTimeout(function(){
    window.location.href = "index.html";
}, 5000);
//reset animations
setInterval(()=>{
    let el = document.getElementById('love')
    var newone = el.cloneNode(true);
    el.parentNode.replaceChild(newone, el);
  }, 4000);

