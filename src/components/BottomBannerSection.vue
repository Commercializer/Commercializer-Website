<template>
  <section id="bottom-banner">
    <div class="container">
      <div class="banner">
        <p>Ready to Commercialize? Let's Talk.</p>
        <a href="https://calendly.com/commercializer/30min" target="_blank">Schedule a Call</a>
      </div>
    </div>
  </section>
</template>

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
  }
}
</style>
