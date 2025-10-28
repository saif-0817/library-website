import { Routes } from "@angular/router";
import { AddBook } from "./components/add-book/add-book";
import { DeleteBook } from "./components/delete-book/delete-book";
import { IssuedBook } from "./components/issued-book/issued-book";
import { ViewBooks } from "./components/view-books/view-books";
import { AddMember } from "./components/add-member/add-member";
import { Members } from "./components/members/members";
import { DueBooks } from "./components/due-books/due-books";

export const dashboardRoute: Routes = [
   {
    path:'', pathMatch:'full', redirectTo:'add-book'
  },
  {
    path:'add-book', component:AddBook
  },
    {
    path:'delete-book', component:DeleteBook
  },
   {
    path:'issued-book', component:IssuedBook
  },
   {
    path:'view-books', component:ViewBooks
  },
   {
    path:'add-member', component:AddMember
  },
   {
    path:'members', component:Members
  },
   {
    path:'due-books', component:DueBooks
  }
]