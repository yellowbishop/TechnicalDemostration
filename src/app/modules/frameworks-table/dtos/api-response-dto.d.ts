import { FrameworkDto } from "./framework-dto";

export interface APIResponseDto {
    total_count: number;
    incomplete_results: boolean;
    items: FrameworkDto[];
}