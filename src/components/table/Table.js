import {ExelComponent} from "../../core/ExelComponent";
 import {creatTable} from "./table.template";
import {createResize} from "./table.resize"

export class Table extends ExelComponent {
    static className = 'excel__table'

    constructor($root) {
      super($root, {
        name: "Table",
        listeners: ['mousedown']
      })
      this.$root = $root
    }
        toHTML() {
             return creatTable(30)
        }

        onMousedown(e) {
          return createResize(e, this.$root)
        }
      }
