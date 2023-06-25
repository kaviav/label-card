document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const paypal = document.getElementById("paypalBtn");
  const masterCard = document.getElementById("masterCardBtn");

  if (myCheckBox.checked) {
    console.log("you are subscribed");
  } else {
    console.log("you are not subscibed");
  }

  if (visaBtn.checked) {
    console.log("you are paying with a visa");
  } else if (masterCard.checked) {
    console.log("you are paying with a master card");
  } else if (paypal.checked) {
    console.log("you are paying with paypal!");
  } else {
    console.log("You must select a payment method");
  }
};
