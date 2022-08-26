const invalidInputError = document.querySelector("#invalid-input-error");
const closeErorrBtn = document.querySelector(".closeErorrBtn");
export function invalideInputErorrFn() {
  invalidInputError.style.right = "25%";
  closeErorrBtn.addEventListener("click", () => {
    invalidInputError.style.right = "-50%";
    setTimeout(() => {
      invalidInputError.style.right = "-50%";
    }, 3000);
  });
}