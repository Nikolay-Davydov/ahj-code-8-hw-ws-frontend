import Validate from "./validate.js";

export default class Card {
  constructor() {
    this.submit = document.querySelector(".btn");
    this.validate = new Validate();
    this.inputsCheck();
  }

  inputsCheck() {
    let input = document.querySelector(".card_type");
    this.submit.addEventListener("click", () => {
      if (this.validate.validate(document.querySelector(".card_type").value)) {
        let element = document.getElementsByClassName(
          String(
            this.validate.definPaymentSystem(
              document.querySelector(".card_type").value
            )
          )
        );
        element[0].classList.remove("fog");
        input.style.background = "green";
      } else {
        input.style.background = "red";
      }
    });
  }
}
