const Leilao = require('./Leilao');
const Lance = require('./Lance');


test('Pega maior lance aleatório',
    () => {
        var leilao = new Leilao('LP O Dia Em Que a Terra Parou - Raul Seixas');
        leilao.propoe(new Lance('Aline',100.0));
        leilao.propoe(new Lance('Renata',200.0));
        leilao.propoe(new Lance('Matheus',150.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Renata');
    }
);

test('Pega maior lance ordem crescente',
    () => {
        var leilao = new Leilao('LP Abre-te Sésamo - Raul Seixas');
        leilao.propoe(new Lance('Matheus',200.0));
        leilao.propoe(new Lance('Ana',300.0));
        leilao.propoe(new Lance('Aline',500.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(500.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Aline');
    }
);
test('Pega maior lance ordem decrescente',
    () => {
        var leilao = new Leilao('LP A Pedra do Gênesis - Raul Seixas');
        leilao.propoe(new Lance('Matheus',500.0));
        leilao.propoe(new Lance('Alan',200.0));
        leilao.propoe(new Lance('Ana',100.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(500.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Matheus');
    }
);
test('Lance negativo',
    () => {
        var leilao = new Leilao('LP Metrô Linha 743 - Raul Seixas');
        leilao.propoe(new Lance('Pedro',-100.0));
        leilao.propoe(new Lance('Aline',-10.0));
        leilao.propoe(new Lance('Ana',-1.0));

        leilao.avalia();
    expect(leilao.getMaiorLance().getValor()).toBe(0);
    expect(leilao.getMaiorLance().getNome()).toBe('Nenhum');
   }
);

test('Pega menor lance aleatório', 
    () => {
        var leilao = new Leilao('LP Gita - Raul Seixas');
        leilao.propoe(new Lance('Ana', 200.0));
        leilao.propoe(new Lance('Aline', 350.0));
        leilao.propoe(new Lance('Matheus', 50.0));
    
        leilao.avalia();
        expect(leilao.getMenorLance().getValor()).toBe(50.0);
        expect(leilao.getMenorLance().getNome()).toBe('Matheus');
    }
);

test ('Pega maior lance ordem crescente', 
    () => {
        var leilao = new Leilao('LP Mata Virgem - Raul Seixas');
        leilao.propoe(new Lance('Sofia', 200.0));
        leilao.propoe(new Lance('Pedro', 450.0));
        leilao.propoe(new Lance('Matheus', 900.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getNome()).toBe('Matheus');
        expect(leilao.getMaiorLance().getValor()).toBe(900.0);

        }
);


test ('Pega maior lance ordem decrescente', 
    () => {
        var leilao = new Leilao('LP Há 10 Mil Anos Atrás - Raul Seixas');
        leilao.propoe(new Lance('Ana', 400.0));
        leilao.propoe(new Lance('Renata', 100.0));
        leilao.propoe(new Lance('Matheus', 50.0));
       

        leilao.avalia();
        expect(leilao.getMaiorLance().getNome()).toBe("Ana");
        expect(leilao.getMaiorLance().getValor()).toBe(400.0);

       }
);

test ('Pega menor lance ordem decrescente', 
    () => {
        var leilao = new Leilao('LP Novo Aeon - Raul Seixas');
        leilao.propoe(new Lance('Matheus', 200.0));
        leilao.propoe(new Lance('Sofia', 90.0));
        leilao.propoe(new Lance('Pedro', 70.0));

        leilao.avalia();
        expect(leilao.getMenorLance().getNome()).toBe('Pedro');
        expect(leilao.getMenorLance().getValor()).toBe(70.0);

        }
);

