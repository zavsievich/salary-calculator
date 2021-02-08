export default function switcher() {
    const selectors = {
        switcher: '.js-switcher'
    }

    const switcherArray = document.querySelectorAll(selectors.switcher);
    switcherArray.forEach(item => {
        console.log(item);
    })
}