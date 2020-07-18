<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  async asyncData({ params, payload }) {
    if (payload) return { signsPost: payload };
    else
      return {
        signsPost: await require(`~/assets/content/signs/${params.signs}.json`),
      };
  },
});
</script>