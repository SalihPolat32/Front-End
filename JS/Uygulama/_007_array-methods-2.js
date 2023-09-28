//Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
/*
// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((element) => {
  console.log(eleman);
});
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach(function (eleman) {
  if (eleman % 2 === 0) {
    console.log(eleman);
  }
});
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const yeniDizi = [];

dizi.forEach(function (eleman) {
  const sonuc = eleman * 2;
  yeniDizi.push(sonuc);
});

console.log(yeniDizi);
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let toplam = 0;

dizi.forEach(function (eleman) {
  toplam += eleman;
});
console.log(toplam);
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.

const length = dizi.length;
dizi.forEach(function (eleman) {
  if (index < length - 1) {
    console.log(eleman);
  } else {
    console.log(`Özel mesaj: ${eleman}`);
  }
});
*/
/*
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const newArray = dizi1.map((item) => {
  return item.toUpperCase();
});
console.log(newArray);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const newArray2 = dizi.map((item) => {
  return item + Math.floor(Math.random() * 10) + 1;
});
console.log(newArray2);
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const newArray3 = dizi1.map((item) => {
  return item.split("").reverse().join("");
});
console.log(newArray3);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const newArray4 = dizi.map((item) => {
  return item.toString();
});
console.log(newArray4);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const newArray3 = dizi1.map((item) => {
  let tersCevrilmis = "";
  for (let i = item.length - 1; i >= 0; i--) {
    tersCevrilmis += item[i];
  }
  return tersCevrilmis;
});
console.log(newArray3);
*/

// ---------------filter-------------------
/*
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const filterDizi = dizi.filter((x) => x % 2 === 0);
console.log(filterDizi);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const filterDizi = dizi1.filter((x) => x.length === 4);
console.log(filterDizi);
*/

// ---------------reduce-------------------
/*
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.

const eklenmisDizi = dizi.reduce((number,toplam) => number + 2 + toplam, 0);
console.log(eklenmisDizi);
*/

// ---------------find-------------------
/*
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

const ilkCiftSayi = dizi.find((item) => item % 2 === 0);
console.log(ilkCiftSayi);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

const sonCiftSayi = dizi.findLast((item) => item % 2 === 0);
console.log(sonCiftSayi);
*/

// ---------------some-------------------
/*
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

const someNegatif = dizi.some((sayi) => sayi < 0);
console.log(someNegatif);
*/

// ---------------every-------------------
/*
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const everyPositive = dizi.every((sayi) => sayi > 0);
console.log(everyPositive);
*/

// ---------------sort-------------------
/*
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const sortedArray = dizi2.sort((a, b) => a - b);
console.log("Siralanan Dizim : ", sortedArray);
*/
