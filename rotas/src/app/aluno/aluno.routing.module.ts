import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './../guard/alunos.guard';
import { AlunoComponent } from './aluno.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';

const alunosRoutes: Routes = 
        [{
            path: '', 
            component: AlunoComponent,
            canActivateChild: [AlunosGuard],
            children: [
                { path: 'novo', component: AlunoFormularioComponent },
                { path: ':id', component: AlunoDetalhesComponent },
                { path: ':id/editar', component: AlunoFormularioComponent }
            ]
        }];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunoRoutingModule { }