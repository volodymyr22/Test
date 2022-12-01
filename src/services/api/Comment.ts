import { AxiosPromise } from 'axios';

import { Api } from './Api';
import { Comment, RequestType } from '../../types';

export class CommentApi {
  static getComments = (data: RequestType): AxiosPromise<Comment[]> => {
    const { minValue, maxValue } = data;
    return Api.get(`/comments?_start=${minValue - 1}&_end=${maxValue}`);
  };
}
