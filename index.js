class Sum {
    constructor() {
      this.l_num = document.querySelector('input[name="l_num"]');
      this.r_num = document.querySelector('input[name="r_num"]');
      this.sum = document.querySelector("#sum");
      this.show_sum = document.querySelector("#show_sum");
      this.operation = document.querySelector(
        'select[name="mathOperations"]'
      );
    }

    showSum() {
      this.sum.addEventListener("click", () => {
        const l_sum = parseInt(this.l_num.value);
        const r_sum = parseInt(this.r_num.value);
        if (isNaN(l_sum) || isNaN(r_sum)) {
          this.show_sum.innerHTML = "error";
        } else {
          if (this.operation.value === "+") {
            this.show_sum.innerHTML = l_sum + r_sum;
          } else if (this.operation.value === "-") {
            this.show_sum.innerHTML = l_sum - r_sum;
          } else if (this.operation.value === "/") {
            this.show_sum.innerHTML = l_sum / r_sum;
          } else if (this.operation.value === "*") {
            this.show_sum.innerHTML = l_sum * r_sum;
          }
        }
      });
    }
  }

  let sum = new Sum();
  sum.showSum();