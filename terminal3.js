class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
    }

    atacar() {
        
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Gandalf", 70, "mago");
const guerreiro = new Heroi("Leônidas", 38, "guerreiro");
const monge = new Heroi("Liu Kang", 50, "monge");
const ninja = new Heroi("Hattori Hanzo", 27, "ninja");

mago.atacar(); 
guerreiro.atacar()
monge.atacar(); 
ninja.atacar(); 

