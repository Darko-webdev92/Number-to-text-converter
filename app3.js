
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let inputNumber = document.getElementById('number');
let btn = document.getElementById('convert');
let paragraph = document.getElementById('paragraph');
function convert_trillion(num){
    if(num>=1000000000000){ 
        return convert_trillion(Math.floor(num / 1000000000000 )) + " trillion " + convert_billion(num % 1000000000000);
    } else {
        return convert_billion(num);
    }
}

function convert_billion(num){
    if(num >= 1000000000){
        return convert_billion(Math.floor(num /1000000000)) + " billion " + convert_millions(num % 1000000000);
    } else {
        return convert_millions(num);
    }
}

function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
}
console.log(convert_millions(10000000))
function convert_thousands(num) {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if(num == 0 && num.length == 1 ){
    return "zero";
  }else if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}



console.log(convert_trillion(1000000000011));

btn.addEventListener('click', function(e){
    paragraph.textContent = convert_trillion(inputNumber.value);
    
    e.preventDefault()
})

inputNumber.addEventListener('keydown',function(e){
    if(e.keyCode ===13){
        paragraph.textContent = convert_trillion(inputNumber.value);
        e.preventDefault();
    }
})