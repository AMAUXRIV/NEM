// synchronus : menunggu 1 hal dulu selesai baru menjalankan yang selanjutnya

// const get = (id)=> {
//   const nama = id ===1 ? 'sandhika' : 'amau';
//   return {id,nama}
// };

// const satu = get(1);
// console.log (satu);

// const dua = get(2);
// console.log (dua);


// const halo = 'hallo deck';
// console.log(halo)

// Asynchronus menjalankan semua dan menghasilkan yang tercepat dahulu
const get = (id,callback) => {
  const time = id === 1 ? 3000 :2000;
  setTimeout(() => {
    const nama = id === 1 ? 'sandhika' : 'amau';
    callback ({id,nama});
  },time); 
};


const satu = get(1,(hasil) => {
  console.log(hasil);
});
const dua = get(2,(hasil) => {
  console.log(hasil);
});

const halo = 'hallo deck';
console.log(halo);