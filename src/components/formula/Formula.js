import {ExelComponent} from "../../core/ExelComponent";

    export class Formula extends ExelComponent {
        constructor($root) {
            super($root, {
                name: 'Formula',
                listeners: ['input', 'click', 'blur']
            })
        }
        static className = 'excel__formula'
        toHTML() {
            return `
            <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
            `
        }

        onInput(event) {
            console.log(this.$root)
            console.log('Formula: onIput', event.target.textContent.trim())
        }

        onClick(event) {
            console.log(event.target)
        }

        onBlur(event) {
            console.log(event.target)
        }
    }