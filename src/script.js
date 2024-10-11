class Carro {
    constructor(marca, modelo, velocidadeMaxima) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidadeMaxima = velocidadeMaxima;
      this.velocidadeAtual = 0;
    }
  
    acelerar() {
      if (this.velocidadeAtual < this.velocidadeMaxima) {
        this.velocidadeAtual += 10;
        console.log(`${this.modelo} acelerou para ${this.velocidadeAtual} km/h`);
      } else {
        console.log(`${this.modelo} já está na velocidade máxima!`);
      }
    }
  
    frear() {
      if (this.velocidadeAtual > 0) {
        this.velocidadeAtual -= 10;
        console.log(`${this.modelo} desacelerou para ${this.velocidadeAtual} km/h`);
      } else {
        console.log(`${this.modelo} já está parado!`);
      }
    }
  
    status() {
      console.log(`${this.modelo} está a ${this.velocidadeAtual} km/h`);
    }
  }

  // Criar um carro
const meuCarro = new Carro('Toyota', 'Corolla', 180);

// Simular algumas ações do usuário
console.log('Simulação Iniciada:');
meuCarro.status();      // Verificar o status inicial
meuCarro.acelerar();    // Acelerar o carro
meuCarro.acelerar();    // Acelerar mais uma vez
meuCarro.frear();       // Frear o carro
meuCarro.status();      // Verificar o status final

  