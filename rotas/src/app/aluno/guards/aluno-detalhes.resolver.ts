import { AlunoService } from './../aluno.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Aluno } from './../aluno';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlunoDetalhesResolver implements Resolve<Aluno> {

    constructor(private alunoService: AlunoService){

    }

    resolve(
        route: ActivatedRouteSnapshot
        ): Observable<any> | Promise<any> | Aluno {
            
            let id = route.params['id'];

            return this.alunoService.getAlunoId(id);
    }

}