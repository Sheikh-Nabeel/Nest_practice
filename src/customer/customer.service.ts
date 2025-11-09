import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    private Customers:Customer[]=[];

  getAllCustomers():Customer[]{
    return this.Customers;
  }

  addCustomer(createCustomerDto:CreateCustomerDto):Customer{
    const newcustomer:Customer={
        id:Date.now(),
        ...createCustomerDto
    };
    this.Customers.push(newcustomer);
    return newcustomer;
    }
    
  }

