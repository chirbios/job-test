import { BaseApi } from '@/shared/services'
import type { TodoCard } from '../models'

export class TodoService extends BaseApi {
  static getDetails(id: string | number) {
    return this.doRequest({
      url: `/todos/${id}`,
      method: 'GET',
    })
  }

  static loadMany(): Promise<TodoCard[]> {
    return this.doRequest({
      url: '/todos?_limit=10',
      method: 'GET',
    })
  }
}
