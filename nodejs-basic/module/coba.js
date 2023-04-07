function namaku (nama){
    return `nama ku adalah ${nama}`;

}
const pi =3.14 
const mahasiswa = {
    nama : 'mahasiswa ',
    umur : 20,
    cetakmhs (){
        return `saya adalah ${this.nama} yang berumur ${this.umur}`
    },
};

class Orang {
    constructor() {
        console.log('Objek orang telah di instansi')
    }
};
// ================= Mengakses Local Module =============================
// untuk mengekspor 
// module.exports = namaku; - contoh untuk mengekspor satu saja
 //=========================
 // dan ini untuk exports beberapa teapi dijadikan property 
// module.exports.inibebas = namaku;
// module.exports.ini_pi = pi;
// module.exports.ini_mhs= mahasiswa;
// module.exports.ini_Orang = Orang;

// dengan kata lain bisa seperti ini juga

module.exports= {
    ini_Orang : Orang ,
    ini_pi : pi,
    ini_mhs : mahasiswa,
    inibebas : namaku 

};

// bisa juga seperti ini dengan kata lain artinya nanti antara key dan value itu sama
module.exports = {Orang,pi,mahasiswa,namaku};
// =================  end Mengakses Local Module =============================