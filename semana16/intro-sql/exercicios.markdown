Exercício 1

a)
NOT NULL significa que esse campo é requerido para preenchimento , não podendo ser nulo.

b) 
o SHOW DATABASES verifica e traz todos os bancos que tem em nosso domínio,
o comando SHOW TABLES como não especifícado em qual banco irá retornar todas as tabelas de seja qual for o database


c)

o DESCRIBE Actors mostra a tabela Actor especificando os campos e tipos de dados , tal como as configurações



Exercício 2

a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
   1200000,  
  "1963-08-23",   
  "female"
);


b)
Ao tentar injetar um outro elemento a tabela , o seguinte erro foi encontrado:

Error Code: 1136. Column count doesn't match value count at row 1

Signica que o número de valores não corresponde ao número de colunas configurados


c)
ERRO - Número de colunas difere do de valores - tirar os valores ou configurar mais colunas na tabela
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Query correta

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
);



d)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

O valor nome não foi declarado e na montagem ta tabela pede um valor padrão para esse campo
correção abaixo

INSERT INTO Actor (id, name salary, birth_date, gender)
VALUES(
  "004",
  "John Weakly",
  400000,
  "1949-04-18", 
  "male"
);

e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

o campo birth_date deve ser passado como string , se não dará erro

forma correta:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Wesley Casadão",
  719333.33,
  "1979-03-26", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Melissa Silva",
  719333.33,
  "1979-03-26", 
  "female"
);


3
a) 
SELECT * from Actor WHERE gender = "female";

b)
SELECT salary from Actor WHERE name = "Tony Ramos";

c)
SELECT * from Actor WHERE gender = "invalid";

Como não há informações encontradas para esse gender especificado , não retornará nada

d)

Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary<719333.33;


e)

SELECT id, nome from Actor WHERE id = "002"

o query acima coloca uma propiedade da tabela invalida , o correto é name e não nome 

a forma correta:

SELECT id, name from Actor WHERE id = "002"


4

a)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

Seleciona da tabela Actor nomes que iniciam ou com a letra A ou J e o salário superior a 300000

b)

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350.000

C)

SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%") 

d)
Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")  AND salary BETWEEN 350000 AND 900000