export default {
    state: {
        news: [ 
              { 
                  id: 1, 
                  title: "Começam os treinos para nova temporada",
                  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!",
                  date: "2023-01-01",
                  img: "news1.jpg",
                  imgInfo: "Notícia 1"
              },
              { 
                  id: 2, 
                  title: "Jogo de quarta-feira termina empatado",
                  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!",
                  date: "2023-02-02",
                  img: "news2.jpg",
                  imgInfo: "Notícia 2"
              },
              { 
                  id: 3, 
                  title: "A inauguração do novo estádio será na semana que vem",
                  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam error pariatur, debitis sed, aliquid nihil voluptates deserunt quisquam, beatae ducimus quaerat sunt libero eum veniam dolor est in qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe asperiores, ex ratione consequatur ipsa impedit esse iusto incidunt quaerat eos minima, suscipit quis sit itaque quas! Officia, cumque tenetur!",
                  date: "2023-03-03",
                  img: "news3.jpg",
                  imgInfo: "Notícia 3"
              }
          ]
      },
      getters: {
          getNews(state){
              return state.news
          },
          getNewsFromId: state => id => {
            let notice = state.news.find(item => { 
                return (item.id == id)
            })

            return notice
          }
      },
}