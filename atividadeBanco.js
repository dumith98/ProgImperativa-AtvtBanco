// exemplo de conta
let contaExemplo = {
  numero: 123456,
  tipoDeConta: "corrente",
  saldo: 233009,
  nomeTitular: "nome exemplo",
};
console.log(contaExemplo);
// funcao construtora de contas do banco
function UsuarioBanco(numero, tipoDeConta, saldo, nomeTitular) {
  this.numero = numero;
  this.tipoDeConta = tipoDeConta;
  this.saldo = saldo;
  this.nomeTitular = nomeTitular;
}
// array para guardar os usuarios
var listaUsuarios = [];

let abigael = new UsuarioBanco(
  5486273622,
  "Conta Corrente",
  27771,
  "Abigael Natte"
);
listaUsuarios.push(abigael);

let ramon = new UsuarioBanco(
  1183971869,
  "Conta Poupança",
  8675,
  "Ramon Connell"
);
listaUsuarios.push(ramon);

let jarret = new UsuarioBanco(
  9582019689,
  "Conta Poupança",
  27363,
  "Jarret Lafuente"
);
listaUsuarios.push(jarret);

let asnel = new UsuarioBanco(
  1761924656,
  "Conta Poupança",
  32415,
  "Ansel Ardley"
);
listaUsuarios.push(asnel);

let jacki = new UsuarioBanco(
  7401971607,
  "Conta Poupança",
  18789,
  "Jacki Shurmer"
);
listaUsuarios.push(jacki);

let jobi = new UsuarioBanco(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
listaUsuarios.push(jobi);

let thomasin = new UsuarioBanco(
  4223508636,
  "Conta Corrente",
  2177,
  "Thomasin Latour"
);
listaUsuarios.push(thomasin);

let lonnie = new UsuarioBanco(
  185979521,
  "Conta Poupança",
  25994,
  "Lonnie Verheijden"
);
listaUsuarios.push(lonnie);

let alonso = new UsuarioBanco(
  3151956165,
  "Conta Corrente",
  7601,
  "Alonso Wannan"
);
listaUsuarios.push(alonso);

let bendite = new UsuarioBanco(
  2138105881,
  "Conta Poupança",
  33196,
  "Bendite Huggett"
);
listaUsuarios.push(bendite);

let banco = {
  clientes: listaUsuarios,
  consultarCliente: function (titular) {
    for (i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nomeTitular.includes(titular)) {
        return this.clientes[i];
      }
    }
  },
  deposito: function (titular, valor) {
    for (i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nomeTitular.includes(titular)) {
        this.clientes[i].saldo += valor;
        console.log(
          "Depósito realizado, sr(a). " +
            this.clientes[i].nomeTitular +
            ". Seu novo saldo é: " +
            this.clientes[i].saldo
        );
      }
    }
  },
  saque: function (titular, valor) {
    for (i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nomeTitular.includes(titular)) {
        if (this.clientes[i].saldo < valor) {
          console.log("Fundos insuficientes!");
        } else {
          this.clientes[i].saldo -= valor;
          console.log(
            "Exrtração feita com sucesso, " +
              this.clientes[i].nomeTitular +
              ". Seu novo saldo é: " +
              this.clientes[i].saldo
          );
        }
      }
    }
  },
};
// Testedos metodos e persistencia das propriedades
console.log(banco.consultarCliente("Bendite"));
banco.deposito("Bendite", 20000);
banco.saque("Bendite", 20000);
banco.saque("Bendite", 20000);
banco.saque("Bendite", 20000);

// -------------------------------BONUS EXTRA 1 ------------------------------------------------------------------

let array = [
  { nome: "Lean", idade: 27 },
  { nome: "Eze", idade: 49 },
];

let lista = [];

function propriedadeUnica(array, chave) {
  for (i = 0; i < array.length; i++)
    for (var [key, value] of Object.entries(array[i])) {
      if (key.includes(chave)) {
        lista.push({ [chave]: value });
      }
    }
}
propriedadeUnica(array, "idade");
console.log(lista);
lista = []; // para que os console.logs mostrem somente o que foi pedido rodando uma vez. sem isto, cada objeto teria mais atributos adicionados a eles
propriedadeUnica(array, "nome");
console.log(lista);

// -------------------------------BONUS EXTRA 2 ------------------------------------------------------------------

function Aluno(numero, numeroDeArquivo, listaDeNotas) {
  this.numero = numero;
  this.numeroDeArquivo = numeroDeArquivo;
  this.listaDeNotas = listaDeNotas;
  this.calcularMedia = function () {
    if (listaDeNotas.length != numeroDeArquivo) {
      console.log(
        "As notas deste aluno foram digitadas erradas ou não há notas o suficientes para ser aprovado ou reprovado."
      );
    } else {
      let nota = 0;
      for (i = 0; i < listaDeNotas.length; i++) {
        nota += listaDeNotas[i];
      }
      let media = nota / (numeroDeArquivo * 10);
      if (media >= 0.7) {
        console.log(
          "Parabéns! Este aluno passou com média de: " + media * 100 + "%"
        );
      } else {
        console.log(
          "Infelizmente este aluno foi reprovado. Sua media foi: " +
            media * 100 +
            "%"
        );
      }
    }
  };
}
// considerando cada avaliação vale um total de 10
let dumith = new Aluno(3443, 5, [10, 10, 10, 10, 10]);
dumith.calcularMedia();
let aisha = new Aluno(3456, 5, [5, 5, 5, 5, 5]);
aisha.calcularMedia();
let maisa = new Aluno(3455, 6, [7, 9, 3, 9, 10, 7]);
maisa.calcularMedia();
