1
a)

ALTER TABLE Actor DROP COLUMN salary;

Altera a tabela Actor removendo a coluna salary

b)

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Altera a tabela Actor mudando o nome da coluna gender para sex e a configuração do tipo para varchar(6)

c)

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Altera a tabela Actor mudando o nome da coluna gender para gender e a configuração do tipo para varchar(255)

d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2

a)

UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1949-04-18"
WHERE id = "004"

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"


b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";


UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

c)
SELECT Actor
WHERE id = "005"


UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "009";


d)

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "009";

A IDE do sql ao executar o comando apresenta que tudo está certo, mas retorna que foram afetadas 0 linhas, visto que não existe ator com o id informado 

3)

a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";


b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;

    4)
    a)
    SELECT MAX(salary) FROM Actor