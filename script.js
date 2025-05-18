function autoCalculate() {
    let balls = [
      parseInt(document.getElementById("b1").value),
      parseInt(document.getElementById("b2").value),
      parseInt(document.getElementById("b3").value),
      parseInt(document.getElementById("b4").value),
      parseInt(document.getElementById("b5").value),
      parseInt(document.getElementById("b6").value)
    ];
    let additional = parseInt(document.getElementById("add").value);
  
    if (balls.some(isNaN) || isNaN(additional)) {
      document.getElementById("output").innerText = "----";
      return;
    }
  
    balls.sort((a, b) => a - b);
  
    let total = balls.reduce((a, b) => a + b, 0) * 2;
    total -= balls[0] + balls[5];
    total += additional;
  
    let puluhan = total % 100;
    let ratusan = (balls[3] + balls[4]) % 10;
    let ribuan = (balls[1] + balls[2]) % 10;
  
    let result = `${ribuan}${ratusan}${puluhan.toString().padStart(2, '0')}`;
    document.getElementById("output").innerText = result;
  }
  
  function resetForm() {
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`b${i}`).value = '';
    }
    document.getElementById("add").value = '';
    document.getElementById("output").innerText = "0000";
  }
  