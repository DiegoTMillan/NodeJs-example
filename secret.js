// console.log(
//   require("crypto")
//     .createHmac("sha256", "Fullstack 10")
//     .update("stronger together")
//     .digest("hex")
// );
console.log(
  require("crypto")
    .createHmac("sha256", "soy Diego programando")
    .update("made with love by Diego Tapia")
    .digest("hex")
);
