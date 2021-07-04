const allDocs = document.querySelectorAll(
  "body > table:nth-child(12) > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:not(:first-child):not(:last-child)"
);
// allDocs.forEach((d) =>
//   console.log(d.querySelector("td:nth-child(2)").textContent)
// );

/*

a && b 
a || b

*/
const allAnnName = [];
for (let i = 0; i < allDocs.length; i++) {
  const name =
    allDocs[i].querySelectorAll("td")[1] &&
    allDocs[i].querySelectorAll("td")[1].textContent.trim();
  // console.log(name);
  allAnnName.push(name);
}
console.log(allAnnName);

/*


*/

const allAnnObjects = [];
for (let i = 0; i < allDocs.length; i++) {
  const contents = allDocs[i].querySelectorAll("td");
  if (!contents) continue;
  // console.log(contents);
  allAnnObjects.push({
    no: contents[0] && contents[0].textContent.trim(),
    name: contents[1] && contents[1].textContent.trim(),
    author: contents[3] && contents[3].textContent.trim(),
    date: contents[4] && contents[4].textContent.trim(),
  });
}

console.log(allAnnObjects);

const nodeButton = document.createElement("button");
nodeButton.textContent = "버튼";
nodeButton.onclick = (event) => {
  // Add Search Logic event
  const searchId = prompt("검색할 공지 번호");
  alert(allAnnObjects.find((d) => d.no === searchId).name);
};
document.body.prepend(nodeButton);

const nodeInput = document.createElement("input");
nodeInput.onkeyup = (event) => {
  const searchKeyword = event.target.value;
  for (let i = 0; i < allDocs.length; i++) {
    const name =
      allDocs[i].querySelectorAll("td")[1] &&
      allDocs[i].querySelectorAll("td")[1].textContent.trim();

    if (name.includes(searchKeyword)) {
      allDocs[i].style.backgroundColor = "yellow";
    } else {
      allDocs[i].style.backgroundColor = "";
    }
  }
};
document.body.prepend(nodeInput);
console.log(nodeInput);
