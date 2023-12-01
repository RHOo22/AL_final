import { ApiProperty } from "@nestjs/swagger";

export class AssociationsInput {

    @ApiProperty({
        description: 'List of members',
        type: Number,
    })
    public idUsers: number[];

    @ApiProperty({
        description: 'The age of the user',
        minimum: 18,
        default: 18,
        type: String,
    })
    public name: string;
}