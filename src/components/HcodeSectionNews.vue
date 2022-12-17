<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual 
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para nova temporada"
                news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!"
                news-date="01/01/2022"
            />

            <HcodeSectionNewsIndividual 
                img-name="news2.jpg"
                img-info="Notícia 2"
                news-title="Jogo de quarta-feira termina empatado"
                news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!"
                news-date="07/01/2022"
            />

            <HcodeSectionNewsIndividual 
                img-name="news3.jpg"
                img-info="Notícia 3"
                news-title="A inauguração do novo estádio será na semana que vem"
                news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!"
                news-date="20/01/2022"
            />

        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
    export default{
        components: {
            HcodeSectionNewsIndividual
        }
    }
</script>

<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>