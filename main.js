import Lingkaran from './Lingkaran.js';
import PersegiPanjang from './PersegiPanjang.js';
import BujurSangkar from './BujurSangkar.js';
import Controller from './Controller.js';

'use strict';

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const lingkaran1 = new Lingkaran(ctx, 200, 200, 40, '#990000');
const persegiPanjang1 = new PersegiPanjang(ctx, 100, 240, 120, 80, '#009900');
const bujurSangkar1 = new BujurSangkar(ctx, 400, 400, 100, '#000099');
const controller = new Controller(ctx);

controller.addObject(lingkaran1);
controller.addObject(persegiPanjang1);
controller.addObject(bujurSangkar1);

setInterval(function(){
		controller.run();
	}, 30);