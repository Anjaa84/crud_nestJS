import {IsInt , IsNotEmpty} from 'class-validator'

export class CompanyDTO {
    @IsNotEmpty()
    cid: string
    @IsNotEmpty()
    body:string

    
}