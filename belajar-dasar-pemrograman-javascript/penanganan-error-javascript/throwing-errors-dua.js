// Code error
// Karena jason dalam bentuk object
const jason = "{ bad json }";

// JSON.parse akan menimbulkan eror.
// Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.
try {
  const user = JSON.parse(jason);

  // Untuk mengatasinya, kita bisa menggunakan throw.
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  // Kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
