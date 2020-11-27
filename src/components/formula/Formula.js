import {$} from "../../core/dom";
import {ExelComponent} from "../../core/ExelComponent";

    export class Formula extends ExelComponent {
        static className = 'excel__formula'
        constructor($root, options) {
            super($root, {
                name: 'Formula',
                listeners: ['input', 'keydown'],
                ...options
            })
        }

        toHTML() {
            return `
            <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false" data-type="input"></div>
            `
        }

        onInput(event) {
            this.$emit('Formula:text', $(event.target).text())
        }

        init() {
            super.init()
            this.$formula = this.$root.find(`[data-type="input"]`)
            this.$on('Table:text', $cell => {this.$formula.text($cell.text())})
            this.$on('Table:input', $cell => {this.$formula.text($cell.text())})
        }

        onKeydown(event) {
            if (event.key === 'Enter') {
                event.preventDefault()
                this.$emit('Formula:focus')
            }
        }
    }