let meyveler = ["karpuz", "çilek", "ananas","kivi","vişne"];

//dizinin sonuna push metodu ile 3 eleman ekledik!
//meyveler.push("ARMUT", "ELMA", "KİVİ");
//console.log(meyveler);

//dizideki elemanları reserve() metodu ile tersten sıraladık!
document.write("<p>");
document.write("//dizideki elemanları reserve() metodu ile tersten sıraladık!");
document.write("<br/>");
document.write(meyveler.reverse());
document.write("</p>");
 
//Dizinin ilk elemanını silmek için shift() metodu kullanılır.
document.write("<p>");
document.write("Dizinin ilk elemanını  silmek için shift() metodunu kullandık");
document.write("<br>");
meyveler.shift();
document.write(meyveler);
document.write("</p>");


document.write("<p>");
document.write("Dizinin başına eleman eklemek için unshift metodunu kullandık");
document.write("<br>");
meyveler.unshift(1,"Kiraz", "KIRAZ", "Yeni Dünya");
document.write(meyveler);
document.write("<p>");

document.write("<p>");
document.write("Dizideki eLemanların büyükten küçüğer doğru sıralanması");
document.write("<br/>");
var sirano= meyveler.sort(azalan);
  meyveler.sort(function azalan (a, b){return b - a});
  document.write(meyveler);
document.write("<p>");

document.write("<p>");
document.write("spice metodu ile dizinin ilk iki elemanını silip 1 tane geri eleman ekledik");
document.write("<br />")
meyveler.splice(2, "Şeftali,");
meyveler.splice(0,1, "Şeftali");
document.write(meyveler);
document.write("</p>");

document.write("<p>");
let meyvelera = ["karpuz", "çilek", "ananas","kivi",];
var a = meyvelera.slice(2,5);
document.write(a);