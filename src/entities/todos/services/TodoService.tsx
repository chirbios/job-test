import { BaseApi } from '@/shared/services'
import type { TodoCard } from '../models'

export class TodoService extends BaseApi {
  static loadMany(): Promise<TodoCard[]> {
    return this.doRequest({
      url: '/todos?_limit=5',
      method: 'GET',
    })
  }
}
