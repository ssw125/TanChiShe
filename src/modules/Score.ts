export class Score{
    score=0
    level=1
    target_score:number//目标分数 默认10
    maxlevel:number//最大等级 默认10
    add_target_score:number //每升一级增加的目标分数 默认增量10
    scoreEle:HTMLElement
    levelEle:HTMLElement
    constructor(target_score?:number,maxlevel?:number,add_target_score?:number){
        this.target_score = target_score??10
        this.maxlevel = maxlevel??10
        this.add_target_score = add_target_score??10
        this.scoreEle = document.getElementById('score')?.querySelector('span')!
        this.levelEle = document.getElementById('level')?.querySelector('span')!
    }
    addscore(){
        this.score++
        this.scoreEle.innerHTML = this.score.toString()
        if(this.score===this.target_score){
            this.addLevel()
        }
    }
    addLevel(){
        this.level++
        this.levelEle.innerHTML = this.level.toString()
        this.target_score+=this.add_target_score
    }
} 