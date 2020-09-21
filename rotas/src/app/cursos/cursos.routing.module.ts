import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosGuard } from '../guard/cursos.guard';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent, canActivateChild: [CursosGuard] },
    { path: ':id', component: CursoDetalheComponent, canActivateChild: [CursosGuard] },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivateChild: [CursosGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})

export class CursosRoutingModule {}