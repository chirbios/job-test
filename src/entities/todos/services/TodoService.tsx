import { BaseApi } from '@/shared/services'
import type { TodoCard, TodoCreate } from '../models'

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

  static create(dto: TodoCreate) {
    return this.doRequest({
      url: '/todos?_limit=10',
      method: 'POST',
      data: dto,
    })
  }

  static nextPages(currentPage: number): Promise<TodoCard[]> {
    return this.doRequest({
      url: `/todos?_page=${currentPage}`,
      method: 'GET',
    })
  }

  static sortCompletedTrue(): Promise<TodoCard[]> {
    return this.doRequest({
      url: '/todos?_sort=completed&_order=desc,asc&_limit=10&_page=1',
      method: 'GET',
    })
  }

  static sortTitle(): Promise<TodoCard[]> {
    return this.doRequest({
      url: '/todos?_sort=title&_limit=10&_page=1',
      method: 'GET',
    })
  }
}
