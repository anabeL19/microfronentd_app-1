import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ListComponent } from './components/list/list.component';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: `${environment.prefixUrl}`, component: AppComponent},
  {path: `${environment.prefixUrl}/list`, component: ListComponent},
  {path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
