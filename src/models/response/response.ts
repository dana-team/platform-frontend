export interface IFetchResponse {
  status: number;
  headers: Headers;
  ok: boolean;
  body: object;
}

export class FetchResponse implements IFetchResponse {
  public status: number;
  public headers: Headers;
  public ok: boolean;
  public body: object;

  constructor(response: Response, data: object) {
    this.status = response.status;
    this.headers = response.headers;
    this.ok = response.ok;
    this.body = data;
  }
}
