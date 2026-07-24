import { Routes } from '@angular/router';
import { SelectorComponent } from './components/selector-component/selector-component';
import { Header } from './components/header/header';

export const routes: Routes = [
    { path: 'app-header', component: Header },
    {path: 'app-selector-component', component: SelectorComponent}
];