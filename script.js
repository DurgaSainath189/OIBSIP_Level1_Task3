const celciusEl=document.querySelector("#celcius");
const fahrenheitEl=document.querySelector("#fahrenheit");
const kelvinEl=document.querySelector("#kelvin");

function celcius_to_fahrenheit(value) {
	fahrenheitEl.value = (value * 9/5)+32;
}
function celcius_to_kelvin(value) {
	kelvinEl.value = value +273.15;
}
function fahrenheit_to_celcius(value) {
	celciusEl.value = (value -32)*5/9;
}
function fahrenheit_to_kelvin(value) {
	kelvinEl.value = (value -32)*(5/9)+273.15;
}
function kelvin_to_celcius(value) {
	celciusEl.value = value -273.15;
}
function kelvin_to_fahrenheit(value) {
	fahrenheitEl.value = (value -273.15)*(9/5)+32 ;
}