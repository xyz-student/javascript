// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong,year,anotherFamousSong} = band;
document.write(bandName+"<br>");
document.write(famousSong+"<br>");
document.write(year+"<br>");
document.write(anotherFamousSong+"<br>");
