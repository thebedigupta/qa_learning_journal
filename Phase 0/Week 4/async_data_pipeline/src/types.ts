export interface User {
  readonly id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

export interface ProcessedUser {
  readonly id: Number;
  name: string;
  email: string;
  summary: string;
}
