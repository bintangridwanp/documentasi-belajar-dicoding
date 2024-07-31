try {
    // Code error karena masih ada var yang belum di deklarasi
    const jison = '{ "name": "Yoda", "age": 20 }';

    try {
        const user = JSON.parse(jison);

        if (!user.name) {
            throw new SyntaxError("'name' is required.");
        }

        // Var belum di deklarasi
        errorCode;

        console.log(user.name); // Yoda
        console.log(user.age); // 20
    } catch (error) {
        console.log(`JSON Error: ${error.message}`);
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
/* output
JSON Error: errorCode is not defined
*/

/* output
JSON Error: 'name' is required.
*/
