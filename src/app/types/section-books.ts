export interface SectionBooks {
    title?:string,
    books?:BooksDescription[]
    
}


interface BooksDescription{
bookImg:string,
bookTitle:string;
author:string,
availablity:string,
genre:string,
section:string,
isbn:string
}