let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector(".animation-wrapper");

const time_line = new TimelineMax();

// 參數1是要控制的對象
// 參數2是duration
// 參數3是控制的對象的原始狀態
// 參數4是控制的對象動畫結束後的狀態
// 參數5是可以控制其早點或晚點開始
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

//讓網站enter key禁止使用
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//防止form內部的button(trash-button)交出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C+" ||
    target.value == "C" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D+" ||
    target.value == "D" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "white";
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll(".select");
  let gpa = 0;
  let creditTotal = 0;
  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      creditTotal += credits[i].valueAsNumber;
    }
  }
  for (let i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      gpa += GPA(selects[i].value) * credits[i].valueAsNumber;
    }
  }
  let result;
  if (creditTotal == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (gpa / creditTotal).toFixed(2);
  }

  let resultGPA = document.querySelector("#result-gpa");
  resultGPA.innerHTML = result;
}

function GPA(value) {
  let temp = 0;
  if (value == "A") {
    temp = 4.0;
  } else if (value == "A-") {
    temp = 3.7;
  } else if (value == "B+") {
    temp = 3.4;
  } else if (value == "B") {
    temp = 3.0;
  } else if (value == "B-") {
    temp = 2.7;
  } else if (value == "C+") {
    temp = 2.4;
  } else if (value == "C") {
    temp = 2.0;
  } else if (value == "C-") {
    temp = 1.7;
  } else if (value == "D+") {
    temp = 1.4;
  } else if (value == "D") {
    temp = 1.0;
  } else if (value == "D-") {
    temp = 0.7;
  } else if (value == "F") {
    temp = 0.0;
  } else {
    temp = 0.0;
  }
  return temp;
}

let selects = document.querySelectorAll(".select");
selects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target); //e.target就是select.select
  });
});

let credits = document.querySelectorAll(".class-credit");
credits.forEach((credit) => {
  credit.addEventListener("change", (e) => {
    setGPA();
  });
});

let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grade");

  let newInput1 = document.createElement("input");
  newInput1.setAttribute("list", "opt");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("placeholder", "class category");
  newInput1.classList.add("class-type");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.setAttribute("placeholder", "class number");
  newInput2.classList.add("class-number");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA();
  });

  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let newButton = document.createElement("button");
  let newI = document.createElement("i");
  newI.classList.add("fas");
  newI.classList.add("fa-trash");
  newButton.appendChild(newI);
  newButton.classList.add("trash-button");
  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);
  newForm.appendChild(newDiv);

  let allInput = document.querySelector(".all-input");
  allInput.appendChild(newForm);

  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

let trashButtons = document.querySelectorAll(".trash-button");

trashButtons.forEach((trashButton) => {
  trashButton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
});

trashButtons.forEach((trashButton) => {
  let form = trashButton.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");

btn1.addEventListener("click", () => {
  handleSorting("descending");
});

btn2.addEventListener("click", () => {
  handleSorting("ascending");
});

function handleSorting(direction) {
  let grades = document.querySelectorAll(".grade");
  let allInputs = document.querySelector(".all-input");
  let objectArray = [];
  for (let i = 0; i < grades.length; i++) {
    let class_name = grades[i].children[0].value;
    let class_number = grades[i].children[1].value;
    let class_credit = grades[i].children[2].value;
    let class_grade = grades[i].children[3].value;
    if (class_grade == "") {
      window.alert(
        "成績(最後一欄)為必填項目，請填寫該欄位或刪除空白欄位後再做排序"
      );
      return;
    }
    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name: class_name, //跟下面相同
        class_number, //等於 class_number: class_number
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }

  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = GPA(objectArray[i].class_grade); //js直接創造物件新property和method可行
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  //更新頁面法一
  console.log(objectArray.length);
  console.log(grades.length);
  for (let i = 0; i < objectArray.length; i++) {
    grades[i].children[0].value = objectArray[i].class_name;
    grades[i].children[1].value = objectArray[i].class_number;
    grades[i].children[2].value = objectArray[i].class_credit;
    grades[i].children[3].value = objectArray[i].class_grade;
    changeColor(grades[i].children[3]);
  }

  //更新頁面法二
  /*
  // 根據object array的內容，來更新網頁
  let allInputs = document.querySelector(".all-inputs");
  allInputs.innerHTML = "";

  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
    <div class="grader">
        <input
        type="text"
        placeholder="class category"
        class="class-type"
        list="opt"
        value=${objectArray[i].class_name}
        /><!--
        --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value=${objectArray[i].class_number}
        /><!--
        --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="class-credit"
        value=${objectArray[i].class_credit}
        /><!--
        --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
        ><!--
        --><button class="trash-button">
        <i class="fas fa-trash"></i>
        </button>
    </div>
    </form>`;
  }

  // SELECT可直接用JS更改
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade;
  }

  // select事件監聽
  allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  // credit事件監聽
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    credit.addEventListener("change", () => {
      setGPA();
    });
  });

   // 垃圾桶
  let allTrash = document.querySelectorAll(".trash-button");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });
  */
}

function merge(a1, a2) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number <= a2[j].class_grade_number) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  } else if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
