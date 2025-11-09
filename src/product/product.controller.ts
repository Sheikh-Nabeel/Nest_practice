import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productservice:ProductService){}

    @Get()
    getAllProducts(){
        return this.productservice.getAllProducts();
    }

    @Get(":id")
    getproductbyId(@Param('id')id:string){
return this.productservice.getproductbyid(Number(id));
    }
}
