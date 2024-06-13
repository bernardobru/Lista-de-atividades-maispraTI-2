const prompt = require("prompt-sync")();
const Hotel = function (id, nome, cidade, quartosT, quartosD) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotal = quartosT;
    this.quartosDisponiveis = quartosD; 
}
const Reserva = function (id, hotel, nome) {
    this.idReserva = id;
    this.idHotel = hotel;
    this.nomeCliente = nome;
}
const hotel = [
  {
    id: 1,
    nome: 'Hotel Transilvania',
    cidade: 'Transilvania',
    quartosTotais: 100,
    quartosDisponiveis: 40,
  },
  {
    id: 2,
    nome: 'Hotel Caro',
    cidade: 'Dubai',
    quartosTotais: 80,
    quartosDisponiveis: 20,
  },
  {
    id: 3,
    nome: 'Muquifo',
    cidade: 'Sao Paulo',
    quartosTotais: 70,
    quartosDisponiveis: 10,
  },
  {
    id: 4,
    nome: 'Hotel Beira-Mar',
    cidade: 'Tramandai',
    quartosTotais: 120,
    quartosDisponiveis: 10,
  },
];
const reservas = [{idReserva: 1, idHotel: 1, nomeCliente: 'Cleitin'}];
let nome;
let cidade;
let quartosTotais;
let quartosDisponiveis;
function adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis) {
    const hotelNovo = new Hotel(hotel.length + 1, nome, cidade, quartosTotais, quartosDisponiveis)
    hotel.push(hotelNovo);
    console.log('Hotel adicionado!');
    return hotel;
}
function buscaHotelPorCidade(cidade) {
    const hoteisDisponiveis = hotel.filter((hotel) => {
    return hotel.cidade === cidade;
    });
    if (hoteisDisponiveis.length > 0) {
    console.log(`Hotéis encontrados ${cidade}:`);
    hoteisDisponiveis.forEach((hotel) => {
        console.log(`Id: ${hotel.id}`);
        console.log(`Nome: ${hotel.nome}`);
        console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
    });
    } else {
        console.log(`Nenhum hotel encontrado em ${cidade}`);
    }
    return;
}
function reservarQuarto(idHotel, nomeCliente) {
    const hotelReservado = hotel.find((hotel) => hotel.id === idHotel);
    if (!hotelReservado) {
        console.log('hotel não encontrado');
    }
    if (hotelReservado.quartosDisponiveis > 0) {
        const idReserva = new Reserva(reservas.length + 1, idHotel, nomeCliente);
        reservas.push(idReserva);
        hotelReservado.quartosDisponiveis--;
        console.log('Reserva feita!');
    } else {
        console.log('Não há quartos disponíveis');
    }
}
function cancelarReserva(idRes) {
    const cancelarReservaHotel = reservas.findIndex((reserva) => {
        return reserva.idReserva === idRes;
    });
    if (cancelarReservaHotel > -1) {
        const hotelReserva = hotel.find((hotel) => {
            return hotel.id === reservas[cancelarReservaHotel].idHotel;
        });
        hotelReserva.quartosDisponiveis++;
        reservas.splice(cancelarReservaHotel, 1);
        console.log('Reserva cancelada com sucesso!');
    } else {
        console.log('Reserva não encontrada');
    }
    return;
}
function listarReservas() {
    if (reservas.length > 0) {
      reservas.forEach((reservaHotel) => {
            const reservado = hotel.find((hotel) => hotel.id === reservaHotel.  idHotel
        );
        if (reservado) {
          console.log(`Reserva ID: ${reservaHotel.idReserva}`);
          console.log(`Hotel: ${reservado.nome}`);
          console.log(`Cliente: ${reservaHotel.nomeCliente}`);
        } else {
          console.log('Não existem reservas em nosso sistema');
        }
      });
    } else {
      console.log('Nenhuma reserva encontrada em nosso sistema');
    }
  }
function sistemaDoHotel() {
    console.log('Sistema Hotéis:');
    console.log('1 - Cadastrar hotel');
    console.log('2 - Buscar hotel por cidade');
    console.log('3 - Fazer reserva');
    console.log('4 - Cancelar reserva');
    console.log('5 - Listar reservas');
    let opcao = parseInt(prompt('Digite o número da opção: '));
        switch (opcao) {
        case 1:
            nome = prompt('Digite o nome do hotel: ');
            cidade = prompt('Digite o nome da cidade: ');
            quartosTotais = parseInt(prompt('Digite a quantidade de quartos: '));
            quartosDisponiveis = parseInt(prompt('Digite a quantidade de quartos disponíveis: '));
            adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis);
            break;
        case 2:
            cidade = prompt('Digite o nome da cidade: ');
            buscaHotelPorCidade(cidade);
            break;
        case 3:
            const idHotelReserva = parseInt(prompt('Digite o ID do hotel: '));
            const clienteReserva = prompt('Digite o nome do cliente: ');
            reservarQuarto(idHotelReserva, clienteReserva);
            break;
        case 4:
            id = parseInt(prompt('Digite o ID da reserva: '));
            cancelarReserva(id);
            break;
        case 5:  
            listarReservas();
            break;
        default:
            console.log('Opção não encontrada');
    }
    return;  
}
let continuar;
do {
    sistemaDoHotel();
    continuar = prompt("Quer continuar no sistema(s/n)?");
} while (continuar === 's');