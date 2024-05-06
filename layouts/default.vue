<template>
    <div>
        <Head>
            <Link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <Link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <Link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <Link rel="manifest" href="/favicons/site.webmanifest" />
            <Link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <Link rel="shortcut icon" href="/favicons/favicon.ico" />
            <Meta name="msapplication-TileColor" content="#da532c" />
            <Meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <Meta name="theme-color" content="#ffffff" />
        </Head>
        <Navbar />
        <slot />
    </div>
</template>