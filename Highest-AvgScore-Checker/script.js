'use strict'


const avgScore = (a,b,c) => (a + b + c)/3

let scoreDolphins = avgScore(44,23,72)
let scoreKoalas  = avgScore(65,54,49)

const checkWinner = function(avgDolphins,avgKoalas){
	if(avgDolphins >= 2 * avgKoalas){
		console.log(`Dolphins wins 🏆 with (${avgDolphins} vs. ${avgKoalas})`)
	}
	else if(avgKoalas >= 2 * avgDolphins){
		console.log(`Koalas wins 🏆 with (${avgKoalas} vs. ${avgDolphins})`)
	}
	else{
	console.log(`No one wins`)
	}
}

checkWinner(scoreDolphins,scoreKoalas)

scoreDolphins = avgScore(85,45,41)
scoreKoalas  = avgScore(23,34,27)
checkWinner(scoreDolphins,scoreKoalas)

	
