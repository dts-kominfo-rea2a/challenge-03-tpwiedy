// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  let data = [];
  for (let i = 0; i < dataBelanjaan.length; i++) {
    // looping data
    let loop = "";
    loop += "- " + dataBelanjaan[i].nama + " x " + dataBelanjaan[i].kuantitas;
    // masukan ke array
    data.push(loop);
  }
  return data;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let data = [];
  let sum = 0;
  // array dari summary
  for (let i = 0; i < dataBelanjaan.length; i++) {
    // looping data
    let loop = "";
    loop += dataBelanjaan[i].harga * dataBelanjaan[i].kuantitas;
    // masukan ke array
    data.push(Number(loop));
  }
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
