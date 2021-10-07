<h1 align="center">Web Project</h1>

<img align="center" src="./IMG/intro.PNG" width="100%">

<h2>Description</h2>
<p>The project was created to create animation on canvas based on basic mathematics.
Files in a project work in a modular way.<br>
Where:<br>
<b>app.js </b>- displays the canvas field and starts the entire animation.<br>
<b>layer.js</b> - covering the entire screen with canvas and responsiveness.<br>
<b>loop.js</b> - implementation of render frequency.<br>
<b>mesh.js</b> - working with parameters (speed, space, range of colors, etc.) and drawing the figures itself behind the canvas model.<br>
</p>
<h3>Short description work</h3>
<p>Only the file is described <b>mesh.js</b></p>
<p>Created mesh particles of triangle vertices and settings for other methods and overall visual result.</p>

```
    class Mesh {
        // W and H - screen resolution;
		constructor({w,h}){
        this.maxDist = Math.hypot(w,h);
        
        //steps X and Y - storage distance between particles;

		this.stepX = this.maxDist * 0.1; // 0.1 = 100% width for traingles
		this.stepY = this.stepX * Math.sqrt(3)/2; // height

        //Save results in cols and rows;

        this.extraPoints = 3;
        this.cols = (w/this.stepX | 0) + this.extraPoints;
		this.rows = (h/this.stepY | 0) + this.extraPoints;

        //Сenter the entire grid to the center of the screen;
        //extraOffsetX - the direction of particle shear in the opposite direction;

        this.extraOffsetX = this.stepX / 4;
        this.offsetX = (w - (this.cols - 1) * this.stepX) /2;
		this.offsetY = (h - (this.rows - 1) * this.stepY) /2;

        this.colorRange = 400; // smooth color transition
		this.colorSpeed = 20; // color change speed
		this.colorTimer = 0; // color change timer (to reset elapsed time from start)
        ...
        }
```

<p>The method fills the array with the coordinates of the particles with each tick into the <b> particles </b> array.</p>

```
createParticles(){
    this.particles = [];
    ...
    // angle - random starting angle
    // radius - random radius
    // velocity - angular velocity (rotation)

    const angle = Math.random()*Math.PI * 2;
	const radius = Math.random()* this.extraOffsetX / 2 + this.extraOffsetX;
	const velocity = Math.random() * 2-1;

	this.particles.push({x,y,homeX, homeY, angle, radius, velocity})
}
```

<p>The method was used for initial setup using particle imaging.</p>

```
renderParticles(ctx){
    ...
}
```

<p>Method for finding all vertices by necessary particles in an array of <b>triangles</b>.</p>

```
createTraingles(){
		this.triangles = [A1,B1,C1,A2,B2,C2,...];
        ...
}
```

<p>The method traverses all coordinates of the triangles (taken from <b> this.triangles </b>) drawing on canvas, picking a different color for each through <b> hue </b> and drawing on canvas.</p>

```
renderTraingles(ctx){
    ...
    // colorRange - smooth color transition;
    // colorTimer - 
    // hsl(${hue},color saturation,brightness)

    const hue = dist / this.maxDist * this.colorRange - this.colorTimer;
    ctx.fillStyle = `hsl(${hue}, 85%, 50%)`;
    ...
}
```

<p>The method changes the angle and position of the particles over time. Creates the appearance of the animation.</p>

```
//correction - tick counter (time from start);
updateParticles(correction = 0){
    ...
}
```

<p>The method changes the color of the triangles with a <b> correction </b> time interval. </p>

```
updateTraingles(correction=0){
    // 360 maximum number of clock cycles before reset;
    this.colorTimer = (this.colorTimer + this.colorSpeed * correction) % 360;
}
```

<h3>Target</h3>
<p>

</p>
<h3>Technologies</h3>
<p>- CSS</p>
<p>- JavaScript</p>
<h2>Project settings</h2>
<p>
First you need to clone the project to your device and then run the <b> index.html file via the Live Server in your editor </b></p>
<h3>
Further project</h3>
• Add a window for flexible parameters change