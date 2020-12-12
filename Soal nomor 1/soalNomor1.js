function hitungDenda(n) {
  dendaPelajaran = 1000;
  dendaNovel = 2000;
  dendaCerpen = 1500;
  
  
  
 if (n >=  10) {
  console.log("meminjam selama: " + n + " hari");
   if (x = n - 10 ) {
     console.log("Anda telat selama: " + x + " hari");
     console.log("Denda buku mata pelajaran: " + (x * dendaPelajaran));
     console.log("Denda Novel: " + (x * dendaNovel));
     console.log("Denda Cerpen: " + (x * dendaCerpen));
     console.log("Total: " + ((x * dendaPelajaran) + (x * dendaNovel) + (x * dendaCerpen)));
     
     
   }
   
  
 } else {
  console.log("anda tidak telat");
 }
}

hitungDenda(25);