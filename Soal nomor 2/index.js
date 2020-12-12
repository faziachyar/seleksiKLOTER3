function hitungHuruf(x, y) {
    var cekHuruf = 0;
    for (var posisi = 0; posisi < x.length; posisi++) {
        if (x.charAt(posisi) == y) {
            cekHuruf += 1;
        }
        return cekHuruf;
    }
    console.log(`huruf a muncul sebanyak` + cekHuruf);
}

hitungHuruf("Aku calon peserta bootcamp dumbways", 'a');

// function hitungHuruf(kalimat, huruf) {
//     if (hitung = (kalimat.match(/huruf/g) || []).length) {
//         console.log("huruf muncul sebanyak " + hitung + " kali");
//     }

// }

// hitungHuruf("fazriachyarrozaq", "a");