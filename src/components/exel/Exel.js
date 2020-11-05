import {$} from '../../core/dom'

export class Exel {
constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
}
getRoot() {
    const $root = $.creat('div', 'exel')
    this.components = this.components.map(Component => {
        const $el = $.creat('div', Component.className)
         const component = new Component($el)
         // debug
         if (component.name) {
             window['c' + component.name] = component
         }
         $el.html(component.toHTML())
         $root.append($el)
         return component
    })
    return $root
}
render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => {
        component.init()
    })
}
}