console.log("Hello World");

const apple = "🍎";
let banana = "🍌";
var carrot = "🥕";
console.log(apple);
console.log(banana);
console.log(carrot);

// Array
const unbap = ["유정섭", "임정현", "전소명", "최혜림", "홍석찬", "정주영"];
console.log(unbap);

// Array - Print all items in the Array every line
for (let i = 0; i < unbap.length; i++) {
  console.log(unbap[i]);
}

// Object
const unbap_data = {
  jungsub: {
    name: "유정섭",
    major: "컴퓨터공학심화",
    home: "서울",
  },
  jeonghyun: {
    name: "임정현",
    major: "컴퓨터공학심화",
    home: "경기도",
  },
  seokchan: {
    name: "석찬",
    major: "컴퓨터공학심화",
    home: "대전",
  },
  somy: {
    name: "전소명",
    major: "컴퓨터공학심화",
    home: "부산",
  },
  hyelim: {
    name: "최혜림",
    major: "컴퓨터공학심화",
    home: "울산",
  },
  zoo: {
    name: "정주영",
    major: "컴퓨터공학심화",
    home: "대구",
  },
};

// 함수 만들기
function getStringName(person) {
  return (
    unbap_data[person].name +
    "은 " +
    unbap_data[person].home +
    "에 살고 있습니다."
  );
}

// 위 와 같은 함수를 arrow function 으로 만들어보세요.

const lookupname = "jungsub";
console.log(getStringName(lookupname));

// const dialogname = prompt("검색할 이름을 알려주세요");
// alert(getStringName(dialogname));

// Callback
const findNameAndPrint = (unbapname, display) => {
  console.log(display(unbapname));
};

findNameAndPrint("somy", getStringName);
findNameAndPrint("hyelim", function (uName) {
  return "안녕하세요 " + unbap_data[uName].name;
});

// Promise
dummyPromise().then((data) => console.log(data));
