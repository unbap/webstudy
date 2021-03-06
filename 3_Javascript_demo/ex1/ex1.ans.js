console.log("Hello World");

const apple = "π";
let banana = "π";
var carrot = "π₯";
console.log(apple);
console.log(banana);
console.log(carrot);

// Array
const unbap = ["μ μ μ­", "μμ ν", "μ μλͺ", "μ΅νλ¦Ό", "νμμ°¬", "μ μ£Όμ"];
console.log(unbap);

// Array - Print all items in the Array every line
for (let i = 0; i < unbap.length; i++) {
  console.log(unbap[i]);
}

// Object
const unbap_data = {
  jungsub: {
    name: "μ μ μ­",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "μμΈ",
  },
  jeonghyun: {
    name: "μμ ν",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "κ²½κΈ°λ",
  },
  seokchan: {
    name: "μμ°¬",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "λμ ",
  },
  somy: {
    name: "μ μλͺ",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "λΆμ°",
  },
  hyelim: {
    name: "μ΅νλ¦Ό",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "μΈμ°",
  },
  zoo: {
    name: "μ μ£Όμ",
    major: "μ»΄ν¨ν°κ³΅νμ¬ν",
    home: "λκ΅¬",
  },
};

// ν¨μ λ§λ€κΈ°
function getStringName(person) {
  return (
    unbap_data[person].name +
    "μ " +
    unbap_data[person].home +
    "μ μ΄κ³  μμ΅λλ€."
  );
}

// μ μ κ°μ ν¨μλ₯Ό arrow function μΌλ‘ λ§λ€μ΄λ³΄μΈμ.

const lookupname = "jungsub";
console.log(getStringName(lookupname));

// const dialogname = prompt("κ²μν  μ΄λ¦μ μλ €μ£ΌμΈμ");
// alert(getStringName(dialogname));

// Callback
const findNameAndPrint = (unbapname, display) => {
  console.log(display(unbapname));
};

findNameAndPrint("somy", getStringName);
findNameAndPrint("hyelim", function (uName) {
  return "μλνμΈμ " + unbap_data[uName].name;
});

// Promise
dummyPromise().then((data) => console.log(data));
