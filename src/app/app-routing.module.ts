import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { StaticticsPageComponent } from './pages/statictics-page/statictics-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { LoggedinResolverService } from './services/loggedinuser-resolver';


const routes: Routes = [
  { path: 'statistics', component: StaticticsPageComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'contact', component: ContactPageComponent, resolve: { user: LoggedinResolverService }, runGuardsAndResolvers: 'always', },
  { path: 'edit/:id', resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange', component: ContactEditPageComponent },
  { path: 'edit', resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange', component: ContactEditPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '', resolve: { user: LoggedinResolverService }, runGuardsAndResolvers: 'always', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
