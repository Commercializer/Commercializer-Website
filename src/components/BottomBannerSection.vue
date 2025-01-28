<template>
  <section id="bottom-banner">
    <div class="container">
      <div class="banner">
        <p>Ready to Commercialize? Let's Talk.</p>
        <a
          class="schedule-call-button"
          @click.prevent
          rel="noopener"
          data-cal-link="commercializer/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
        >
          Schedule a Call
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Initialize Cal.com after the component mounts
  (function (C, A, L) {
    let p = function (a: any, ar: any) { a.q.push(ar); };
    let d = C.document;
    (C as any).Cal = (C as any).Cal || function () {
      let cal: any = (C as any).Cal;
      cal.q = cal.q || [];

      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api: any = function () {
          p(api, arguments);
        };
        api.q = api.q || [];

        const namespace = ar[1];

        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  (window as any).Cal("init", "30min", { origin: "https://cal.com" });
  (window as any).Cal.ns["30min"]("ui", { "theme": "dark", "cssVarsPerTheme": { "dark": { "cal-brand": "#47c080" } }, "hideEventTypeDetails": false, "layout": "month_view" });

});

</script>

<style scoped lang="scss">
#bottom-banner {
  background-color: #131022;
  padding-block: 102px;
  margin-top: 4rem;
  // background-image: url(../assets/img/landing/digital-agency/contact-bg.png);
}

.banner {
  background-image: url(../assets/img/landing/digital-agency/contact-bg.png),
    linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
  background-size: cover;
  background-position: center;
  padding-block: 210px;
  border-radius: 0.5rem;

  @include mq(lg) {
    padding-block: 200px;
  }

  @include mq(md) {
    padding-block: 180px;
  }

  @include mq(sm) {
    padding-block: 150px;
  }

  @include mq(xs) {
    padding-block: 125px;
  }

  p {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #fff;

    @include mq(md) {
      text-align: center;
      font-size: 28px;
      width: 90%;
      margin-inline: auto;
    }

    @include mq(sm) {
      font-size: 24px;
    }

    @include mq(xs) {
      font-size: 22px;
    }
  }

  a {
    border: none;
    outline: none;
    background-color: #fff;
    color: #000;
    margin-inline: auto;
    padding: 14px 32px;
    border-radius: 8px;
    width: 200px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
     cursor: pointer;
  }
}
</style>