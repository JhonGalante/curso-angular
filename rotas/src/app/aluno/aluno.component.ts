import { Component, OnInit } from '@angular/core';

import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunoService: AlunoService) { }

  getAlunos(){
    return this.alunos;
  }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }

}
