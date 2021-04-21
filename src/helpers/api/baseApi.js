import {baseUrl} from "@/helpers/constants";
import {apiKey} from "@/helpers/constants";

class BaseApi {
  get(query) {
    return fetch(this._url(query));
  }
  _url(query) {
    return `${baseUrl}/?part=snippet&q=${query}&type=video&key=${apiKey}`;
  }
}

export default BaseApi;
