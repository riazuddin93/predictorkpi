////variables
const calBtn1 = document.getElementById('calculateIncreaseNumberOfPatients');
const calBtn = document.getElementById('calculateIncreaseIncome');
const calBtn2 = document.getElementById('calculateIncreaseProductivity')
const calBtn3 = document.getElementById('calculate4')
const calBtn5 = document.getElementById('calculate5')
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
// Add an event listener to the button
calBtn1.addEventListener('click', calculateIncreasePatientsPerDay)
calBtn.addEventListener('click', calculateIncreaseIncome)
calBtn2.addEventListener('click',calculateProductivity )
calBtn3.addEventListener('click',calculateDiverisyServices)
calBtn5.addEventListener('click',calculateMultipleSales)
