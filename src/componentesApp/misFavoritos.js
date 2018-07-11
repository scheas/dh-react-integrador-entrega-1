import React, { Component } from 'react'
import ApiMisFavoritos from '../accesoADatos/apiMisFavoritos'
import TituloItemsListado from './tituloItemsListado'
import {Encabezado,GrdContainer,GrdRow,GrdCol,Enlace} from '../componentesBase/'


class MisFavoritos extends Component {
     constructor(props)
     {
        super(props)
        this.state = {
           misFavoritos: [],
           loading: false,
           cargo: false,
           error: null
        }
      this.myApi = new ApiMisFavoritos()

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
       let MisTitulos = this.myApi.getMisFavoritosFake()
       console.log(MisTitulos);
      this.setState({misFavoritos: MisTitulos, loading: false})

    }
    handleOnEliminarTitulo = titulo => event => {
       event.preventDefault()
       const newMisFavoritos = this.state.misFavoritos.filter(oldTitulo => oldTitulo!== titulo)
       this.setState({ misFavoritos: newMisFavoritos })
     }
    render() {
      return (
        <div>
        <GrdContainer esFluido={true}>
          <GrdRow alineacion="start">
              <GrdCol itemsPorFila={3}>
              <Encabezado text="Mi Lista" size="3" smalltext= {`(${this.state.misFavoritos.length})`} />
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              <Enlace accion="#" textoAlternativo="Ver Mas">Ver Todas</Enlace>
              </GrdCol>
              <GrdCol itemsPorFila={3}>
              {this.state.loading && <Encabezado text="...CARGANDO ...." size={3} />}
              {this.state.cargo && <Encabezado text="Listo"  size={3} />}
              {!!this.state.error && <Encabezado text="***   ERROR ***" smalltext={this.state.error}  size={3} />}
              {this.state.misFavoritos.length===0 && <Encabezado text="...SIN REGISTROS ...."  size={3} />  }
              </GrdCol>
          </GrdRow>
      </GrdContainer>
      <GrdContainer esFluido={true}>
            <GrdRow>
            <TituloItemsListado titulos={this.state.misFavoritos.slice(0,6)} itemsPorFila={6}  onClickDeleteTitulo={this.handleOnEliminarTitulo}/>
            </GrdRow>
          </GrdContainer>
        </div>
      )
    }


   }


export default MisFavoritos
