// console.log ('paan coy ');
// let boyo = "wong gendeng "
// const namaku = (nama) => `hi ,nama saya ${nama}`;
// console.log(namaku(boyo));

// cara menjalankan file coba.js di index.js
// menggunakan require

// const fs = require ('fs'); // core module
// const namaku =require ('./coba') // local module
// const moment = require ('moment'); //third party (moment untuk mengelola waktu tangggal menit detik jam ) / node module / npm modules

//  untuk memanggil sebuah exports dari coba.js yang sudah dijadkan property
const coba =require ('./coba')


console.log(coba.inibebas('amau'),coba.ini_pi,coba.ini_mhs.cetakmhs(),new coba.ini_Orang())