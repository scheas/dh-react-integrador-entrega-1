import React, { Component } from 'react'
import ApiPeliculasMasVistas from '../accesoADatos/apiPeliculasMasVistas'
import TituloItemsListado from './tituloItemsListado'
import {Encabezado,GrdContainer,GrdRow,GrdCol,Enlace} from '../componentesBase/'


class PeliculasMasVistas extends Component {
     constructor(props)
     {
        super(props)
        this.state = {
           peliculasMasVistas: [],
           loading: false,
           cargo: false,
           error: null
        }
      this.myApi = new ApiPeliculasMasVistas()

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
       let MisPeliculas = this.myApi.getPeliculasMasVistasFake()
      this.setState({peliculasMasVistas: MisPeliculas, loading: false})

    }
    handleOnEliminarTitulo = titulo => event => {
       event.preventDefault()
       const newPeliculasMasVistas = this.state.peliculasMasVistas.filter(oldTitulo => oldTitulo!== titulo)
       this.setState({ peliculasMasVistas: newPeliculasMasVistas })
     }
    render() {
      return (
        <div>
        <GrdContainer esFluido={true}>
          <GrdRow alineacion="start">
              <GrdCol itemsPorFila={3}>
              <Encabezado text="Peliculas mas Vistas" size="3" smalltext= {`(${this.state.peliculasMasVistas.length})`} />
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              <Enlace accion="#" textoAlternativo="Ver Mas">Ver Todas</Enlace>
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              {this.state.loading && <Encabezado text="...CARGANDO ...." size={3} />}
              {this.state.cargo && <Encabezado text="Listo"  size={3} />}
              {!!this.state.error && <Encabezado text="***   ERROR ***" smalltext={this.state.error}  size={3} />}
              {this.state.peliculasMasVistas.length===0 && <Encabezado text="...SIN REGISTROS ...."  size={3} />  }
              </GrdCol>
          </GrdRow>
      </GrdContainer>
      <GrdContainer esFluido={true}>
            <GrdRow>
            <TituloItemsListado titulos={this.state.peliculasMasVistas.slice(0,6)} itemsPorFila={6}  onClickDeleteTitulo={this.handleOnEliminarTitulo}/>
            </GrdRow>
          </GrdContainer>
        </div>
      )
    }


   }


export default PeliculasMasVistas
