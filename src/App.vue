<template>
    <div>
        <div class="relative /bg-white overflow-hidden   /bg-red-400 h-screen">
            <div class="max-w-screen-xl mx-auto   /bg-green-400 h-full">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32   h-full">
                    <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2   /h-100"
                         fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>

                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8   /bg-teal-400 /h-full">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start   /bg-yellow-400">
                            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div class="flex items-center justify-between w-full md:w-auto">
                                    <a href="#"
                                       class="font-medium text-teal-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Home
                                    </a>
                                    <div class="-mr-2 flex items-center md:hidden">
                                        <button @click=toggle type="button"
                                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M4 6h16M4 12h16M4 18h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block /md:ml-10 md:pr-4">
                                <a href="https://github.com/jamesdube"
                                   class="ml-8 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Github
                                </a>
                                <a href="https://twitter.com/jamesddube/"
                                   class="ml-8 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Twitter
                                </a>
                            </div>
                        </nav>
                    </div>

                    <transition
                            enter-class="duration-150 ease-out"
                            enter-active-class="opacity-0 scale-95"
                            enter-to-class="opacity-100 scale-100"
                            leave-class="duration-100 ease-in"
                            leave-active-class="opacity-100 scale-100"
                            leave-to-class="opacity-0 scale-95"
                    >
                        <div v-if=showMenu
                             class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div class="rounded-lg shadow-md">
                                <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                                    <div class="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt=""/>
                                        </div>
                                        <div class="-mr-2">
                                            <button @click=toggle type="button"
                                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                                <svg class="h-6 w-6" stroke="currentColor" fill="none"
                                                     viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="px-2 pt-2 pb-3">
                                        <a href="#"
                                           class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home
                                        </a>
                                        <a href="#"
                                           class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Github
                                        </a>
                                        <a href="#"
                                           class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Twitter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <div class="mt-10 mx-auto max-w-screen-xl px-4 /sm:mt-12 sm:px-6 /md:mt-16 /lg:mt-20 lg:px-8 xl:mt-28   /bg-blue-400 h-full flex self-center sm:items-center">
                        <div class="sm:text-center lg:text-left -- w-full ">
                            <a href="https://twitter.com/jamesddube"
                               class="flex items-center no-underline mb-10 -- sm:justify-center lg:justify-start">
                                <div class="flex-shrink-0">
                                    <img class="h-20 w-20 rounded-full border-4 border-teal-500"
                                         src="https://instagram.fhre2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87209398_1050704548636101_2662934119280803840_n.jpg?_nc_ht=instagram.fhre2-1.fna.fbcdn.net&_nc_ohc=uHTefwM9eG0AX-Jzoh3&tp=1&oh=bdc076f748be8ac7937a1098d2ddeab5&oe=6035436C"
                                         alt="">
                                </div>
                                <div class="ml-3">
                                    <p class="/font-semibold /text-white leading-tight">James Dube</p>
                                    <p class="text-sm text-gray-600 leading-tight">Software Developer</p>
                                </div>
                            </a>
                            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                I build things for <br>
                                <br class="xl:hidden"/>
                                <span class="text-teal-600">the web</span>
                            </h2>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                I'm a software developer with Ops experience, specializing in building (and occasionally
                                designing) exceptional, high-quality websites and applications.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="mailto:jamesdylandube@gmail.com"
                                       class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                     src="https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb.jpg"
                     alt=""/>
            </div>
        </div>
    </div>
</template>

<!-- Default Statcounter code for My Website https://jamesdube.com -->
<script type="text/javascript">
var sc_project=12466619; 
var sc_invisible=1; 
var sc_security="c564c9d3"; 
var sc_https=1; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js" async></script>
<noscript><div class="statcounter"><a title="web stats"
href="https://statcounter.com/" target="_blank"><img class="statcounter"
src="https://c.statcounter.com/12466619/0/c564c9d3/1/" alt="web
stats"></a></div></noscript>
<!-- End of Statcounter Code -->

<script>
    export default {
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggle() {
                this.showMenu = !this.showMenu
            }
        }
    };
</script>

<style type="text/css" src="./assets/tailwind.css"></style>
