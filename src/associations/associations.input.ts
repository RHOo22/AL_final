import { ApiProperty } from "@nestjs/swagger";

export class AssociationsInput {

    @ApiProperty({
        description: 'List of members',
        type: Number,
    })
    public idUsers: number[];

    @ApiProperty({
        description: 'The name of the association',
        type: String,
    })
    public name: string;
}