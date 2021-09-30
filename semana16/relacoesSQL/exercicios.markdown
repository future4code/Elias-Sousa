
1
a)
Uma chave estrangeira é uma chave de referencia a uma chave primária de outra tabela , em outras palavras , pega a chave primaria para se referenciar na nova tabela, recebendo o nome de chave estrangeira quando está vinculada dessa maneira. a Chave estrangeira é útil para vincular dados entre tabelas , atribuindo informações de uma tabela para determinado agente de outra tabela, seja usuário , coisa etc , bastando ter uma chave primária para fazer essa referência.

b)

INSERT INTO Filmes (id,nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  "10"
);

INSERT INTO Filmes (id,nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "004",
  "Minha Mãe É uma Peça",
  "Dona Hermínia é uma mulher de meia idade, ...",
  "2013-06-21",
  "8"
  );


  c)

  CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
)


INSERT INTO Rating (id, comment, rate, id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);


c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147253-elias-sousa`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

O erro diz que não pode alterar a linha da foreign key , isso acontece porque foi passado um id invalido de referência que não existe na outra tabela


d)

ALTER TABLE Filmes DROP COLUMN avaliacao;


e)
DELETE FROM Filmes WHERE id = "004";

o seguinte erro é apresentado:

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147253-elias-sousa`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

como há uma tabela que depende das informações dessa outra informação de tabela que queremos excluir, não é permitido.



2

a)
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

essa tabela cria campos onde são transformados em chaves estrangeiras que se referenciam em chaves primarias de outras tabelas


