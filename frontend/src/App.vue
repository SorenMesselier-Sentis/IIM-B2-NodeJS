<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="sass">
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    @font-face {
        font-family: "SanFrancisco";
        src:
            url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff2") format("woff2"),
            url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff") format("woff");
    }

    body {
        font-family: -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen-Sans,
            Ubuntu,
            Cantarell,
            "Helvetica Neue",
            sans-serif;
        font-weight: normal;
        margin: 0;
        h1 {
            font-weight: normal;
            margin-bottom: 0.5rem;
        }
        h2 {
            border-bottom: 1px solid #e5e5ea;
            color: #666;
            font-weight: normal;
            margin-top: 0;
            padding-bottom: 1.5rem;
        }
        .container {
            margin: 0 auto;
            max-width: 600px;
            padding: 1rem;
            .comment {
                color: #222;
                font-size: 1.25rem;
                line-height: 1.5;
                margin-bottom: 1.25rem;
                max-width: 100%;
                padding: 0;
            }
        }
    }








    @media screen and (max-width: 800px) {
        body {
            margin: 0 0.5rem;
            .container {
                padding: 0.5rem;
                .imessage {
                    font-size: 1.05rem;
                    margin: 0 auto 1rem;
                    max-width: 600px;
                    padding: 0.25rem 0.875rem;
                }
                .imessage p {
                    margin: 0.5rem 0;
                }
            }
        }
    }
</style>
