import React from "react";
import * as This from "tailwindcss";

class App{
    constructor() {
        this.cavas =document.createElement('canvas');
        this.ctx = this.cavas.getContext('2d');
        document.body.appendChild(This.canvas);

        this.wave=new Wave();

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

    }
    resize() {
        this.stageWidth =document.body.clientWidth;
        this.stageHight =document.body.clientHeight;

        this.cavas.width =this.stageWidth *2;
        this.cavas.height=this.stageHight *2;
        this.ctx.scale(2,2);
    }
    animate(t){
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHight);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
new App();
}

export  class Point{
    constructor(x,y) {
    this.x=x;
    this.y=y;
    this.fixedY=y;
    this.speed=0.1;
    this.cur = 0;
    this.max = Math.random() * 100+ 150;
    }
    update(){
        // eslint-disable-next-line no-unused-expressions
        this.cur +=this.speed;
        this.y= this.fixedY + (Math.sin(this.cur)*this.max);

    }
}


export class Wave {
    constructor() {
    }
    resize(stageWith,stageHeight) {
        this.stageWith =stageWith;
        this.stageHeight =stageHeight;

        this.centerX=stageWith/2;
        this.centerY=stageHeight/2;

        this.init();
    }
    init(){
        this.point =new Point(
            this.centerX,
            this.centerY
        );
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle ='#ff0000';

        this.point.update();

        ctx.arc(this.point.x,this.point.y,30,0,2 *Math.PI);
        ctx.fill();
    }
}