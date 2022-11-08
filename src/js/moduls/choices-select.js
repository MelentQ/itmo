import Choices from "choices.js";

export default function choicesSelector(){
    const elements = document.querySelectorAll('.js-choice-select');
    elements.forEach(elem => {
        const choices = new Choices(elem, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false
        });
    })
}