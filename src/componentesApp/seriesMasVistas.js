import React, { Component } from 'react'
import ApiSeriesMasVistas from '../accesoADatos/apiSeriesMasVistas'
import TituloItemsListado from './tituloItemsListado'
import {Encabezado,GrdContainer,GrdRow,GrdCol,Enlace} from '../componentesBase/'


class SeriesMasVistas extends Component {
     constructor(props)
     {
        super(props)
        this.state = {
           seriesMasVistas: [],
           loading: false,
           cargo: false,
           error: null
        }
      this.myApi = new ApiSeriesMasVistas()

     }
    componentDidMount() {
      this.setState({loading: true})
      /*
      this.myApi.getMasVistas().then(resultado => {
        console.log(resultado)
        this.setState({titulosMasVistas: resultado, loading: false})
      } ).catch((elError) => {
        this.setState({loading: false,cargo:false,error: elError,titulosMasVistas: []})
      }
       )*/
       let MisPeliculas = this.myApi.getSeriesMasVistasFake()
      this.setState({seriesMasVistas: MisPeliculas, loading: false})

    }
    handleOnEliminarTitulo = titulo => event => {
       event.preventDefault()
       const newSeriesMasVistas = this.state.seriesMasVistas.filter(oldTitulo => oldTitulo!== titulo)
       this.setState({seriesMasVistas: newSeriesMasVistas })
     }
    render() {
      return (
        <div>
        <GrdContainer esFluido={true}>
          <GrdRow alineacion="start">
              <GrdCol itemsPorFila={3}>
              <Encabezado text="Series mas Vistas" size="3" smalltext= {`(${this.state.seriesMasVistas.length})`} />
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              <Enlace accion="#" textoAlternativo="Ver Mas">Ver Todas</Enlace>
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              {this.state.loading && <Encabezado text="...CARGANDO ...." size={3} />}
              {this.state.cargo && <Encabezado text="Listo"  size={3} />}
              {!!this.state.error && <Encabezado text="***   ERROR ***" smalltext={this.state.error}  size={3} />}
              {this.state.seriesMasVistas.length===0 && <Encabezado text="...SIN REGISTROS ...."  size={3} />  }
              </GrdCol>
          </GrdRow>
      </GrdContainer>
      <GrdContainer esFluido={true}>
            <GrdRow>
            <TituloItemsListado titulos={this.state.seriesMasVistas.slice(0,6)} itemsPorFila={6}  onClickDeleteTitulo={this.handleOnEliminarTitulo}/>
            </GrdRow>
          </GrdContainer>
        </div>
      )
    }


   }


export default SeriesMasVistas
