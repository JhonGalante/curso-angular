import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

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
        canActivate: [AuthGuard]
    }, 
    { //lazy loading
        path: 'aluno', 
        loadChildren: () => import('./aluno/aluno.module').then(mod => mod.AlunoModule),
        canActivate: [AuthGuard]
    }, 
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}