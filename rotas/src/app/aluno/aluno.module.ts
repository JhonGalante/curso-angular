import { AlunoDetalhesResolver } from './guards/aluno-detalhes.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlunosDeactivateGuard } from './../guard/alunos-deactivate.guard';
import { AlunosGuard } from './../guard/alunos.guard';
import { AlunoComponent } from './aluno.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoService } from './aluno.service';

@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule,
        FormsModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        AlunoComponent, 
        AlunoFormularioComponent, 
        AlunoDetalhesComponent
    ],
    providers: [AlunoService, 
                AlunosGuard,
                AlunosDeactivateGuard,
                AlunoDetalhesResolver
    ],
})
export class AlunoModule { }
