import { Routes } from '@angular/router';
import { CommonLayout } from './layout/common-layout/common-layout';
import { Home } from './pages/home/home';
import { BookSearch } from './pages/book-search/book-search';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Admin } from './pages/admin/admin';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
   {
      path: '',
      component: CommonLayout,
      children: [
         { path: '', pathMatch: 'full', redirectTo: 'home' },
         { path: 'home', component: Home },
          { path: 'about', component: About },
            { path: 'contact', component: Contact },
         { path: 'books', component: BookSearch },
         { path: 'books/:bookdetails', component: BookSearch },
         
      ],
   },
     { path: 'admin', component: Admin },
     { path: 'dashboard', component: Dashboard },
];

