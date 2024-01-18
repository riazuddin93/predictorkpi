////variables
const calBtn1 = document.getElementById('calculateIncreaseNumberOfPatients');
const calBtn = document.getElementById('calculateIncreaseIncome');
const calBtn2 = document.getElementById('calculateIncreaseProductivity');
const calBtn3 = document.getElementById('calculate4');
const calBtn5 = document.getElementById('calculate5');
const calBtn6 = document.getElementById('calculateTotal');
const totalSales = document.getElementById('totalSales').value;
const increaseConversionPercentage = document.getElementById('increaseConversionPercentage').value;
//first
function calculateIncreasePatientsPerDay() {
  var CurrentNumberOfPatients = document.querySelector('#currentPatientsPerDay').textContent;
  var increasedPatients = $('#patientsPerDayIncrease').val();
  var b = CurrentNumberOfPatients* increasedPatients;
  var result = $('#resultIncreaseNumberOfPatients');
  result.text(b);
  console.log(CurrentNumberOfPatients)
  
}
///second function
function calculateIncreaseIncome() {
  var numberOfPatients = $('#patientnum').val();
  var increasedIncome = $('#increasedincome').val();
  var potentialIncrease = numberOfPatients * increasedIncome;
  var result = $('#resultIncome');
  result.text(potentialIncrease);
  
}
////third function
function calculateProductivity(){
  var totalSales = $('#totalSales').val();
  var productivityPercentage = $('#increaseConversionPercentage').val();
  var increaseProductivity = totalSales * productivityPercentage;
  var result = $('#resultIncreaseProductivity');
  result.text(increaseProductivity);

}
///////fourth function
function calculateDiverisyServices(){
  var increaseFee = $('#increaseFee').val();
  var numberOfPatients = $('#patientnum').val();
  var resultOfIncrease = increaseFee * numberOfPatients;
  var result = $('#resultIncreaseFeeForPatients');
  result.text(resultOfIncrease);
}
//fifth function
function calculateMultipleSales(){
  var totalSales = $('#totalSales').val(); 
  var multipleSales = $('#multipleSales').val();
  var resultOfIncrease = totalSales * multipleSales;
  var result = $('#resultMultipleSales');
  result.text(resultOfIncrease);
}
function calculateTotal(){
  var resultsOne = parseFloat(document.getElementById('resultIncreaseNumberOfPatients').innerHTML);
  var resultsTwo = parseFloat(document.getElementById('resultIncome').innerHTML);
  var resultsThree = parseFloat(document.getElementById('resultIncreaseProductivity').innerHTML);
  var resultsFour = parseFloat(document.getElementById('resultIncreaseFeeForPatients').innerHTML);
  var resultsFive = parseFloat(document.getElementById('resultMultipleSales').innerHTML);

  var totalOfResults = (resultsOne + resultsTwo + resultsThree + resultsFour + resultsFive);
  
var total = document.getElementById('total');
  total.textContent=totalOfResults;
  console.log(totalOfResults)


 
}
// Add an event listener to the button
calBtn1.addEventListener('click', calculateIncreasePatientsPerDay)
calBtn.addEventListener('click', calculateIncreaseIncome)
calBtn2.addEventListener('click',calculateProductivity )
calBtn3.addEventListener('click',calculateDiverisyServices)
calBtn5.addEventListener('click',calculateMultipleSales)
calBtn6.addEventListener('click', calculateTotal)
