'use strict';

class Controller{
	
	constructor(ctx) {
		this.ctx = ctx;
		this.objects = [];
	}
	
	addObject(o){
		this.objects.push(o);		
	}
	
	run(){
		this.ctx.clearRect(0, 0, 800, 600);
		
		this.objects.forEach(function(item){
			item.gambar();
		});
		
		this.objects.forEach(function(item){
			item.gerak();
		});
	}
}

export default Controller;