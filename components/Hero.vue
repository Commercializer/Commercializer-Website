<template>
    <section class="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4"
        data-bs-theme="dark">
        <b-container class="position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
            <b-row class="pt-3 pb-2 py-md-4 flex-lg-row-reverse gap-5 gap-lg-0 justify-content-between pe-lg-4">

                <b-col xl="4" md="4" class="d-md-flex justify-content-center">
                    <ParralaxWrapper custom-class="parallax mx-auto ms-md-0 me-md-n5"
                        :custom-style="{ maxWidth: '100%' }">
                        <div class="parallax-layer zindex-2" data-depth="0.1">
                            <nuxt-img src="/images/logo.png" alt="Ca" class="hero-image" />
                        </div>
                    </ParralaxWrapper>
                </b-col>
                <b-col xl="7" md="7" class="pt-lg-5 text-center text-md-start mb-4 mb-md-0">
                    <h1 class="display-3 pb-2 pb-sm-3 brand-gradient-text">Commercializing Innovations</h1>
                    <p class="d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5 description">
                        Transforming groundbreaking ideas into market-leading products
                    </p>
                    <div class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0">
                        <GetCommercializedBtn />
                    </div>
                </b-col>

            </b-row>
            <div class="country-list mt-4">
                <div class="country">
                    <nuxt-img src="/images/flags/us.png" height="200" width="300"/>
                    <span>
                        Delaware, USA
                    </span>
                </div>
                <div class="country">
                    <nuxt-img src="/images/flags/qa.png" height="200" width="300"/>
                    <span>
                        Doha, Qatar
                    </span>
                </div>
                <div class="country">
                    <nuxt-img src="/images/flags/lk.png" height="200" width="300" />
                    <span>
                        Colombo, Sri Lanka
                    </span>
                </div>
            </div>
        </b-container>
    </section>
</template>


<style lang="scss" scoped>
.brand-gradient-text {
    background: linear-gradient(90deg, #81cb30, #14b7c6);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}


.description {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
}

.country-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
}


.country {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    font-size: 1.25rem;

    img {
        height: 32px;
        width: 48px;    }

    span {
        text-align: center;
        font-weight: 600;
        color: #fff
    }
}


.hero-image {
    width: 70%;
    margin-inline: auto;

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 992px) {
        width: 90%;
    }

    @media (min-width: 1200px) {
        width: 100%;
    }
}
</style>