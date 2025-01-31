<script setup lang="ts">
import type { ProjectsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
import scotch from '@/assets/scotch.png'

const props = defineProps<ProjectsResponse>()
</script>

<template>
  <div
    class="w-[198.36px] h-64 lg:w-[400px] lg:h-[550px] relative"
    style="filter: drop-shadow(-7.986755847930908px 8.87417221069336px 0px rgba(0, 0, 0, 0.44))"
  >
    <div
      class="w-[187px] h-[245.5px] lg:w-[366px] lg:h-[521px] absolute left-[21px] lg:left-[40px] top-[17.5px] lg:top-[39px] bg-[#fae4f0]"
    ></div>
    <svg
      width="236"
      height="287"
      viewBox="0 0 236 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[230.3px] h-[280.85px] lg:w-[450px] lg:h-[600px]"
      preserveAspectRatio="none"
    >
      <path
        d="M19.094 3.46362C19.094 33.0189 19.6335 44.8965 19.6335 76.3283M19.6335 76.3283C19.6335 107.76 19.5501 165.048 19.094 203.551C18.6379 242.054 18.2841 279.532 18.2841 279.532C18.2841 284.97 17.2865 278.552 17.3593 275.659C17.4502 272.042 18.323 169.13 18.323 160.146C18.323 151.162 19.094 105.428 19.6335 76.3283Z"
        stroke="black"
        stroke-width="5.3245"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>

      <path
        d="M187.515 270.761C222.225 270.761 217.377 270.761 228.782 270.761C228.586 271.003 226.817 271.93 226.087 272.118C225.175 272.353 201.245 272.225 196.138 272.225C178.655 272.225 99.6782 271.349 94.5094 271.349M187.515 270.761C187.515 270.761 103.799 272.225 90.4469 272.225C77.0949 272.225 80.2529 272.265 52.0654 272.225C30.9918 272.195 5.79264 272.225 4.09691 272.225C2.40117 272.225 3.02688 270.469 3.02688 270.469C14.88 271.349 35.5087 271.349 62.6015 271.349C71.9374 271.349 82.8574 271.349 94.5094 271.349M187.515 270.761C162.141 270.761 126.179 271.349 94.5094 271.349"
        stroke="black"
        stroke-width="5.3245"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>

      <path
        d="M215.867 144.975C215.867 179.324 217.068 200.936 217.068 223.395C217.068 245.853 216.455 283.901 216.455 283.901C216.455 283.901 215.042 285.504 215.042 282.371C215.042 279.238 215.966 256.965 215.867 224.954C215.768 192.944 215.772 159.401 215.867 144.975ZM215.867 144.975C215.866 128.783 215.225 95.7077 215.263 77.3022C215.306 56.6636 215.263 26.9422 215.263 7.01343"
        stroke="black"
        stroke-width="5.3245"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>

      <path
        d="M12.6758 15.765C24.6761 15.765 35.1462 15.765 41.3194 15.765M41.3194 15.765C47.4926 15.765 74.9016 16.0237 86.5072 16.0237M41.3194 15.765C41.3194 15.765 54.7064 14.9597 62.5552 14.9597C70.404 14.9597 86.5072 16.0237 86.5072 16.0237M233.219 16.0237C220.936 16.0237 226.615 15.765 214.416 15.765C207.462 15.765 198.955 16.1962 186.76 16.0237M119.175 14.9597C127.615 14.9846 171.728 15.8112 186.76 16.0237M119.175 14.9597C110.446 14.9339 98.1129 16.0237 86.5072 16.0237M119.175 14.9597C119.175 14.9597 140.338 14.9597 152.19 14.9597M186.76 16.0237C186.76 16.0237 164.043 14.9597 152.19 14.9597M86.5072 16.0237C93.6207 16.0237 110.113 16.0237 119.175 16.0237C128.236 16.0237 144.961 15.3144 152.19 14.9597"
        stroke="black"
        stroke-width="5.3245"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>

    <ImgPb
      :record="props"
      :filename="miniature"
      width="157"
      height="135"
      class="w-[157.67px] h-[134.78px] lg:w-[284px] lg:h-[253px] absolute left-[35px] top-[28px] lg:left-[80px] lg:top-[70px] object-cover border-[1.27px] lg:border-4 border-black"
    />

    <div
      class="flex flex-col justify-start items-start w-[150.89px] lg:w-[280px] absolute left-[32px] top-[175.45px] lg:left-[80px] lg:top-[360px] gap-6"
    >
      <p class="text-[15.258278846740723px] lg:text-[24px] font-semibold text-left text-black">
        {{ titre }}
      </p>
      <p
        class="w-[150.89px] h-[26.28px] lg:w-[270px] lg:h-[50px] text-[10.172184944152832px] lg:text-[18px] text-left text-black"
      >
        {{ sous_titre }}
      </p>
    </div>

    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[19.5px] h-[20.34px] lg:w-[35px] lg:h-[35px] absolute left-[175px] top-[175px] lg:left-[330px] lg:top-[360px]"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_3054_1273)">
        <rect
          width="19.4967"
          height="20.3444"
          transform="translate(0.973633 0.0595703)"
          fill="black"
        ></rect>
        <path
          d="M13.9566 6.1969L14.3082 12.0387M13.9566 6.1969L8.06099 6.54527M13.9566 6.1969L7.48856 13.4187"
          stroke="#FDFDFD"
          stroke-width="2.03458"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>

    <img
      :src="scotch"
      class="w-[49.62px] h-[34.05px] lg:w-[90px] lg:h-[70px] absolute left-[4.62px] top-[0px] object-cover"
    />
    <img
      :src="scotch"
      class="w-[58.11px] h-[39.88px] lg:w-[100px] lg:h-[80px] absolute left-[170px] top-[235.4px] lg:left-[340px] lg:top-[510px] object-cover"
    />
  </div>
</template>
