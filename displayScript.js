let output = $(".output");
var textBox = $("#textbox");
var instruction = $("#instructions");
let map = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['eleven', 11],
  ['twelve', 12],
  ['thirteen', 13],
  ['fourteen', 14],
  ['fifteen', 15],
  ['sixteen', 16],
  ['seventeen', 17],
  ['eighteen', 18],
  ['nineteen', 19],
  ['twenty', 20],
  ['Tu', ''],
  /* ['ten', 21],
  ['ten', 22],
  ['ten', 23],
  ['ten', 24],
  ['ten', 25],
  ['ten', 26],
  ['ten', 27],
  ['ten', 28],
  ['ten', 29],
  ['ten', 30],
  ['ten', 31],
  ['ten', 32],
  ['ten', 33],
  ['ten', 34],
  ['ten', 35],
  ['ten', 36],
  ['ten', 37],
  ['ten', 38],
  ['ten', 39],
  ['ten', 40],
  ['ten', 41],
  ['ten', 42],
  ['ten', 43],
  ['ten', 44],
  ['ten', 45],
  ['ten', 46],
  ['ten', 47],
  ['ten', 48],
  ['ten', 49],
  ['ten', 50],
  ['ten', 51],
  ['ten', 52],
  ['ten', 53],
  ['ten', 54],
  ['ten', 55],
  ['ten', 56],
  ['ten', 57],
  ['ten', 58],
  ['ten', 59],
  ['ten', 60],
  ['ten', 61],
  ['ten', 62],
  ['ten', 63],
  ['ten', 64],
  ['ten', 65],
  ['ten', 66],
  ['ten', 67],
  ['ten', 67],
  ['ten', 68],
  ['ten', 69],
  ['ten', 70],
  ['ten', 71],
  ['ten', 72],
  ['ten', 73],
  ['ten', 74],
  ['ten', 75],
  ['ten', 76],
  ['ten', 77],
  ['ten', 78],
  ['ten', 79],
  ['ten', 80],
  ['ten', 81],
  ['ten', 82],
  ['ten', 83],
  ['ten', 84],
  ['ten', 85],
  ['ten', 86],
  ['ten', 87],
  ['ten', 88],
  ['ten', 89],
  ['ten', 90],
  ['ten', 91],
  ['ten', 92],
  ['ten', 93],
  ['ten', 94],
  ['ten', 95],
  ['ten', 96],
  ['ten', 97],
  ['ten', 98],
  ['ten', 99],
  ['ten', 100], */
  ['multiply', '*'],
  ['plus', '+'],
  ['x', '*'],
  ['e', ''],
]);

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
recognition.continuous = true;

var content = "";

recognition.onstart = function () {
  instruction.text("Voice recognition is on");
};

recognition.onspeechend = function () {
  instruction.text("No Activity");
};

recognition.onerror = function () {
  instruction.text("Try again");
};

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;

  // console.log(transcript, 1);

  let splited = transcript.split(" ");
  for (var i = 0; i < splited.length; i++) {
    if (map.has(splited[i])) {
      transcript = transcript.replace(splited[i], map.get(splited[i]));
    }
  }

  // console.log(transcript, 2);
  /* 
    if (transcript.includes("multiply")) {
      transcript = transcript.replace("multiply", "*");
    }
  
    if (transcript.includes("x")) {
      transcript = transcript.replace("x", "*");
    }
  
    if (transcript.includes("plus")) {
      transcript = transcript.replace("plus", "+");
    }
  
    if (transcript.includes("e")) {
      transcript = transcript.replace("e", "");
    }
    */


  let prevContent = content;
  content += transcript;
  let text;

  try {
    text = eval(content);
  } catch (err) {
    console.log('splashed', content);

    content = prevContent;
    text = eval(content);
  }

  textBox.val(content);
  output.val(text);
};

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }

  recognition.start();
});

$("#clear-btn").click(function (event) {
  content = "";
  textBox.val("");
  output.val("");

  console.log(output.value, textBox.value);
});

/* textBox.on('input', function () {
    content = $(this).val();
    console.log(content);
})
*/  