<template>
  <div>
    <main class="container d-block">
      <div class="input-wrapper mb-5">
        <label>
          <input
            v-model="query"
            @input="getVideos"
            type="text"
            class="form-control">
        </label>
      </div>

      <div
        v-if="videos.length"
        class="videos-wrapper">
        <div class="row">
          <div
            class="col-lg-4"
            v-for="video in videos"
            :key="video.id.videoId"
          >
            <div class="card">
              <img class="card-img-top" :src="video.snippet.thumbnails.high.url" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ video.snippet.title }}</h5>
                <p class="card-text">{{ video.snippet.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        No videos yet
      </div>
    </main>
  </div>
</template>

<script>
import youtubeApi from "@/helpers/api/youtubeApi";

export default {
  name: 'Home',
  data() {
    return {
      query: '',
      videos: [],
    }
  },
  methods: {
    async getVideos() {
      const youtubeVideosResponse = await youtubeApi.getVideosByQuery(this.query);
      const youtubeVideosJsonResponse = await youtubeVideosResponse.json();
      if (youtubeVideosResponse.status === 200) {
        console.log(youtubeVideosJsonResponse);
        this.videos = youtubeVideosJsonResponse.items;
      }
    }
  }
}
</script>

<style scoped>

</style>
