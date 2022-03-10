export class Snake{
    head:HTMLElement//蛇的头部,
    snake:HTMLElement //蛇的容器
    body:HTMLElement[]//蛇的身体 包括了头部
    constructor(){
        this.snake = document.querySelector(".snake")!
        this.body = Array.from(this.snake.children).slice(1) as HTMLElement[]
        this.head = document.querySelector(".snake")?.querySelector("#head")!
    }
    //获取s头的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇头位置
    set X(value:number){
        if(value>=290 || value<0){
            throw new Error("err")
        }else{
            this.movebody()
            this.head.style.left = value+'px'
            this.checkhit()  
        }
    }
    set Y(value:number){
        if(value>290 || value<0){
            throw new Error("蛇撞墙")
            
        }else{
            this.movebody()
            this.head.style.top = value+'px'
            this.checkhit()
        }
    }
    //吃到食物增加身体
    addbody(){
        let body = document.createElement("div")
        body.className = "body"
        body.style.left = this.X+'px'
        body.style.top = this.Y+'px'
        this.body.push(body)
        this.snake.appendChild(body)
        console.log(this.snake)
        console.log(this.body)
    }
    //身体移动
    movebody(){
        if(this.body.length!=0){
            let a = this.body[0].offsetLeft
            let b = this.body[0].offsetTop
            for(let i = 0;i<this.body.length;i++){
                if(i==0){
                    this.body[i].style.left = this.X+'px'
                    this.body[i].style.top = this.Y+'px'
                }else{
                    let tmpx = this.body[i].offsetLeft
                    let tmpy = this.body[i].offsetTop
                    this.body[i].style.left = a+'px'
                    this.body[i].style.top = b+'px'
                    a = tmpx
                    b = tmpy
                }
            }
        }
    }
    checkhit(){//检查头部与身体有没有相撞
        for(let i of this.body){
            if(this.X===i.offsetLeft&&this.Y===i.offsetTop){
                throw new Error("err")
            }
        }
    }
}