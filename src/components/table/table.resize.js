import {$} from "../../core/dom"


export const createResize = (e, $root) => {
     let delta

if (e.target.dataset.resize) {
    const $target = $(e.target)
    const parent = $target.closest('[data-type="resizable"]')
    const coords = parent.getCoords()
    const type = $target.data.resize
    const sideProp = type === 'col' ? 'bottom' : 'right'
    const cursorStart = type === 'col' ? e.pageX : e.pageY

    $target.toCss({
      [sideProp]: '-5000px'
    })

    document.onmousemove = e => {
      const cursorPosition = type === 'col' ? e.pageX : e.pageY
         delta = cursorPosition - cursorStart

        if (type === 'col') {
          $target.toCss({
            right: -delta + 'px'
          })
        }
        else {
          $target.toCss({
            bottom: -delta + 'px'
          })
        }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
      if (type === 'col') {
        parent.toCss({
          width: coords.width + delta + 'px'
        })
        $root.findAll(`[data-col="${parent.data.col}"]`)
        .forEach(el => el.style.width = coords.width + delta + 'px')
      }
      else {
        parent.toCss({
          height: coords.height + delta + 'px'
        })
      }
      $target.toCss({
        bottom: 0,
        right: 0,
        [sideProp]: 0
      })
    }
  }
}

