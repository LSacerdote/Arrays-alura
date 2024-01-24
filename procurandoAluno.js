const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9 ];

const lista = [alunos, notas];

function exibeNomeENota(aluno){
if (lista[0].includes(aluno)) {

    const [alunos, medias] = lista;
    
    const indice =(alunos.indexOf(aluno));
    const mediaAluno = medias[indice];
  
console.log(`${aluno} tem a média ${mediaAluno}.`);

}else{
    console.log("aluno não encontrado");
}
}

exibeNomeENota("João");


