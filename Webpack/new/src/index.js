import $ from 'jquery'
import sumIt from './some.js'

let z = sumIt(2, 3, 5, 'six')

document.getElementById('root').innerHTML = z + ' work!';
