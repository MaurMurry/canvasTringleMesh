import { Layer } from "./layer.js"
import { Loop } from "./loop.js"
import { Mesh } from "./mesh.js"
class App{
	constructor(container){
		this.layer = new Layer(container);

		addEventListener('resize',()=>this.createMesh());
		this.createMesh();

		this.loop = new Loop(time => this.update(time),()=>this.display());
	}
	createMesh(){
		this.mesh = new Mesh(this.layer);
	}
	update(correction = 0){
		this.mesh.updateParticles(correction);
		this.mesh.updateTraingles(correction);
	}

	display(){
		this.mesh.renderTraingles(this.layer.context);
	}
}

onload = () =>{
	new App(document.querySelector('body'));
};