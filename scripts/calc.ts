export default function calculation() {
    const selectors = {
        calcContainer: ".js-calc",
        input: "[data-field]",
        result: "[data-result]"
    }

    const calcContainer = document.querySelector(selectors.calcContainer);
    const input = <HTMLInputElement>calcContainer.querySelector(selectors.input);
    const result = <HTMLElement>calcContainer.querySelector(selectors.result);

    input.addEventListener('input', function (event) {
        if (input.value !== "") {
            result.removeAttribute('hidden');
            result.innerText = input.value;
        } else {
            result.setAttribute('hidden', 'true');
            result.innerText = "";
        }
    })
}