const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 }
  ];
  
  function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }

  const alunosAprovados = filtrarAlunosAprovados(alunos);
  console.log(alunosAprovados);