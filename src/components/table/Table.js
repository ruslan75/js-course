import {ExelComponent} from "../../core/ExelComponent";
 import {creatTable} from "./table.template";
import {createResize} from "./table.resize"
import {TableSelection} from "./TableSelection";
import {shouldResize, isCell, matrix, keyEvent} from "./table.function";
import {$} from "../../core/dom";

export class Table extends ExelComponent {
    static className = 'excel__table'

    constructor($root, options) {
      super($root, {
        name: "Table",
        listeners: ['mousedown', 'keydown', 'input'],
        ...options
      })
      this.$root = $root
    }
        toHTML() {
             return creatTable(30)
        }

        prepare() {
          this.selection = new TableSelection()
        }

        init() {
          super.init()
          const $cell = this.$root.find('[data-id="0:0"]')
          this.$on('Formula:text', text => {this.selection.current.text(text)})
          this.$on('Formula:focus', () => {this.selection.current.focus()})
          this.celectCell($cell)
        }

        onInput(event) {
          this.$emit('Table:input', $(event.target))
        }

        onMousedown(event) {
          if (shouldResize(event)) {
             createResize(event, this.$root)
          }
          else if (isCell(event)) {
            const $target = $(event.target)
            if (event.shiftKey) {
              const $cells = matrix($target, this.selection.current)
              .map(id => this.$root.find(`[data-id="${id}"]`))
              this.selection.selectGroup($cells)
           }
           else {
            this.celectCell($target)
           }
          }
        }

        celectCell($cell) {
          this.selection.select($cell)
          this.$emit('Table:text', $cell)
        }

        onKeydown(event) {
          const keys = [
            "Enter",
            "ArrowDown",
            "Tab",
            "ArrowRight",
            "ArrowLeft",
            "ArrowUp"
          ]

          const {key} = event

          if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault()
            const id = this.selection.current.id(true)
            const $next = this.$root.find(keyEvent(key, id))
            this.celectCell($next)
          }
           }
    }