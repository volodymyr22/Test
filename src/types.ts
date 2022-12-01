export enum QueryKey {
  POST = 'post',
}

export interface Comment {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface RequestType {
  minValue: number;
  maxValue: number;
}
