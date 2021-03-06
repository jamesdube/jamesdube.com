<template>
  <div>
    <SectionHeader title="Latest" description="All the latest Tailwind CSS news, straight from the team"/>
    <div v-for="post in posts" :key="post.slug" class="border-t border-gray-300 py-8 md:grid md:grid-cols-6">
      <div class="md:col-span-2  ">
        <span class="/bg-gray-200 rounded-md px-2 py-1 text-sm">Febuary 16, 2021</span>
      </div>
      <div class="md:col-span-4">
        <nuxt-link class="flex items-center" :to="`/blog/${post.slug}`">
          <div class="font-bold mt-3 md:mt-0 text-gray-700 text-xl">{{ post.title }}</div>
        </nuxt-link>
        <div class="mt-5">
          We started working with David Luhr last summer on a project-by-project basis to help us develop a Figma version of Tailwind UI (almost ready!), as well as to leverage his accessibility expertise when building Tailwind UI templates, ensuring we were following best practices and delivering markup that would work for everyone, no matter what tools they use to browse the web.
          Today we're excited to share that David has joined the team full-time!
        </div>
        <div class="mt-5">
          <div class="text-green-600 ">
            <nuxt-link class="flex items-center" :to="`/blog/${post.slug}`">
              <span>Read more</span>
              <svg class="w-6 h-6 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData(context){
      const posts = await context.$content('blog').fetch()
      return {
        posts
      }
    }
  };
</script>