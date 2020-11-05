import {capitalize} from "./utils"

export class DomListener {
constructor($root, listeners = []) {
    if (!$root) {
        throw new Error('No $root provided of DomListener')
    }
    this.$root = $root
    this.listeners = listeners
}

initDOMListener() {
    this.listeners.forEach(listener => {
        const method = getMetodName(listener)
        if (!this[method]) {
            throw new Error(
                `Method ${method} is not implemented in ${this.name} Component`
            )
        }
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
    })
}

removeDOMListener() {
    this.listeners.forEach(listener => {
        const method = getMetodName(listener)
        this.$root.off(listener, this[method])
})
}
}
function getMetodName(eventName) {
    return 'on' + capitalize(eventName)
}