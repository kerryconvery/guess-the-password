export interface IPasswordGeneratorService {
  generate(length: number): string;
}