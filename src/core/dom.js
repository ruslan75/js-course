class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
         ? document.querySelector(selector)
          : selector
    }
    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        console.log('remove')
        this.$el.removeEventListener(eventType, callback)
    }
    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        }
        else {
            this.$el.appendChild(node)
        }
        return this
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.creat = (tageName, classes = '') => {
    const el = document.createElement(tageName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}