export class TableSelection {
    static className = 'selected'
    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.removeSelect()
        this.group.push($el)
        $el.addClass(TableSelection.className)
        this.current = $el
    }
     selectGroup($group = []) {
        this.removeSelect()
        this.group = $group
        this.group.forEach($el => $el.addClass(TableSelection.className))
     }

     removeSelect() {
         this.group.forEach($el => {
             $el.removeClass(TableSelection.className)
         })
     }
}