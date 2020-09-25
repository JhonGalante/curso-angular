import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guard/cursos.guard';
import { AuthGuard } from './guard/auth.guard';
import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosGuard } from './guard/alunos.guard';

const appRoutes: Routes = [
    { //lazy loading
        path: 'cursos', 
        loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    }, 
    { //lazy loading
        path: 'aluno', 
        loadChildren: () => import('./aluno/aluno.module').then(mod => mod.AlunoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    }, 
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: "**", component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}