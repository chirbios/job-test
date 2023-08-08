import { BaseApi } from '@/shared/services'
import type { BaseDto } from '../models'

export class BaseDtoService extends BaseApi {
  static loadDetail(id: string | number): Promise<BaseDto> {
    // return this.doRequest({
    //   url: `/some_url/${id}`,
    //   method: 'GET',
    // })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: 'test',
        })
      }, Math.random() * 1000)
    })
  }

  static loadMany(): Promise<BaseApi[]> {
    return this.doRequest({
      url: '/some_url/',
      method: 'GET',
    })
  }

  static create(dto: BaseDto) {
    return this.doRequest({
      method: 'post',
      url: '/some_url/',
      data: dto,
    })
  }
}
