//FUNCTION FOR SUBMITTING
// accessing all input IDs
const bdate = document.getElementById("date");
let bmonth = document.getElementById("month");
let byear = document.getElementById("year");

const para = document.getElementById("PARA");
const para_one = document.getElementById("PARA1");
const para_two = document.getElementById("PARA2");

//Deleting all inputs
function Delete() {
  para_two.innerHTML = "";
  para_one.innerHTML = "";
  para.innerHTML = "";
  bdate.value = "";
  bmonth.value = "";
  byear.value = "";
   

}

function Calculate() {
  if (bdate.value == "" || bmonth.value == "" || byear.value == "") {
    alert("Please,none of the fields can be left empty!");
  } else if (bdate.value >= 32 || bmonth.value >= 13 || byear.value >= 2023) {
    alert("Please, kindly enter your date of birth appropriately.");
  } else if (bdate.value <= 0 || bmonth.value <= 0 || byear.value <= 1009) {
    alert("Please, kindly enter your date of birth appropriately.");
  } else {
    // current day, month, time
   const today = new Date();
    //year.value
    yyyyyy = today.getFullYear();
    //month.value
    mmmm = today.getMonth() + 1;
    //date.value
    ddd = today.getDate();
    const para = document.getElementById("PARA");
    const para_one = document.getElementById("PARA1");
    const para_two = document.getElementById("PARA2");

    //age derived
    var by = Number.parseFloat(byear.value);
    var bm = Number.parseFloat(bmonth.value);
    var bd = Number.parseFloat(bdate.value);

    var ty = Number.parseFloat(yyyyyy);
    var tm = Number.parseFloat(mmmm);
    var td = Number.parseFloat(ddd);
    //Calculating result

    if (td < bd) {
      para_one.innerHTML =  td - bd + 30 + " days.";
      tm = tm - 1;
    } else {
      para_one.innerHTML =  td - bd + " days.";
    }

    if (tm < bm) {
      para_two.innerHTML = tm - bm + 12 + " months,";
      ty = ty - 1;
    } else {
      para_two.innerHTML = tm - bm + " months,";
    }

    const yearss = "" + (yyyyyy - by) + " years";

    //accessing para tag
    para.innerHTML = `Your age is ${yearss},`;

    //alert(yearss);
    //speaking years
    const speechs = new SpeechSynthesisUtterance();
    speechs.lang = "en-GB";
    speechs.volume = 30;
    speechs.rate = 1;
    speechs.text = `${para.innerHTML}`;
    window.speechSynthesis.speak(speechs);

    //speaking month

    const speechss = new SpeechSynthesisUtterance();
    speechss.lang = "en-GB";
    speechss.volume = 30;
    speechss.rate = 1;
    speechss.text = `${para_two.innerHTML}`;
    window.speechSynthesis.speak(speechss);

    // speaking days
    const speech = new SpeechSynthesisUtterance();
    //setting pros
    speech.lang = "en-GB";
    speech.volume = 30;
    speech.rate = 1;
    speech.text = `${para_one.innerHTML}`;
    window.speechSynthesis.speak(speech);
  }
}
// current day, month, time
today = new Date();
//alert(today);
//year.value
yyyyyy = today.getFullYear();
//month.value
mmmm = today.getMonth() + 1;
//date.value
ddd = today.getDate();

// accessing all today date IDs
const b = document.getElementById("da");
b.innerText = ddd;
const m = document.getElementById("ms");
m.innerHTML = mmmm;
const y = document.getElementById("yrs");
y.innerHTML = yyyyyy;
