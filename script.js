// Percentage Calculator
function percentage_1() {
  let percent = document.getElementById("percent").value;
  let num = document.getElementById("num").value;
  document.getElementById("value1").value = (num / 100) * percent;
}

// CGPA to Percentage Converter
function cgpaToPercentage() {
  let cgpa = document.getElementById("cgpa").value;
  let scale = document.getElementById("cgpa_scale").value;
  let percentage = scale == 10 ? cgpa * 9.5 : (cgpa / 6) * 100;
  document.getElementById("cgpa_result").value = percentage + "%";
}

// Percentage to CGPA Converter
function percentageToCgpa() {
  let percentage = document.getElementById("percentage").value;
  let scale = document.getElementById("percentage_scale").value;
  let cgpa = scale == 10 ? percentage / 9.5 : (percentage * 6) / 100;
  document.getElementById("cgpa_result_from_percentage").value = cgpa.toFixed(2);
}

// Simple Calculator
function simpleCalculator() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;
  switch (operation) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num1 / num2; break;
  }
  document.getElementById("simple_calc_result").value = result;
}

// Interest Calculator
function calculateInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let time = parseFloat(document.getElementById("time").value);
  let interest = (principal * rate * time) / 100;
  document.getElementById("interest_result").value = interest;
}

// Binary Calculator
function binaryCalculator() {
  let binary1 = document.getElementById("binary1").value;
  let binary2 = document.getElementById("binary2").value;
  let operation = document.getElementById("binary_operation").value;
  let num1 = parseInt(binary1, 2);
  let num2 = parseInt(binary2, 2);
  let result;
  if (operation === 'add') {
      result = (num1 + num2).toString(2);
  } else if (operation === 'subtract') {
      result = (num1 - num2).toString(2);
  }
  document.getElementById("binary_result").value = result;
}

// Marks Obtained Percentage Calculator
function marksPercentage() {
  let marksObtained = document.getElementById("marks_obtained").value;
  let totalMarks = document.getElementById("total_marks").value;
  let percentage = (marksObtained / totalMarks) * 100;
  document.getElementById("marks_percentage_result").value = percentage.toFixed(2) + "%";
}

// Resets for each calculator
function resetPercentageCalculator() {
  document.getElementById('percent').value = '';
  document.getElementById('num').value = '';
  document.getElementById('value1').value = '';
}

function resetMarksPercentageCalculator() {
  document.getElementById('marks_obtained').value = '';
  document.getElementById('total_marks').value = '';
  document.getElementById('marks_percentage_result').value = '';
}

function resetCgpaToPercentageCalculator() {
  document.getElementById('cgpa').value = '';
  document.getElementById('cgpa_scale').selectedIndex = 0;
  document.getElementById('cgpa_result').value = '';
}

function resetPercentageToCgpaCalculator() {
  document.getElementById('percentage').value = '';
  document.getElementById('percentage_scale').selectedIndex = 0;
  document.getElementById('cgpa_result_from_percentage').value = '';
}

function resetSimpleCalculator() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operation').selectedIndex = 0;
  document.getElementById('simple_calc_result').value = '';
}

function resetBinaryCalculator() {
  document.getElementById('binary1').value = '';
  document.getElementById('binary2').value = '';
  document.getElementById('binary_result').value = '';
}
