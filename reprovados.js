const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [8, 5, 10, 3 ];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;

  });

  const aprovados = alunos.filter((_, indice) => {
    return medias[indice] >= 7;
  
  });


  
  console.log(`Reprovados: ${reprovados}`);
  console.log(`Aprovados: ${aprovados}`);