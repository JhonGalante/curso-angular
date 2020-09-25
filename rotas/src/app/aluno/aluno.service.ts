import { Injectable } from '@angular/core';

import { Aluno } from './aluno'; 

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAlunoId(id: number){
    for (let i = 0; i < this.alunos.length; i++) {
      if(this.alunos[i].id == id){
        return this.alunos[i];
      }
    }
    return null;
  }

  constructor() { }
}
