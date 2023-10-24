let numOne = 0,
	numTwo = 1

function currentNum() {
	console.log(numOne, numTwo);


	let nexNum = numOne + numTwo
	numOne = numTwo
	numTwo = nexNum

	if (nexNum >= 1e6) {
		return
	}
	currentNum()
}

currentNum()


// 0 1
//  1 1
//  1 2
//  2 3
//  3 5
//  5 8
//  8 13
//  13 21
//  21 34
//  34 55
//  55 89
//  89 144
//  144 233
//  233 377
//  377 610
//  610 987
//  987 1597
/// Нихуя себе, получилось! я программист уровень: 1000 - 900