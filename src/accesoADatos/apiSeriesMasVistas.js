import React,{Component} from 'react'
import Axios from 'axios'
import ClassTitulo from '../accesoADatos/'

//const API_KEY = 'nuestra-api-key';
class ApiSeriesMasVistas {
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

            getSeriesMasVistasFake()  {
              let MasVistas= [{nombre: "Vis A Vis",imagen: "http://es.web.img2.acsta.net/cx_120_160/pictures/16/03/10/09/39/100264.jpg",id: "2015",linkdestino: "http://www.sensacine.com/series/serie-18960/", fechaTitulo: "2015"},
                              {nombre: "Breaking Bad ",imagen: "http://es.web.img1.acsta.net/cx_120_160_49_45/medias/nmedia/18/74/23/35/19779968.jpg",id: "3517",linkdestino: "http://www.sensacine.com/series/serie-3517/",fechaTitulo: "2008"},
                              {nombre: " Dexter ",imagen: "http://es.web.img1.acsta.net/cx_120_160/pictures/14/03/05/11/49/010324.jpg",id: "3004",linkdestino: "http://www.sensacine.com/series/serie-3004/",fechaTitulo: "2006"},
                              {nombre: "Vis A Vis TEMPORADA 2",imagen: "http://es.web.img2.acsta.net/cx_120_160/pictures/16/03/10/09/39/100264.jpg",id: "2015",linkdestino: "http://www.sensacine.com/series/serie-18960/", fechaTitulo: "2015"},
                              {nombre: "Breaking Bad  TEMPORADA 2",imagen: "http://es.web.img1.acsta.net/cx_120_160_49_45/medias/nmedia/18/74/23/35/19779968.jpg",id: "3517",linkdestino: "http://www.sensacine.com/series/serie-3517/",fechaTitulo: "2008"},
                              {nombre: " Dexter  TEMPORADA 2",imagen: "http://es.web.img1.acsta.net/cx_120_160/pictures/14/03/05/11/49/010324.jpg",id: "3004",linkdestino: "http://www.sensacine.com/series/serie-3004/",fechaTitulo: "2006"},
                              {nombre: "Vis A Vis TEMPORADA 3",imagen: "http://es.web.img2.acsta.net/cx_120_160/pictures/16/03/10/09/39/100264.jpg",id: "2015",linkdestino: "http://www.sensacine.com/series/serie-18960/", fechaTitulo: "2015"},
                              {nombre: "Breaking Bad  TEMPORADA 3",imagen: "http://es.web.img1.acsta.net/cx_120_160_49_45/medias/nmedia/18/74/23/35/19779968.jpg",id: "3517",linkdestino: "http://www.sensacine.com/series/serie-3517/",fechaTitulo: "2008"},
                              {nombre: " Dexter  TEMPORADA 3",imagen: "http://es.web.img1.acsta.net/cx_120_160/pictures/14/03/05/11/49/010324.jpg",id: "3004",linkdestino: "http://www.sensacine.com/series/serie-3004/",fechaTitulo: "2006"}] 

              return MasVistas
            }

}


export default ApiSeriesMasVistas
