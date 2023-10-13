let carros = {
  "ABC123": {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  motor: {
    cilindros: 4,
    capacidade: 2.0,
    tipo: "Gasolina"
  },
  recursos: ["Ar condicionado", "Sistema de som", "Vidros elétricos", "Travas elétricas"],
  proprietario: {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua Principal",
      cidade: "Cidade A",
      estado: "Estado X"
    }
  },
  revisoes: [
    { data: "2022-01-15", quilometragem: 10000, descricao: "Troca de óleo" },
    { data: "2022-07-22", quilometragem: 20000, descricao: "Substituição de filtro de ar" }
  ],
  seguro: {
    seguradora: "SeguroXYZ",
    numeroApolice: "A123456789",
    coberturas: ["Roubo", "Colisão", "Danos a terceiros"]
  }
},

  "XYZ789": {
  marca: "Honda",
  modelo: "Civic",
  ano: 2021,
  cor: "Azul",
  motor: {
    cilindros: 4,
    capacidade: 1.8,
    tipo: "Gasolina"
  },
  recursos: ["Ar condicionado", "Vidros elétricos", "Travas elétricas"],
  proprietario: {
    nome: "Maria",
    idade: 28,
    endereco: {
      rua: "Rua Secundária",
      cidade: "Cidade B",
      estado: "Estado Y"
    }
  },
  revisoes: [
    { data: "2021-03-10", quilometragem: 8000, descricao: "Verificação geral" },
    { data: "2021-09-05", quilometragem: 16000, descricao: "Troca de óleo" }
  ],
  seguro: {
    seguradora: "SeguroABC",
    numeroApolice: "B987654321",
    coberturas: ["Roubo", "Danos a terceiros"]
  }
},

"XYZ790": {
  marca: "Honda",
  modelo: "Civic",
  ano: 2021,
  cor: "Azul",
  motor: {
    cilindros: 4,
    capacidade: 1.8,
    tipo: "Gasolina"
  },
  recursos: ["Ar condicionado", "Vidros elétricos", "Travas elétricas"],
  proprietario: {
    nome: "Maria",
    idade: 28,
    endereco: {
      rua: "Rua Secundária",
      cidade: "Cidade B",
      estado: "Estado Y"
    }
  },
  revisoes: [
    { data: "2021-03-10", quilometragem: 8000, descricao: "Verificação geral" },
    { data: "2021-09-05", quilometragem: 16000, descricao: "Troca de óleo" }
  ],
  seguro: {
    seguradora: "SeguroABC",
    numeroApolice: "B987654322",
    coberturas: ["Roubo", "Danos a terceiros"]
  }
}
};

let todasAsPlacas = Object.keys(carros);

function exibirCarros() {

for (let i = 0; i < todasAsPlacas.length; i++) {
  let placa = todasAsPlacas[i];
  let proprietario = carros[placa].proprietario;
  console.log(`Proprietário do carro com placa ${placa}: ${proprietario.nome}`);
}
}

function alterarDados(identificação, nome, idade, rua, cidade, estado) {
carros[identificação].proprietario.nome = nome;
carros[identificação].proprietario.idade = idade;
carros[identificação].proprietario.endereco.rua = rua;
carros[identificação].proprietario.endereco.cidade = cidade;
carros[identificação].proprietario.endereco.estado = estado;
};

function alterarSeguro(identificação, seguradora, numeroApolice, ...coberturas) {
if (identificação) {
  carros[identificação].seguro.seguradora = seguradora;  
  carros[identificação].seguro.numeroApolice = numeroApolice;
  carros[identificação].seguro.coberturas = coberturas;
} 
};

function venderCarros(identificação, antigoDono, nome, idade, rua, cidade, estado) {
if (identificação && carros[identificação].proprietario.nome === antigoDono) {
  alterarDados(identificação, nome, idade, rua, cidade, estado);
  alterarSeguro(identificação, null, null, []);
} else {
  console.log("Não possível realizar este procedimento. Dados inseridos não foram encontrados.");
}
};

venderCarros("XYZ790", "Maria" , "Karoline", 29, "Rua R", "Cidade J", "Estado D");

alterarSeguro("XYZ790", "SeguroDFG", "B887650000", "Roubo", "Danos a terceiros");

console.log(carros.XYZ790);