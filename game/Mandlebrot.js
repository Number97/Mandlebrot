let xmin = -2
let size = 4
let ymin = -2
let centerX,centerY
let density = 2
let l = 0
let x,y,a,b,preva,prevb
let stage
let i,j
let counter1 = 1
let counter2 = 0
let bar
let counter3
let trueDensity
let radius

class Point
{
	constructor(_x,_y,_g)
	{
		this.x=_x
		this.y=_y
		this.g=_g
	}

	change(howMuch)
	{
		this.g=howMuch
	}
}

let mandlebrot = []

function setup()
{
	createCanvas(1000,1000)
	l=0
	stroke(0)
	background(0,191,17)
	xmin = -2
	size = 4
	ymin = -2
	density = 3
	l = 0
	mandlebrot = []
	centerY=0
	centerX=0
	stage=-1
	i=xmin
	j=ymin
	counter1 = 1
	counter2 = 0
	counter3 = 1
	bar = 7
	translate(width/2,height/2)
}

function draw()
{
	translate(width/2,height/2)
	switch(stage)
	{
		case -1:

			line(-490,-490,-490,-480)
			line(110-500,-490,110-500,-480)
			line(-490,-470,-490,-460)
			line(110-500,-470,110-500,-460)
			line(-490,-450,-490,-440)
			line(110-500,-450,110-500,-440)

			line(-490,-490,-390,-490)
			line(-490,-480,-390,-480)
			line(-490,-470,-390,-470)
			line(-490,-460,-390,-460)
			line(-490,-450,-390,-450)
			line(-490,-440,-390,-440)
		
			fill(0)
			rect(190,-490,290,30)
			switch(density)
			{
				case 1:
					trueDensity=100
					radius=1
					break;
				case 2:
					trueDensity=90
					radius=1
					break;
				case 3:
					trueDensity=80
					radius=2
					break;
				case 4:
					trueDensity=70
					radius=2
					break;
				case 5:
					trueDensity=60
					radius=3
					break;
				case 6:
					trueDensity=50
					radius=3
					break;
				case 7:
					trueDensity=40
					radius=4
					break;
				case 8:
					trueDensity=30
					radius=4
					break;
				case 9:
					trueDensity=20
					radius=5
					break;
				case 10:
					trueDensity=10
					radius=5
					break;
				case 20:
					trueDensity=9
					radius=10
					break;
				case 30:
					trueDensity=8
					radius=15
					break;
				case 40:
					trueDensity=7
					radius=20
					break;
				case 50:
					trueDensity=6
					radius=25
					break;
				case 60:
					trueDensity=5
					radius=30
					break;
				case 70:
					trueDensity=4
					radius=35
					break;
				case 80:
					trueDensity=3
					radius=40
					break;
				case 90:
					trueDensity=2
					radius=45
					break;
				case 100:
					trueDensity=1
					radius=50
					break;
			}
			fill(255)
			text(trueDensity,455,-470)
			text("Density (change with UP AND DOWN arrows): ",200,-470)
			
			stage=0
			break;
		case 0:
			line(-490+map((j-xmin)*((density*size)/2000)+i-xmin,0,(size)*((density*size)/2000)+size,0,100),-490,-490+map((j-xmin)*((density*size)/2000)+i-xmin,0,(size)*((density*size)/2000)+size,0,100),-480)
			for(i=xmin;i<xmin+size;i+=(density*size)/2000)
			{
				for(j=ymin;j<ymin+size;j+=(density*size)/2000)
				{
					x=i
					y=j
					preva=x
					a=x
					prevb=y
					b=y

					for(let k=0;k<3;k++)
					{
						preva=a
						prevb=b
						a=preva*preva-prevb*prevb+x
						b=2*preva*prevb+y
					}

					if(modul(a,b)<2)
					{
						mandlebrot.push(new Point(x,y,0))
						l++
					}
				}
			}
			stage=1
			fill(0)
			rect(-490,-490,100,10)
			break;
		
		case 1:
			if(counter1<13)
			{
				fill(0)
				rect(-490+map(counter1,1,13,0,100),-470,100/12,10)
				changing((counter1-1)*30+1);
				counter1++
			}
			else
			{
				stage=2
			}
			break;

		case 2:
			while(counter2<counter3*l/bar)
			{
				stroke(0)
				line(-490+map(counter2,0,l,0,100),-450,-490+map(counter2,0,l,0,100),-440)
				if(mandlebrot[counter2].g==331)
				{
					fill(0);
				}
				else if(mandlebrot[counter2].g==301)
				{
					fill(229,0,206);
				}
				else if(mandlebrot[counter2].g==271)
				{
					fill(179,0,226);
				}
				else if(mandlebrot[counter2].g==241)
				{
					fill(109,0,221);
				}
				else if(mandlebrot[counter2].g==211)
				{
					fill(42,0,217);
				}
				else if(mandlebrot[counter2].g==181)
				{
					fill(0,22,213);
				}
				else if(mandlebrot[counter2].g==151)
				{
					fill(0,85,210);
				}
				else if(mandlebrot[counter2].g==121)
				{
					fill(0,145,206);
				}
				else if(mandlebrot[counter2].g==91)
				{
					fill(0,202,201);
				}
				else if(mandlebrot[counter2].g==61)
				{
					fill(0,198,137);
				}
				else if(mandlebrot[counter2].g==31)
				{
					fill(0,194,76);
				}
				else if(mandlebrot[counter2].g==1)
				{
					fill(0,191,17);
				}
				noStroke()
				ellipse((mandlebrot[counter2].x-centerX)*(width/size),(mandlebrot[counter2].y-centerY)*(height/size),radius,radius);
				counter2++
			}
			if(counter3!=bar)
			{
				counter3++
			}
			else
			{
				noLoop()
			}
			
			break;
		case 5:
			fill(0)
			rect(190,-490,290,30)
			switch(density)
			{
				case 1:
					trueDensity=100
					radius=1
					break;
				case 2:
					trueDensity=90
					radius=1
					break;
				case 3:
					trueDensity=80
					radius=2
					break;
				case 4:
					trueDensity=70
					radius=2
					break;
				case 5:
					trueDensity=60
					radius=3
					break;
				case 6:
					trueDensity=50
					radius=3
					break;
				case 7:
					trueDensity=40
					radius=4
					break;
				case 8:
					trueDensity=30
					radius=4
					break;
				case 9:
					trueDensity=20
					radius=5
					break;
				case 10:
					trueDensity=10
					radius=5
					break;
				case 20:
					trueDensity=9
					radius=10
					break;
				case 30:
					trueDensity=8
					radius=15
					break;
				case 40:
					trueDensity=7
					radius=20
					break;
				case 50:
					trueDensity=6
					radius=25
					break;
				case 60:
					trueDensity=5
					radius=30
					break;
				case 70:
					trueDensity=4
					radius=35
					break;
				case 80:
					trueDensity=3
					radius=40
					break;
				case 90:
					trueDensity=2
					radius=45
					break;
				case 100:
					trueDensity=1
					radius=50
					break;
			}
			fill(255)
			text(trueDensity,455,-470)
			text("Density (change with UP AND DOWN arrows): ",200,-470)
			break;
	}
	line(-490,-490,-490,-480)
			line(110-500,-490,110-500,-480)
			line(-490,-470,-490,-460)
			line(110-500,-470,110-500,-460)
			line(-490,-450,-490,-440)
			line(110-500,-450,110-500,-440)

			line(-490,-490,-390,-490)
			line(-490,-480,-390,-480)
			line(-490,-470,-390,-470)
			line(-490,-460,-390,-460)
			line(-490,-450,-390,-450)
			line(-490,-440,-390,-440)
		
			fill(0)
			rect(190,-490,290,30)
			switch(density)
			{
				case 1:
					trueDensity=100
					radius=1
					break;
				case 2:
					trueDensity=90
					radius=1
					break;
				case 3:
					trueDensity=80
					radius=2
					break;
				case 4:
					trueDensity=70
					radius=2
					break;
				case 5:
					trueDensity=60
					radius=3
					break;
				case 6:
					trueDensity=50
					radius=3
					break;
				case 7:
					trueDensity=40
					radius=4
					break;
				case 8:
					trueDensity=30
					radius=4
					break;
				case 9:
					trueDensity=20
					radius=5
					break;
				case 10:
					trueDensity=10
					radius=5
					break;
				case 20:
					trueDensity=9
					radius=10
					break;
				case 30:
					trueDensity=8
					radius=15
					break;
				case 40:
					trueDensity=7
					radius=20
					break;
				case 50:
					trueDensity=6
					radius=25
					break;
				case 60:
					trueDensity=5
					radius=30
					break;
				case 70:
					trueDensity=4
					radius=35
					break;
				case 80:
					trueDensity=3
					radius=40
					break;
				case 90:
					trueDensity=2
					radius=45
					break;
				case 100:
					trueDensity=1
					radius=50
					break;
			}
			fill(255)
			text(trueDensity,455,-470)
			text("Density (change with UP AND DOWN arrows): ",200,-470)
}

