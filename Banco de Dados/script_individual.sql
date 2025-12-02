use boxe;

select * from usuario;

create table treino (
idTreino int primary key auto_increment,
mes int,
constraint chkMes check ( mes in(01,02,03,04,05,06,07,08,09,10,11,12)),
dias_treino int,
horas int,
fkUsuario int,
constraint fkMesUsuario foreign key (fkUsuario) references usuario(idUsuario));

create table quiz (
idQuiz int primary key auto_increment,
pergunta varchar(100));

create table estatistica (
idEstatistica int auto_increment,
quiz_id int,
usuario_id int,
porcentagem int,
constraint pkComposta primary key (idEstatistica,quiz_id,usuario_id),
constraint fkEstaUsuario
	foreign key (usuario_id) references usuario(idUsuario),
constraint fkEstaQuiz
	foreign key (quiz_id) references quiz(idQuiz));
    
create table resposta (
idResposta int,
fkQuiz int,
constraint pkComposta primary key (idResposta, fkQuiz),
descricao varchar(100),
respostaCerta char(3),
constraint chkCerta check (resposta_certa in('Sim','Não')));

insert into quiz (pergunta) values
('Qual o lutador com o maior número de nocautes na carreira?'),
('Qual brasileiro foi o ultimo campeão mundial no boxe?'),
('Quantas vitórias Floyd Mayweather tem em sua carreira?'),
('Qual lutador é conhecido por morder as luvas'),
('Em que ano Maguila foi campeão mundial?'),
('Qual a diferença entre Boxe e Kickboxing?'),
('Em que ano Muhammad Ali se aposentou do Boxe?'),
('Em que ano o boxe voltou aos Jogos Olímpicos?'),
('Qual lutador de MMA desafiou Floyd Mayweather?'),
('Qual o melhor esporte de combate?');

insert into resposta (descricao,respostaCerta,fkQuiz) values 
('Archie Moore','Sim',1),
('Gervonta Davis','Não',1),
('Anderson Silva','Não',1),
('Billy Fox','Não',1),
('Popó Freitas','Não',2),
('Adilson Maguila','Não',2),
('Charles Oliveira','Não',2),
('Robson Conceição','Sim',2),
('77 Vitórias','Não',3),
('27 Vitórias','Não',3),
('50 Vitórias','Sim',3),
('64 Vitórias','Não',3),
('Gervonta Davis','Não',4),
('Muhammad Ali','Não',4),
('José Aldo','Não',4),
('Mike Tyson','Sim',4),
('1980','Não',5),
('1990','Não',5),
('1995','Sim',5),
('2000','Não',5),
('O Boxe utiliza os pés, já o Kickboxing apenas as mãos.','Não',6),
('Kickboxing é uma luta estilo jiu jitsu.','Não',6),
('Não há diferenças.','Não',6),
('Boxe utiliza apenas as mãos, já o Kickboxing utiliza tanto os pés quanto as mãos','Sim',6),
('1981','Sim',7),
('1970','Não',7),
('1984','Não',7),
('1962','Não',7),
('1950','Não',8),
('1945','Não',8),
('1970','Não',8),
('1904','Sim',8),
('Anderson Silva','Não',9),
('Alex Poatan','Não',9),
('José Aldo','Não',9),
('Conor McGregor','Sim',9),
('Boxe','Não',10),
('Jiu Jitsu','Não',10),
('Todos, cada modalidade tem seus pontos fortes.','Sim',10),
('Muay Thai','Não',10);

-- GRAFICOS
select mes, SUM(dias_treino) as dias, SUM(horas) as horas from treino where fkUsuario = 15 group by mes order by mes;

-- KPI FREQUENCIA
select mes,SUM(dias_treino) as dias, SUM(horas) as hora from treino where fkUsuario = 15 group by mes order by dias desc limit 1;

-- KPI INTENSIDADE
select mes,
case 
when dias_treino <8 then 'Baixa'
when dias_treino <15 then 'Boa'
else 'Alta'
end as treino from treino where fkUsuario = 15 group by mes order by mes desc limit 1;

-- KPI MEDIA
SELECT 
    ROUND(SUM(horas) / COUNT(DISTINCT mes), 1) AS horas_por_mes
FROM treino where fkUsuario = 15;