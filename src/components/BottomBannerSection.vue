<template>
  <section id="bottom-banner">
    <div class="container">
      <div class="banner">
        <p>Ready to Commercialize? Let's Talk.</p>
        <button>Schedule a Call</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#bottom-banner {
  background-color: #131022;
  padding-block: 102px;
  margin-top: 4rem;
}

.banner {
  background-image: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
  padding-block: 210px;

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

  button {
    border: none;
    outline: none;
    background-color: #fff;
    color: #000;
    margin-inline: auto;
    display: block;
    padding: 14px 32px;
    border-radius: 8px;
  }
}
</style>
