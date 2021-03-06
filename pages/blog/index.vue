<template>
  <div>
    <SectionHeader title="Latest" description="All the latest Tailwind CSS news, straight from the team"/>
      <div class="flex justify-start">
        <div class="">
          <PostSummary class="border-t /border-gray-300 dark:border-gray-700 py-4" v-for="post in posts" :key="post.slug" :post="post"  />
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    async asyncData(context){
      const posts = await context.$content('blog')
      .sortBy('createdAt','desc')
      // .where({ isArchived: false })
      .fetch()
      return {
        posts
      }
    }
  };
</script>