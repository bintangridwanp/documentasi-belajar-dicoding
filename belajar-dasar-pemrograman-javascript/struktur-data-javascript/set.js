// Set dalam JavaScript mirip dengan array, namun dengan perbedaan utama bahwa setiap nilai di dalamnya harus unik; tidak ada duplikat dalam set.

/*
1. Unik: Setiap nilai di dalam Set harus unik; tidak ada duplikat nilai.
2. Tidak Terurut: Elemen dalam Set tidak diatur dalam urutan tertentu seperti dalam array. Namun, iterasi melalui Set akan menghasilkan elemen-elemen dalam urutan yang tampak acak.
3. Nilai apa pun diterima: Set dapat berisi nilai-nilai dari tipe data apa pun, termasuk nilai primitif dan objek.
 */

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/