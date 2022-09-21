const checkButton = document.querySelector("#checkButton");
const initialPrice = document.querySelector("#initialPrice");
const noOfStocks = document.querySelector("#noOfStocks");
const currentPrice = document.querySelector("#currentPrice");
const answer = document.querySelector("#answer");

const valueReset = () => {
  initialPrice.value = ""
  noOfStocks.value = ""
  currentPrice.value = ""
}

const checkButtonHandler = () => {
  const initial = initialPrice.valueAsNumber
  const current = currentPrice.valueAsNumber
  const stocks = noOfStocks.valueAsNumber
  console.log(`initial = ${initial} ,,,, current ${current}`)

  if(initial < 0 || current < 0 || stocks < 0){
    answer.innerHTML = `Values can't be negative!`
    valueReset()
    return
  }

  if(initial > current) {
    const loss = (initial - current) * stocks
    const lossPercentage = (loss/initial) * 100
    answer.innerHTML = `Your Loss is ${loss} and percentage is ${lossPercentage}%`
    valueReset()
    return 
  }else if (initial < current){
    const profit = (current - initial) * stocks;
    const profitPercentage = (profit / initial) * 100;
    answer.innerHTML = `Your Profit is ${profit} and percentage is ${profitPercentage}%`
    valueReset()
    return
  }
  else{
    answer.innerHTML = `Do something in life!`
    return
  }

};
checkButton.addEventListener("click", checkButtonHandler);
