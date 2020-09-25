import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AlunoService } from './../aluno.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService,

    ) { }

  ngOnInit(): void {
    /*this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunoService.getAlunoId(id);
    });*/

    this.inscricao = this.route.data.subscribe((info: {aluno: Aluno}) => {
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/aluno', this.aluno.id, 'editar']);
  }

}
