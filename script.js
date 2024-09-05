// scripts.js

function calculatePercentage() {
  const marksObtained = parseFloat(document.getElementById('marksObtained1').value);
  const totalMarks = parseFloat(document.getElementById('totalMarks1').value);
  const percentage = (marksObtained / totalMarks) * 100;
  document.getElementById('percentageResult').innerText = 'Percentage: ' + percentage.toFixed(2) + '%';
}

function calculateOverallPercentage() {
  const subjects = document.getElementById('subjects').value.split(',');
  let totalMarks = 0;
  let obtainedMarks = 0;
  subjects.forEach(subject => {
      const [obt, total] = subject.split('/').map(Number);
      obtainedMarks += obt;
      totalMarks += total;
  });
  const overallPercentage = (obtainedMarks / totalMarks) * 100;
  document.getElementById('overallPercentageResult').innerText = 'Overall Percentage: ' + overallPercentage.toFixed(2) + '%';
}

function cgpaToPercentage() {
  const cgpa = parseFloat(document.getElementById('cgpa').value);
  const percentage = (cgpa - 0.75) * 10;
  document.getElementById('cgpaResult').innerText = 'Percentage: ' + percentage.toFixed(2) + '%';
}

function percentageToCGPA() {
  const percentage = parseFloat(document.getElementById('percentage').value);
  const cgpa = (percentage / 10) + 0.75;
  document.getElementById('percentageCGPAResult').innerText = 'CGPA: ' + cgpa.toFixed(2);
}

function simpleCalculator() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;
  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          result = num1 / num2;
          break;
      default:
          result = 'Invalid operation';
  }
  document.getElementById('simpleCalculatorResult').innerText = 'Result: ' + result;
}

function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const time = parseFloat(document.getElementById('time').value);
  const amount = principal * Math.pow(1 + rate, time);
  document.getElementById('interestResult').innerText = 'Amount: ' + amount.toFixed(2);
}