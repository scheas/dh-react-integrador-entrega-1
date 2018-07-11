import React,{Component} from 'react'
import Axios from 'axios'
import ClassTitulo from '../accesoADatos/'

//const API_KEY = 'nuestra-api-key';
class ApiPeliculasMasVistas {
          constructor() {
            /*
            this.Axios = Axios.create({
              baseURL: 'https://swapi.co/api/',params: {
                      headers: {"Access-Control-Allow-Origin":"*"}
              }

            })
                  */
          }
          /*
          getMasVistas  = () => (
              this.Axios.get('/',
                            {}
            ).then(miRespuesta => {
              return miRespuesta.data.results.map(resultado => new ClassTitulo(resultado.name,resultado.climate,resultado.url))
            })

          )
           */

            getPeliculasMasVistasFake()  {
              let MasVistas= [{nombre: " El padrino ",imagen: "http://es.web.img2.acsta.net/cx_120_160/b_1_d6d6d6/pictures/18/06/12/12/12/0117051.jpg",id: "1628",linkdestino: "http://www.sensacine.com/peliculas/pelicula-1628/",fechaTitulo: "1973"},
                              {nombre: "El Señor de los Anillos: La Comunidad del Anillo ",imagen: "http://es.web.img2.acsta.net/cx_120_160/b_1_d6d6d6/medias/nmedia/18/89/67/45/20061512.jpg",id: "27070",linkdestino: "http://www.sensacine.com/peliculas/pelicula-27070/",fechaTitulo: "2001"},
                              {nombre: "The Good Doctor",imagen: "http://es.web.img3.acsta.net/c_150_200/pictures/17/08/15/16/43/485839.jpg?coixp=48&coiyp=31",id: "18045",linkdestino: "http://www.sensacine.com/series/serie-18045/",fechaTitulo: "2018"},
                              {nombre: "Jack Ryan",imagen: "http://es.web.img3.acsta.net/c_150_200/pictures/17/10/09/15/07/5550482.jpg",id: "19778",linkdestino: "http://www.sensacine.com/series/serie-19778/",fechaTitulo: "2017"},
                              {nombre: "Ant-Man y la Avispa",imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/18/07/03/13/52/3276833.jpg",id: "226391",linkdestino: "http://www.sensacine.com/peliculas/pelicula-226391/",fechaTitulo: "2018"},
                              {nombre: " El padrino ",imagen: "http://es.web.img2.acsta.net/cx_120_160/b_1_d6d6d6/pictures/18/06/12/12/12/0117051.jpg",id: "1628",linkdestino: "http://www.sensacine.com/peliculas/pelicula-1628/",fechaTitulo: "1973"},
                                              {nombre: "El Señor de los Anillos: La Comunidad del Anillo PARTE 2 ",imagen: "http://es.web.img2.acsta.net/cx_120_160/b_1_d6d6d6/medias/nmedia/18/89/67/45/20061512.jpg",id: "27070",linkdestino: "http://www.sensacine.com/peliculas/pelicula-27070/",fechaTitulo: "2001"},
                                              {nombre: "The Good Doctor PARTE 2",imagen: "http://es.web.img3.acsta.net/c_150_200/pictures/17/08/15/16/43/485839.jpg?coixp=48&coiyp=31",id: "18045",linkdestino: "http://www.sensacine.com/series/serie-18045/",fechaTitulo: "2018"},
                                              {nombre: "Jack Ryan PARTE 2",imagen: "http://es.web.img3.acsta.net/c_150_200/pictures/17/10/09/15/07/5550482.jpg",id: "19778",linkdestino: "http://www.sensacine.com/series/serie-19778/",fechaTitulo: "2017"},
                                              {nombre: "Ant-Man y la Avispa PARTE 2",imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/18/07/03/13/52/3276833.jpg",id: "226391",linkdestino: "http://www.sensacine.com/peliculas/pelicula-226391/",fechaTitulo: "2018"}

                      ]


              return MasVistas
            }

}


export default ApiPeliculasMasVistas
