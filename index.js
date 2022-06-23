const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeetRatio = 3.2808399 
const literToGallonRatio = 0.26417205
const kiloToPoundRatio = 2.2046

convertBtn.addEventListener("click", function(){
	const inputValue = inputEl.value
	const metersToFeet = inputValue * meterToFeetRatio
	const feetToMeters = inputValue / meterToFeetRatio
	const litersToGallons = inputValue * literToGallonRatio
	const gallonsToLiters = inputValue / literToGallonRatio
	const kilosToPounds = inputValue * kiloToPoundRatio
	const poundsToKilos = inputValue / kiloToPoundRatio

	lengthInnerHTML = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet
		| ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`

	volumeInnerHTML = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons
		| ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`

	massInnerHTML = `${inputValue} kilos = ${kilosToPounds.toFixed(3)} pounds
		| ${inputValue} pounds = ${poundsToKilos.toFixed(3)} kilos`

	lengthEl.innerHTML = lengthInnerHTML
	volumeEl.innerHTML = volumeInnerHTML
	massEl.innerHTML = massInnerHTML
})
