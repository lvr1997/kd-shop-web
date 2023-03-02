<template>
  <!-- 首页：
    轮播最新的公告和图片
   -->
  <!-- Banner start -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>

          <div class="max-w-lg lg:mx-12 lg:order-2">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
              <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
              <div class="mt-6">
                  <a href="#" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">去发布我的闲置</a>
              </div>
          </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo">
      </div>
  </div>
  </section>
  
  <!-- Banner end -->
  <!-- 最新发布  start  -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Latest Work</h1>

        <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
          <button
              class="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
              Animation
          </button>

          <button
              class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
              Web design
          </button>

          <button
              class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
              App design
          </button>

          <button
              class="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
              Branding
          </button>
      </div>

      <!-- new goods -->
      <section class="mt-8 space-y-8 lg:mt-12">
          <div class="flex flex-wrap -m-4">
            <!-- one product -->
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
              >
                <div
                  class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80);
                  "
                ></div>

                <div
                  class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
                >
                  <h3
                    class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                  >
                    Nike Revolt
                  </h3>

                  <div
                    class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
                  >
                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                    <button
                      class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <button
          class="flex mx-auto mt-10 text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          更多...
        </button>
      </section>
    </div>
  </section>

  <!-- 最新发布  end  -->
</template>

<script setup>

</script>
