import { MedicareServices } from './MedicalService';

export interface Doctor {
    
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
    degree:string;
    specality:string;
    workhours:string;
    clinicname:string;
    medicareserviceid:number;   
    medicareService:MedicareServices;
}


