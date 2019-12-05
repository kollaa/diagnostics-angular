import { Report } from './Report';
import { Doctor } from './Doctor';

export interface  patient {
    id:number;
    firstname:string;
    lastname:string;
    age:number;
    gender:string;
    dob:Date;
    number:number;
    email:string;
    password:string;
    altnumber:number;
    address1:string;
    address2:string;
    city:string;
    state:string;
    code:string;  
    report:Report[];
}
