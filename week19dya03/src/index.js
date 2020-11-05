//  Q. Set a npm project and make it such that it supports ES6.
// 1. Make a file on which you have performed Destructuring
// 2. Imported a file
// 3. Make a file and export its content.
// 4. Make script commands to run the file 

import 'babel-polyfill';

import UserModel from './UserModel';
import constants from './Constant';
import * as consts from './Constant';
import { APP_NAME, APP_VERSION, getVersion } from './Constant';

// Destructuring
// `...`called as spraed operaters
const Tickets ={
    name: "Gyan",
    Address: "dfffsj",
    To:"Gaya",
    From:"Patna",
    price:"20/-"
}

const{name,Address,To,From,price} = Tickets;
console.log("Name  :",name);
console.log("Address  :",Address);
console.log("To  :",To);
console.log("From :",From);
console.log("price :",price);
console.log({...Tickets});