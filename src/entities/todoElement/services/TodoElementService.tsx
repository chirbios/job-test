import { BaseApi } from '@/shared/services'
import type { TodoElementModel } from '../models'

export class TodoElementService extends BaseApi {
  static loadMany(id: string): Promise<TodoElementModel[]> {
    return this.doRequest({
      url: `/todos/${id}`,
      method: 'GET',
    })
  }
}
