<template>
  <div v-if="loading" class="loading-page">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto;"
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(85,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.875s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.875s"
            />
          </circle>
        </g>
      </g><g transform="translate(74.74873734152916,74.74873734152916)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            />
          </circle>
        </g>
      </g><g transform="translate(50,85)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.625s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.625s"
            />
          </circle>
        </g>
      </g><g transform="translate(25.25126265847084,74.74873734152916)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            />
          </circle>
        </g>
      </g><g transform="translate(15,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.375s"
            />
          </circle>
        </g>
      </g><g transform="translate(25.251262658470832,25.25126265847084)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            />
          </circle>
        </g>
      </g><g transform="translate(49.99999999999999,15)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.125s"
            />
          </circle>
        </g>
      </g><g transform="translate(74.74873734152916,25.251262658470832)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            />
          </circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .loading-page {
    @apply fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80 z-50;
  }
</style>
