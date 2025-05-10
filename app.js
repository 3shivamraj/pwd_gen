let len = document.querySelector("#len");
let result = document.querySelector("#pwd");
let up = document.querySelector("#up");
let low = document.querySelector("#low");
let num = document.querySelector("#num");
let sym = document.querySelector("#sym");
let all = document.querySelector("#all");
let copy = document.querySelector("#copy");
let gen = document.querySelector("#gen");
let ticks = document.querySelectorAll(".tick");

console.log(up.checked);
console.log(low.checked);
console.log(sym.checked);
console.log(num.checked);
console.log(len.value);

let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
// let number = "1234567890";
let symbol = "!@#$%^&*_+";

gen.addEventListener("click", () => {
  let password = "";
  let total = 0;
  let length = parseInt(len.value);
  let each = 0;

  ticks.forEach((check) => {
    if (check.checked) {
      each++;
    }
  });

  if (each <= 0) {
    alert("tick atleast one box");
  } else if (length > 20) {
    alert("maximum length should be 20");
  } else if (length <= 2 || length ==  null) {
    alert("minimum 3 length required");
  } else {
    for (let i = 0; total < length; i++) {
      if (up.checked && total < length) {
        password += cap.charAt(random_num(26));
        total++;
      }
      if (low.checked && total < length) {
        password += small.charAt(random_num(26));
        total++;
      }
      if (num.checked && total < length) {
        password += Math.floor(random_num(10));
        total++;
      }
      if (sym.checked && total < length) {
        password += symbol.charAt(random_num(symbol.length));
        total++;
      }
    }
  }

  result.textContent = password;
});

// new concept
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.textContent).then(() => {
    alert("password copied");
  });
});

all.addEventListener("change", () => {
  if (all.checked) {
    up.checked = true;
    low.checked = true;
    sym.checked = true;
    num.checked = true;
  } else {
    up.checked = false;
    low.checked = false;
    sym.checked = false;
    num.checked = false;
  }
});

ticks.forEach((tick) => {
  tick.addEventListener("change", () => {
    let allticked = 0;
    // if (!tick.checked) {
    //   all.checked = false;
    // }

    ticks.forEach((t) => {
      if (t.checked) {
        allticked++;
      }
    });

    if (allticked === ticks.length) {
      all.checked = true;
    } else {
      all.checked = false;
    }
  });
});

function random_num(x) {
  let rand = Math.floor(Math.random() * x);
  return rand;
}
