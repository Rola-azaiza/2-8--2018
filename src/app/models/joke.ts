export class Joke {
  Book: string;
  title: string;
  hide: boolean;
  X:integer;
  constructor(Book: string, title: string, X:integer) {
    this.Book = Book;
    this.title = title;
    this.hide = true;
    this.X=0;
  }
  toggle1() {
   this.X = this.X+1;
  }
   toggle2() {
   
    this.X = this.X-1;
    }
    
  
}
