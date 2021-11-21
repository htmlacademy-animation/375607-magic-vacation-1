export default class AccentTypographyBuild {

  constructor(elementSelector, timer, classForActivate, property, daleys = [], inOneLine = false) {

    this.elementSelector = elementSelector;
    this.timer = timer;
    this.classForActivate = classForActivate;
    this.property = property;
    this.daleyWord = this.timer / 2;
    this.daleys = daleys;
    this.inOneLine = inOneLine;

    if (typeof this.elementSelector === `string`) {
      this.element = document.querySelector(this.elementSelector);
    } else {
      this.element = this.elementSelector;
    }

    this.prepareText();
  }

  createElement(letter, offset) {
    const SPECIAL_CHARACTERS = ['/', '—'];

    if (letter === ' ') {
      return '';
    }

    const span = document.createElement(`span`);

    if (SPECIAL_CHARACTERS.indexOf(letter) !== -1) {
      span.classList.add('accept-typography__special');
    }
    span.textContent = letter;
    span.style.transition = `${this.property} ${this.timer}ms ease ${offset}ms`;

    return span;
  }

  prepareText() {

    if (!this.element) {
      return;
    }

    const words = (this.inOneLine) ? [this.element.textContent.trim().replace(/\s/g, '')] : this.element.textContent.trim().split(/[\s]+/);
    const content = words.reduce((fragmentParent, word, idxWord) => {

      let offset = 0;
      const letters = Array.from(word).reduce((letterFragment, letter, idxLetter) => {

        if (this.daleys[idxWord] !== undefined && this.daleys[idxWord][idxLetter] !== undefined) {
          offset = this.daleys[idxWord][idxLetter] + (this.daleyWord * idxWord);
        }
        const element = this.createElement(letter, offset);

        if (element) {
          letterFragment.appendChild(element);
        }

        return letterFragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement('span');
      wordContainer.classList.add('accept-typography');
      wordContainer.appendChild(letters);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = '';
    this.element.appendChild(content);
  }

  runAnimation() {
    if (!this.element) {
      return;
    }

    this.element.classList.add(this.classForActivate);
  }

};
