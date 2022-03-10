import { Food } from "./Food";
import { Snake } from "./Snake";
import { Score } from "./Score";
export class Games{
    score:Score
    snake:Snake
    food:Food
    diraction=""//默认移动方向
    timer:NodeJS.Timer
    constructor(){
        this.score = new Score()
        this.food = new Food()
        this.snake = new Snake()
        this.timer = this.autoMove()
    }
    init(){
        document.addEventListener("keydown",this.changeDiraction.bind(this))
    }
    changeDiraction(event:KeyboardEvent){
        if(["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].indexOf(event.key)!=-1){
            if(event.key=="ArrowRight"&&this.diraction!=="ArrowLeft"&&this.snake.body.length!=0){
                this.diraction = event.key
                this.controlSnake(this.diraction)
            }
            else if(event.key=="ArrowLeft"&&this.diraction!=="ArrowRight"&&this.snake.body.length!=0){
                this.diraction = event.key
                this.controlSnake(this.diraction)
                
            }
            else if(event.key=="ArrowDown"&&this.diraction!=="ArrowUp"&&this.snake.body.length!=0){
                this.diraction = event.key
                this.controlSnake(this.diraction)
                
            }
            else if(event.key=="ArrowUp"&&this.diraction!=="ArrowDown"&&this.snake.body.length!=0){
                this.diraction = event.key
                this.controlSnake(this.diraction)
            }else if(this.snake.body.length==0){
                this.diraction = event.key
                this.controlSnake(this.diraction)
            }
        }
    }
    controlSnake(diraction:string){//键盘控制蛇的移动
        clearInterval(this.timer)
        switch(diraction){
            case "ArrowRight":{ //右
                try{
                    this.snake.X=this.snake.X+10
                    this.timer = this.autoMove()
                    break
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                }
            }
            case "ArrowDown":{ //下
                try{
                    this.snake.Y+=10
                    this.timer = this.autoMove()
                    break
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                }
            }
            case "ArrowLeft":{ //左
                try{
                    this.snake.X-=10
                    this.timer = this.autoMove()
                    break
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                }
            }
            case "ArrowUp":{ //上
                try{
                    this.snake.Y-=10
                    this.timer = this.autoMove()
                    break
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                }
                break
            }
        }
        if(this.snake.X===this.food.X&&this.snake.Y===this.food.Y){
            this.score.addscore()
            this.food.change()
            this.snake.addbody()
        }
    }
    autoMove(){//蛇的自动移动
        let timer = setInterval(() => {
            if(this.diraction=="ArrowRight"){
                try{
                    this.snake.X+=10
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                    clearInterval(timer)
                }
            }
            if(this.diraction=="ArrowDown"){
                try{
                    this.snake.Y+=10
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                    clearInterval(timer)
                }
            }
            if(this.diraction=="ArrowLeft"){
                try{
                    this.snake.X-=10
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                    clearInterval(timer)
                }
            }
            if(this.diraction=="ArrowUp"){
                try{
                    this.snake.Y-=10
                }catch(err){
                    alert("撞墙了，游戏结束!")
                    window.location.reload()
                    clearInterval(timer)
                }
            }
            if(this.snake.X===this.food.X&&this.snake.Y===this.food.Y){
                this.score.addscore()
                this.food.change()
                this.snake.addbody()
            }
        }, 200-this.score.level*10);
        return timer
    }
}