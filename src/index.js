import {Exel} from './components/exel/Exel'
import {Formula} from './components/formula/Formula'
import {Header} from './components/header/Header'
import {Table} from './components/table/Table'
import {Toolbar} from './components/toolbar/Toolbar'
import './scss/index.scss'


const exel = new Exel('#app', {
    components: [Header, Toolbar, Formula, Table]
})

exel.render()