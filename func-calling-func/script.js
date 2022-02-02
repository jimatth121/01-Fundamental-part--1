'use strict'


const cutPieces = function(fruit){
	return fruit * 4
}

const fruitProcessor = function(apples, oranges){
	const applePieces = cutPieces(apples)
	const orangePieces = cutPieces(oranges)
	const juice = `Juice wit ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
	return juice
}

console.log(fruitProcessor(10,15))



// yearsUntilRtirement Calculator
// fuction calling function


const calcAge = function(birthYear){
    return 2022 - birthYear
}

const yearsUntilRetirement = function(birthYear,name1){
    const age = calcAge2(birthYear)
    const years = 65 -age
    return`${name1} will retire in ${years} years`
}
console.log(yearsUntilRetirement(1999,'matthew'))

