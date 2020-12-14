import { FrameworkDto } from "../dtos/framework-dto";
import { ID } from "../types/types";

export class FrameworkModel {
    ID: ID;
    Name: string;
    FullName: string;
    URL: string;
    constructor(frameworkDto?: FrameworkDto) {
        frameworkDto ? this.FromDTO(frameworkDto) : undefined;
    }
    ToDTO(): FrameworkDto {
        const dto: FrameworkDto = {
            id: this.ID,
            name: this.Name,
            full_name: this.FullName,
            html_url: this.URL

        }
        return dto;
    }
    FromDTO(dto: FrameworkDto): FrameworkModel {
        this.ID = dto.id;
        this.Name = dto.name;
        this.FullName = dto.full_name;
        this.URL = dto.html_url;
        return this;
    }
}