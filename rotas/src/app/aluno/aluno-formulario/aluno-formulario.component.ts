import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunoService } from './../aluno.service';
import { IFormCanDeactivate } from './../../guard/iform-candeactivate';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }
  
  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params) => {
      this.aluno = this.alunoService.getAlunoId(params['id']);

      if(this.aluno === null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if (this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

}
