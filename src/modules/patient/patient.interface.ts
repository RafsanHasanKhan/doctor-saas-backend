
export type IPatient = {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  contact: string;
  address?: string;
  notes?: string;
}