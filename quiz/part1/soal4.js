/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    const freq = {};
    let mode = [];
    let max = 1;
    arr.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });

    if (Object.keys(freq).length === 1) {
        return -1;
    }

    for (const num in freq) {
        const frequency = freq[num];
        if (frequency > max) {
            max = frequency;
            mode = [num];
        } else if (frequency === max) {
            mode.push(num);
        } 
    }

    if (max === 1) {
        return -1;
    } else {
        return mode[0];
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
