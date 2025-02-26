import { inject } from '@angular/core';
import { MongoObject } from '../types/mongo-object';
import { BaseDatatable } from '../types/base-datatable';
import { HttpClientService } from './http-client.service';

export class BaseCrudService<T> {
  protected path: string = '';
  protected httpClientService: HttpClientService = inject(HttpClientService);

  create(data: T) {
    return this.httpClientService.postJSON<T>(this.path, {
      data,
      isAlertError: true,
      isLoading: true,
    });
  }

  update(_id: string, data: Partial<T>) {
    let obj = data as MongoObject;
    delete obj.id;
    return this.httpClientService.patchJSON<T>(this.path + '/' + _id, {
      data: obj,
      isAlertError: true,
      isLoading: true,
    });
  }

  getMany(data?: {
    q?: string;
    page?: number;
    limit?: number;
    orderBy?: string;
    order?: -1 | 1;
    [key: string]: any;
  }) {
    return this.httpClientService.getJSON<BaseDatatable<T>>(this.path, {
      data,
      isAlertError: true,
      isLoading: true,
    });
  }

  getById(_id: string, data?: { [key: string]: any }) {
    return this.httpClientService.getJSON<T>(this.path + '/' + _id, {
      data,
      isAlertError: true,
      isLoading: true,
    });
  }

  delete(_id: string) {
    return this.httpClientService.deleteJSON<T>(this.path + '/' + _id, {
      isAlertError: true,
      isLoading: true,
    });
  }
}
