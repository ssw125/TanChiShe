export class Food{ //获取元素
    element:HTMLElement
    constructor(){
        this.element = document.getElementById("food")!
    } 
    //获取坐标
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    //吃到食物位置发生改变 要求食物的位置必须是10的倍数 
    change(){
         let x = Math.round(Math.random()*29)*10
         let y = Math.round(Math.random()*29)*10
         this.element.style.left = x+'px'
         this.element.style.top = y+'px'
    }
 }