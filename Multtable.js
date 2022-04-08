 class Multitable
 {
    constructor(n,multiplicador, tam)
    {
        this.n = n;
        this.multiplicador = multiplicador;
        this.tam = tam;
    }

    show()
    {
        stroke(255);
        strokeWeight(1);
        noFill();
        circle(0,0,this.tam,this.tam);
        //stroke(0,180,0);
        //strokeWeight(5);
        let angle = 2*Math.PI/this.n;
        
        for(let i = 0; i < 2*Math.PI; i += angle)
        {
           
            point(this.tam/2,0);
            rotate(-angle);
        }
    }

    drawLines()
    {
        let angle = 2*Math.PI/this.n;
        stroke(255);
        strokeWeight(0.5);

        for(let i = 0; i < 2*Math.PI; i += angle)
        {
            
            line((this.tam/2)*cos(-i),(this.tam/2)*sin(-i),(this.tam/2)*cos(-i*this.multiplicador),(this.tam/2)*sin(-i*this.multiplicador));
        }
    }

    setN(num)
    {
        this.n = num;
    }

    setMult(m)
    {
        this.multiplicador = m;
    }
 }