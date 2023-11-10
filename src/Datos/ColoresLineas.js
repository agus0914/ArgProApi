/* {
  "153A": ["#999999", "#fe0000"],
  "321A": ["#99999b", "#fd0200"],
  "159J": ["#ffffff", "#026701"],
  "219R3R": ["#ffffff", "#026701"],
  "7A" : ["#0033fe" , "#fffeff"],
  "158A" : ["#fe0000" , "#fffffb" ],
  "148A" : ["#ffca08" , "#049936"] ,
  "159E" : ["#ffffff" , "#006701"] ,
  "372A" : ["#fcfcfc" , "#016703"] 
} */

let map = new Map();

let color153 = ["#999999", "#fe0000"];
let color321 = ["#99999b", "#fd0200"];
let color159_219 = ["#ffffff", "#026701"];
let color7 = ["#0033fe", "#fffeff"];
let color158 = ["#fe0000", "#fffffb"];
let color148 = ["#ffca08", "#049936"];

["153A"].forEach((key) => map.set(key, color153));
["321A"].forEach((key) => map.set(key, color321));
[
  "159A",
  "159B",
  "159C",
  "159D",
  "159E",
  "159K",
  "159I",
  "219R3R",
  "219R3N",
  "219R5",
].forEach((key) => map.set(key, color159_219));
["7A", "7B"].forEach((key) => map.set(key, color7));
["158A"].forEach((key) => map.set(key, color158));
["148A", "148B", "148D", "148F", "148H", "148I", "148J"].forEach((key) =>
  map.set(key, color148)
);

export default map;