class Atleta {
  constructor( nome, idade, peso, altura, notas) {
   this.nome = nome;
   this.idade = idade;
   this.peso = peso;
   this.altura = altura;
   this.notas = notas;
  }
  obtemNomeAtleta() {
    return `Nome: ${this.nome}`
  }
  obtemIdadeAtleta () {
    return `Idade: ${this.idade}`
  }
  obtemPesoAtleta() {
    return `Peso: ${this.peso}`
  }
  obtemAlturaAtleta() {
    return `Altura: ${this.altura}`
  }
  obtemNotasAtleta() {
   return `Notas: ${this.notas}`
  }
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {return `Categoria: Infantil`} 
    else if (this.idade >= 12 && this.idade <= 13) {return `Categoria: Juvenil`} 
    else if (this.idade >= 14 && this.idade <= 15) {return `Categoria: Intermediário`}
    else if (this.idade >= 16 && this.idade <= 30) {return `Categoria: Adulto`}
    else {return "Categoria: Sem Categoria"}
    }
    calculaIMC() {
    let imc = 0
    imc = (this.peso / ( this.altura* this.altura))
    return `IMC: ${imc}`
  }
  calculaMediaValida() {
    let notasOrdenadas = this.notas.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0; 
    })
    let notasOrdenadasValidas = notasOrdenadas.slice(1,-1)
    let somaDasNotas = 0
    for (let i = 0; i < notasOrdenadasValidas.length; i++) {
    somaDasNotas += notasOrdenadasValidas[i];
    }
    let mediaDasNotas = somaDasNotas / notasOrdenadasValidas.length;
    return `Média válida: ${mediaDasNotas}`
  }
}

const atleta = new Atleta ("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.calculaCategoria())
console.log(atleta.calculaIMC())
console.log(atleta.calculaMediaValida())
