//1-Filmes de açao lançados entre 2000 e 2003.
db.filmes.find({data_estreia:{$gte:new Date(2000,1,1),$lte:new Date(2003,12,31)},generos:{$in:["Action"]}},{_id:0,titulo:1,generos:1,data_estreia:1})

//2-Filmes de Comedia ou Terror com menos de 2 horas
db.filmes.find({$or:[{generos:{$in:["Comedy"]}},{generos:{$in:["Comedy"]}}],duracao:{$lt:120}},{_id:0,titulo:1,generos:1,duracao:1})

//3-Filmes onde bruce willis atuou.
db.filmes.find({atores:{$in:["Bruce Willis"]}},{_id:0,titulo:1,atores:1})

//4-Quantos filmes arrecadarão mais de 1 milhao.
db.filmes.count({arrecadacao:{$gt:1000000}})

//5-Quais os diretores dos 10 filmes com maior arrecadação.
db.filmes.find({},{_id:0,diretores:1,arrecadacao:1}).sort({arrecadacao:-1}).limit(10)

//6-Filmes dirigidos por Steven Spierlberg na decada de 90.
db.filmes.find({diretores:{$in:["Steven Spierlberg"]},data_estreia:{$gte:new Date(1990,1,1),$lte:new Date(1999,12,31)}},{_id:0,titulo:1,data_estreia:1,diretores:1})

//7-Qual o filmes com mais de 3 horas que teve a maior arrecadação.
db.filmes.find({duracao:{$gte:180}},{_id:0,titulo:1,duracao:1,arrecadacao:1}).sort({nota:-1}).limit(1)

//8-Quantos diretores diferentes tivemos em 2005.
db.filmes.distinct("diretores",{data_estreia:{$gte:new Date(2005,1,1),$lte:new Date(2005,12,31)}},{_id:0,titulo:1,diretores:1}).count()

//9-Quais os atores de filmes de ação e comedia de 2010.
db.filmes.distinct("atores",{generos:{$in:["Action"],$in:["Comedy"]}, data_estreia:{$gte:new Date(2010,1,1),$lte:new Date(2010,12,31)}}, {_id:0,titulo:1,atores:1})
//10-Qual o filme com Brad Pitt com maior duração.
db.filmes.find({atores:{$in:["Brad Pitt"]}},{_id:0,titulo:1}).sort({duracao:-1}).limit(1)