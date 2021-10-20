export interface Student {
    studentId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
  }
  
export interface Response {
    students: Student[];
  }
  export interface Product {
    productName: string;
    price: number;
    src: string;
  }
  export interface Filter {
    value: string;
    viewValue: string;
  }

  export interface Log{
      event:string;
      date:Date;
  }
  export interface PauseTime{
    pauseTime:number
  }