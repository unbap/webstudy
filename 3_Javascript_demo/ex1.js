console.log("Hello World");

var num = 1;
console.log(num);

let a = 2;
console.log(a);

const b = 3;
console.log(b);

var unbap = ["유정섭", "임정현", "정주영", "전소명", "최혜림", "홍석찬"];
for (let i = 0; i < 6; i++) {
  console.log(unbap[i]);
}

var Unbapp = {
  name: ["유정섭", "임정현", "정주영", "전소명", "최혜림", "홍석찬"],
  age: 21,
  RC: ["로뎀", "비전", "장기려", "최강벧엘", "최강벧엘", "장기려"],
};

/*

Unbapp 에 있는 age 접근
=> 21

let key = input();
유저에게 입력 name => 

Unbapp[key] => 21
Unbapp.key => 21

NULL noNULL
Unbapp.dsfa => NOT NULL => if(Unbapp.dsfa) true
if(Unbapp.dsfa == 1 ) && => ? true

Unbapp.dsfa && Unbapp.dsfa.length() => undefined
Unbapp.name.length();



*/

// Unbapp => ["name", "age", "RC"]
console.log(Object.values(Unbapp));
// Unabapp.empty() // X
// {} { ... }
console.log(Object.values(Unbapp).length === 0);
// 1 == '1'
// 1 === '1' => false

for (let i = 0; i < 6; i++) {
  console.log(Unbapp.name[i] + " " + Unbapp.age + " " + Unbapp.RC[i]);
}

function findRC() {
  var input = prompt("이름을 입력하시오");
  if (Unbapp.name.indexOf(input) == -1) alert("그런 사람 없음.");
  else
    alert(
      input + "은 " + Unbapp.RC[Unbapp.name.indexOf(input)] + "에 거주 중!\n"
    );
}

findRC();
