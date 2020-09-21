import { AlunoService } from './../aluno.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }

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

  onInput(){}

}
