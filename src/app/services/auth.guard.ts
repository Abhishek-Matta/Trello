import {Injectable} from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router"

@Injectable()
export class Guard implements CanActivate{
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return localStorage.getItem('userid')!==null;
    }
}
