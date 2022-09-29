import BidangDatar from './BidangDatar.js';

class PersegiPanjang extends BidangDatar{
	constructor(ctx, x, y, w, h, color = '#000000') {
    super(x, y);
	this.ctx = ctx;
    this.w = w;	
    this.h = h;
	this.color = color;
  }
  
  gambar(){
	this.ctx.strokeStyle = this.color;
	this.ctx.lineWidth = 4;
	this.ctx.beginPath();
	this.ctx.rect(this.x - (this.w / 2) , this.y - (this.h / 2), this.w, this.h);
	this.ctx.stroke();
  }
  
  gerak(){
	super.gerak();
	
	if(this.x >= (800 - (this.w / 2)) || this.x <= (this.w / 2)) this.stepX = -this.stepX;
	if(this.y >= (600 - (this.h / 2)) || this.y <= (this.h / 2)) this.stepY = -this.stepY;
	
  }
}

export default PersegiPanjang;