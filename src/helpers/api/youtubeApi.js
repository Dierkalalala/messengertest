import BaseApi from "@/helpers/api/baseApi";

class YoutubeApi extends BaseApi {
  getVideosByQuery(query) {
    return this.get(query);
  }
}
export default new YoutubeApi();
