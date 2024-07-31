// konsep truthy dan falsy merujuk pada nilai-nilai yang dievaluasi sebagai true atau false dalam konteks boolean.

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */