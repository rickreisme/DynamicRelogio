document.addEventListener('DOMContentLoaded', function() {
  const horas = document.getElementById('horas');
  const minutos = document.getElementById('minutos');
  const segundos = document.getElementById('segundos');

  const boa = document.getElementById('boa');
  const data = document.getElementById('data');

  const relogio = setInterval(function() {
    let dateToday = new Date();

    let dia = dateToday.getDate();
    let mes = dateToday.getMonth()+1;

    let ano = dateToday.getFullYear();

    if(mes<10){
        data.innerHTML = `Hoje é dia ${dia}/0${mes}/${ano}`
    }else{
        data.innerHTML = `Hoje é dia ${dia}/${mes}/${ano}`;
    }

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.textContent = hr < 10 ? '0' + hr : hr;
    minutos.textContent = min < 10 ? '0' + min : min;
    segundos.textContent = seg < 10 ? '0' + seg : seg;

    if (hr >= 0 && hr < 12) {
      boa.innerHTML = `Bom Dia!`;
      document.body.style.background = "linear-gradient(120deg, #21e4eb, #ffffff)";
      boa.style.color = "#000000";
      data.style.color = "#000000";
      document.getElementById('rod').style.color = "#000000";
    } else if (hr >= 12 && hr <= 17) {
      boa.innerHTML = `Boa Tarde!`;
      document.body.style.background = "linear-gradient(120deg, #10b4eb, #ebc94d)";
    } else if (hr >= 17 && hr <= 18) {
      boa.innerHTML = `Boa Tarde!`;
      document.body.style.background = "linear-gradient(120deg, #ffe53bd8, #ff2525da)";
    } else {
      boa.innerHTML = `Boa Noite!`;
      document.body.style.background = "linear-gradient(120deg, #040328d8, #000000)";
    }
  }, 1000);
});