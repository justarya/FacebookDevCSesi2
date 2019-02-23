function plus(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;
    
    document.getElementById('hasil').value = Number(angka1) + Number(angka2);
  }
  function minus(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;
    
    document.getElementById('hasil').value = Number(angka1) - Number(angka2);
  }
  function multiply(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;
    
    document.getElementById('hasil').value = Number(angka1) * Number(angka2);
  }
  function divide(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;
    
    document.getElementById('hasil').value = Number(angka1) / Number(angka2);
  }
  function clear(){
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    document.getElementById('hasil').value = '';
  }
  
  
  document.getElementById('plus').onclick = plus;
  document.getElementById('minus').onclick = minus;
  document.getElementById('multiply').onclick = multiply;
  document.getElementById('divide').onclick = divide;
  document.getElementById('clear').onclick = clear;