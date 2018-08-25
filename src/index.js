import _ from 'lodash'
import './style.css'
import Icon from './支付宝.png'
import printMe from './print.js'

function component(){
  var element = document.createElement('div')

  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图片添加到div
  // var myIcon = new Image()
  // myIcon.style = 'width: 100px;height: 100px;'
  // myIcon.src = 'http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg'
  // element.appendChild(myIcon)
  // myIcon = new Image()
  // myIcon.src = Icon
  // element.appendChild(myIcon)

  // 添加事件
  var btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
