<template>
  <div
    class="-all flex h-7 cursor-pointer items-center rounded pl-2 pr-1 text-gray-800 duration-300 ease-in-out"
    :class="{
      'w-full': isExpanded,
      'w-8': !isExpanded,
      'shadow-sm': isActive,
      [bgColor]: isActive,
      [hvColor]: !isActive,
    }"
    @click="handleNavigation"
  >
    <span
      class="shrink-0 text-gray-700"
      :class="{
        'text-gray-900': !isExpanded,
      }"
    >
      <Icon v-if="typeof icon === 'string'" :icon="icon" class="h-4 w-4" />
      <component :is="icon" v-else class="h-4 w-4" />
    </span>
    <div
      class="-all ml-2 flex shrink-0 grow items-center justify-between text-sm duration-300 ease-in-out"
      :class="{
        'opacity-100': isExpanded,
        'opacity-0': !isExpanded,
        '-z-50': !isExpanded,
      }"
    >
      {{ label }}
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

interface P {
  icon: unknown;
  label: string;
  isExpanded?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  to?: string;
  bgColor?: string;
  hvColor?: string;
}

const props = withDefaults(defineProps<P>(), {
  isActive: false,
  onClick: () => () => true,
  to: "",
  bgColor: "bg-white",
  hvColor: "hover:bg-gray-100",
});
const router = useRouter();

function handleNavigation() {
  props.onClick();
  if (!props.to) return;
  if (props.to === router.currentRoute.value.name) return;
  router.push({
    name: props.to,
  });
}
</script>
