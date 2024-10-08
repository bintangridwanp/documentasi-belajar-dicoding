/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


const util = require('util');

// Fungsi callback-based getProvinces
function getProvinces(countryId, callback) {
    setTimeout(() => {
        if (countryId === 'id') {
            callback(null, [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
            return;
        }

        callback(new Error('Country not found'), null);
    }, 1000);
}

// Mengubah fungsi getProvinces menjadi Promise-based menggunakan util.promisify
const getProvincesAsync = util.promisify(getProvinces);

// Mengekspor fungsi Promise-based dengan nama properti yang sama
module.exports = { getProvinces: getProvincesAsync };