function modul(x,y)
{
	let m=sqrt(x*x+y*y)
	return m
}

function changing(iterations){
	for(let h=0;h<l;h++){
	  	let x1=mandlebrot[h].x;
	  	let y1=mandlebrot[h].y;
	  
	  
	  	let preva1=x1,a1=x1;
	  	let prevb1=y1,b1=y1;
	  
		for(let k=0;k<iterations;k++){
			preva1=a1;
			prevb1=b1;
			a1=preva1*preva1-prevb1*prevb1+x1;
			b1=2*preva1*prevb1+y1;
	  	}
	  	if(modul(a1,b1)<2)
	  	{
			mandlebrot[h].change(iterations);
	  	}
	}
}


function mousePressed()
{
	translate(width/2,height/2)
	let x=mouseX-500;
	let y=mouseY-500;
	bar = 7
	
	xmin=x*size/width+centerX-(size*0.4)/2;
	ymin=y*size/height+centerY-(size*0.4)/2;
	size=size*0.4;
	mandlebrot = []
	l=0
	stroke(0)
	background(0,191,17)
	centerX=xmin+size/2
	centerY=ymin+size/2

	stage=-1
	i=xmin
	j=ymin
	counter1=1
	counter2=0
	counter3=1
	loop();
}
function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		if((density<=10)&&(density!=1))
		{
			density--
		}
		else if(density>10)
		{
			density-=10
		}
		stage=5
		redraw()
	}

	if(keyCode == DOWN_ARROW)
	{
		if(density<10)
		{
			density++
		}
		else if((density>=10)&&(density<100))
		{
			density+=10
		}
		stage=5
		redraw()
	}
}