
const turma =
    {
        id: "UC1",
        nome: "Usabilidade",
        ementa: "ishiahasisiahais",
        diasAula: "Quintas e Sextas as 19h"
    }

            /*Não fazer dessa forma*/
            //var a = 54;

            /*Fazer de preferência assim. Variavel constante que não pode ser modificada*/
            //const b = 10

            /*Fazer uma var que pode ser mudada. Ainda assim, elas existem somente dentro do seu escopo ou em escopos menores*/
            //c=58;
            //alert(a);

            /*Usar WHILE quando o tamanho do laço não é definido e FOR quando tem um lenght, sempre adicionando +1 ao contador*/
            /*Usar Switch/case como uma forma de executar por transbordamento. Roda A, B e C. Ou Não roda A mas roda B e C*/
            
            let alu1 = {
                nome: 'Luana',
                idade: 20,
                sexo: 'F'
            }

            const alunos = [
                'Cristina', alu1, 'Diego', 'Lucio', 'Lukas', 'Luiza', 'Gabriela', 'Larissa', 'Julio', 'Debora'
            ];
            function buscarAlunos() {

                alunos.push("Gabriel Matos")
                alunos.sort();
                const ul = document.getElementById("listaDeAlunos");
                //ul.innerHTML = "";
                let itens = '';

                //for(let i = 0; i < alunos.length; i++){
                //    itens = itens + '<li>'+alunos[i]+'</li>';
                // };


                /*Arrow function substitui a chamada "function" por um "=>"*/
                alunos.forEach((alunos) => {
                    itens = itens + '<li>'+alunos.nome+'</li>'+'<li>'+alunos.idade+'</li>';
                });

                ul.innerHTML = itens;

                /*Visibility: hidden = O elemento acupa espaço mas não aparece. Já o Display: none = Não ocupa espaço e não aparece*/
                document.getElementById("botaoDeCarregar").classList.add("hidden");
                document.getElementById("botaoDeLimpar").classList.remove("hidden");  
            }

            function limpaLista(){
                const ul = document.getElementById("listaDeAlunos");
                ul.innerHTML = '';
                document.getElementById("botaoDeCarregar").classList.remove("hidden");
                document.getElementById("botaoDeLimpar").classList.add("hidden");
            }
            /*Infos sobre documentação W3School = conteúdo leve. MDN =  Conteúdo mais denso*/


const 