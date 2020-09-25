import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoDetalhesResolver } from './guards/aluno-detalhes.resolver';
import { AlunosDeactivateGuard } from './../guard/alunos-deactivate.guard';
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
                { path: ':id', component: AlunoDetalhesComponent,
                    resolve: { aluno : AlunoDetalhesResolver} },
                { path: ':id/editar', component: AlunoFormularioComponent,
                    canDeactivate: [AlunosDeactivateGuard] }
            ]
        }];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunoRoutingModule { }