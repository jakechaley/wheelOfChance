function rotateFunction(){
  let min = 1024;
  let max = 9999;
  let deg = Math.floor(Math.random() * (min-max)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)"
}