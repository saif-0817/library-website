import { Routes } from "@angular/router";
import { AddBook } from "./components/add-book/add-book";
import { DeleteBook } from "./components/delete-book/delete-book";

export const dashboardRoute: Routes = [
   {
    path:'', pathMatch:'full', redirectTo:'add-book'
  },
  {
    path:'add-book', component:AddBook
  },
    {
    path:'delete-book', component:DeleteBook
  }
]