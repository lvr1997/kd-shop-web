<script setup>
import { ref } from "vue";
import { TrashIcon } from "lucide-vue-next";
import AutoFormLabel from "./AutoFormLabel.vue";
import { beautifyObjectName } from "./utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

defineProps({
  fieldName: { type: String, required: true },
  label: { type: String, required: false },
  required: { type: Boolean, required: false },
  config: { type: Object, required: false },
  disabled: { type: Boolean, required: false },
});

const inputFile = ref();
async function parseFileAsString(file) {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
      reader.readAsDataURL(file);
    }
  });
}
</script>

<template>
  <FormField v-slot="slotProps" :name="fieldName">
    <FormItem v-bind="$attrs">
      <AutoFormLabel v-if="!config?.hideLabel" :required="required">
        {{ config?.label || beautifyObjectName(label ?? fieldName) }}
      </AutoFormLabel>
      <FormControl>
        <slot v-bind="slotProps">
          <Input
            v-if="!inputFile"
            type="file"
            v-bind="{ ...config?.inputProps }"
            :disabled="disabled"
            @change="
              async (ev) => {
                const file = ev.target.files?.[0];
                inputFile = file;
                const parsed = await parseFileAsString(file);
                slotProps.componentField.onInput(parsed);
              }
            "
          />
          <div
            v-else
            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent pl-3 pr-1 py-1 text-sm shadow-sm transition-colors"
          >
            <p>{{ inputFile?.name }}</p>
            <Button
              :size="'icon'"
              :variant="'ghost'"
              class="h-[26px] w-[26px]"
              aria-label="Remove file"
              type="button"
              @click="
                () => {
                  inputFile = undefined;
                  slotProps.componentField.onInput(undefined);
                }
              "
            >
              <TrashIcon :size="16" />
            </Button>
          </div>
        </slot>
      </FormControl>
      <FormDescription v-if="config?.description">
        {{ config.description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
