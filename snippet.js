const tab1 = document.getElementById('t1')
const tab2 = document.getElementById('t2')
const tab3 = document.getElementById('t3')
const tab4 = document.getElementById('t4')
const tab5 = document.getElementById('t5')
const tab6 = document.getElementById('t6')
const tab7 = document.getElementById('t7')
const tab8 = document.getElementById('t8')

const Im1 = document.getElementById('i1')

const Stl1 = document.getElementById('stl')

//минимальное и максимальное предельнле скругление элемента
const minRad=0
const maxRad=50

// скорость скругления
const aSpeed=5

// состояние скругления краёв картинки в процентах
let intScr = maxRad;

// задержка анимации 40мс
const Delay=40

function mouseIn()
{
 this.style.textAlign = 'right'
 this.style.textColor='#fffacd'
 this.style.backgroundColor='#998877'
}

function mouseOut()
{
 this.style.textAlign = 'center'
 this.style.textColor='#ffffff'
 this.style.backgroundColor='#778899'
}


var intervalID

function IntervalHeandler() {
if (intScr>minRad)
{intScr-=aSpeed}
if (intScr<=minRad){
window.clearInterval(intervalID)
intScr=intScr}
Im1.style.borderRadius = intScr.toString()+"%"
}

function IntervalHeandlerOut() {
//if (intScr<=maxRad)
{intScr+=aSpeed}
if (intScr>=maxRad){
window.clearInterval(intervalID)
intScr=maxRad}
Im1.style.borderRadius = intScr.toString()+"%"
}

function ImageAnimation(iLink)
{
 window.clearInterval(intervalID)
 Im1.src = iLink
 intervalID = window.setInterval(() => IntervalHeandler(), Delay)
}

function ImageAnimationOut()
{
 window.clearInterval(intervalID)
 intervalID = window.setInterval(() => IntervalHeandlerOut(), Delay)
}

tab1.onmouseenter = () => {
 ImageAnimation('G1.JPG')
 mouseIn.call(tab1)}
tab1.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab1)
}


tab2.onmouseenter = () => {
 ImageAnimation('G2.JPG')
 mouseIn.call(tab2)}
tab2.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab2)
}


tab3.onmouseenter = () => {
 ImageAnimation('G3.JPG')
 mouseIn.call(tab3)}
tab3.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab3)
}


tab4.onmouseenter = () => {
 ImageAnimation('G4.JPG')
 mouseIn.call(tab4)}
tab4.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab4)
}


tab5.onmouseenter = () => {
 ImageAnimation('G5.JPG')
 mouseIn.call(tab5)}
tab5.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab5)
}

tab6.onmouseenter = () => {
 ImageAnimation('G6.JPG')
 mouseIn.call(tab6)}
tab6.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab6)
}

tab7.onmouseenter = () => {
 ImageAnimation('G7.JPG')
 mouseIn.call(tab7)}
tab7.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab7)
}

tab8.onmouseenter = () => {
 ImageAnimation('G8.JPG')
 mouseIn.call(tab8)}
tab8.onmouseleave = () => {
ImageAnimationOut()
 mouseOut.call(tab8)
}






