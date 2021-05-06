import "minireset.css";
import "./style.css";

const checkboxList = document.querySelectorAll(".my-checkbox");
for (const c of checkboxList) {
  applyCheckbox(c);
}

function applyCheckbox(myCheckbox) {
  const checkInput = myCheckbox.querySelector(`input[type="checkbox"]`);
  const checkMark = myCheckbox.querySelector(`.check-mark`);

  checkInput.addEventListener("input", () => {
    const check = checkInput.checked;
    if (check) {
      checkMark.classList.add("is-checked");
    } else {
      checkMark.classList.remove("is-checked");
    }
  });
}
