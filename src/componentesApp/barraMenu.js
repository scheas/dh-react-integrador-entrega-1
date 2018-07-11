import React from 'react'
import PropTypes from  'prop-types'
import {Encabezado,Boton, Imagen,GrdContainer,GrdRow,GrdCol,BarraTitulo,Lista,ListaItem,Enlace} from '../componentesBase/'
import BarraMenuWebsiteName from './barraMenuWebsiteName'

const BarraMenu = (props) =>
                   <div>
                       <BarraTitulo clase='navbar navbar-default'>
                          <GrdContainer esFluido={true}>
                              <BarraMenuWebsiteName nombreWebsite='My Movie DataBase' />
                                  <Lista clase="nav navbar-nav">
                                      <ListaItem clase='nav-item'>
                                        <Enlace clase="nav-link">
                                          Home
                                        </Enlace>
                                      </ListaItem>
                                      <ListaItem clase='nav-item'>
                                        <Enlace clase="nav-link">
                                            Peliculas
                                        </Enlace>
                                      </ListaItem>
                                      <ListaItem clase='nav-item'>
                                         <Enlace clase="nav-link">
                                             Series
                                        </Enlace>
                                      </ListaItem>
                                      <ListaItem clase='nav-item'>
                                        <Enlace clase="nav-link">
                                          Mi Lista
                                        </Enlace>
                                      </ListaItem>
                                  </Lista>
                          </GrdContainer>
                       </BarraTitulo>
                  </div>


BarraMenu.propTypes = {

}
BarraMenu.defaultProps = {

}

export default BarraMenu
