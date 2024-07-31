// Default function parameters adalah fitur dalam JavaScript yang memungkinkan Anda menentukan nilai default untuk parameter,
// fungsi jika nilai tersebut tidak diberikan atau jika parameter tersebut adalah undefined.

function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* output
2^undefined = NaN
*/