import React from 'react'
import PropTypes from  'prop-types'
import {Encabezado,Boton, Imagen,GrdContainer,GrdRow,GrdCol,BarraTitulo,Lista,ListaItem,Enlace} from '../componentesBase/'

const BarraMenu = (props) =>
                   <div>
                       <BarraTitulo clase='navbar navbar-expand-lg navbar-dark bg-dark'>
                          <div className="container">
                              <GrdRow alineacion='start' clase="collapse navbar-collapse">
                                  <Lista clase="navbar-nav mr-auto">
                                      <ListaItem clase='nav-item active'>
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
                              </GrdRow>
                          </div>
                       </BarraTitulo>
                  </div>


BarraMenu.propTypes = {

}
BarraMenu.defaultProps = {

}

export default BarraMenu
