const checkButton = document.querySelector("#checkButton");
const initialPrice = document.querySelector("#initialPrice");
const noOfStocks = document.querySelector("#noOfStocks");
const currentPrice = document.querySelector("#currentPrice");
const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  const profit =
    (currentPrice.valueAsNumber - initialPrice.valueAsNumber) *
    noOfStocks.valueAsNumber;
  const profitPercent = (profit / initialPrice.valueAsNumber) * 100;

  if (profit >= 0) {
    answer.innerHTML = `Your Profit is ${profit} and percentage is ${profitPercent}%`;
  } else {
    answer.innerHTML = `Your loss is ${profit * -1} and percentage is ${
      profitPercent * -1
    }%`;
  }
};

checkButton.addEventListener("click", checkButtonHandler);
