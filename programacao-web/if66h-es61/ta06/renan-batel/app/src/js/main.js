const hours   = document.getElementById( "hours" );
const minutes = document.getElementById( "minutes" );
const seconds = document.getElementById( "seconds" );
const day     = document.getElementById( "day" );
const month   = document.getElementById( "month" );
const year    = document.getElementById( "year" );
const months  = [ "JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ" ];

function format( value ) {
  value = value.toString();

  return value.length > 1 ? value : "0" + value;
}

function updateClock() {
  const clock = new Date( Date.now() );
  
  hours.innerHTML   = format( clock.getHours() );
  minutes.innerHTML = format( clock.getMinutes() );
  seconds.innerHTML = format( clock.getSeconds() );
  day.innerHTML     = format( clock.getDay() );
  month.innerHTML   = months[ clock.getMonth() ];
  year.innerHTML    = clock.getFullYear();
}

function init() {
  updateClock();
  setInterval( updateClock, 1000 );
}

window.addEventListener( "DOMContentLoaded", init );