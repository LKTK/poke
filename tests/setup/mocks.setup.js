import { JSDOM } from 'jsdom'

const dom = new JSDOM('', {
    url: 'http://localhost'
})

global.document = dom.window.document
global.window = dom.window