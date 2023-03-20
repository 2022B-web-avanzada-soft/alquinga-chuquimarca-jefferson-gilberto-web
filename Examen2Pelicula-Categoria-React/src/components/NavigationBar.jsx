import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './NavigationBar.css';



function Navigation(props) {

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="navigationBar">
        <div>
          <button className="btn btn-dark" type="button" onClick={() => props.history.goBack()} >Atras</button>
        </div>
        <div>
          <NavLink className="navigation-link" to='/category/popular' activeClassName='no-active'>
            <button className="btn btn-dark" type="button">Popular</button>
          </NavLink>
          <NavLink className="navigation-link" to='/category/top_rated' activeClassName='no-active'>
            <button className="btn btn-dark" type="button">Mejor Valoradas</button>
          </NavLink>
          <NavLink className="navigation-link" to='/category/upcoming' activeClassName='no-active'>
            <button className="btn btn-dark" type="button">Proximamente</button>
          </NavLink>
          <NavLink className="navigation-link" to='/category/now_playing' activeClassName='no-active'>
            <button className="btn btn-dark" type="button">Cartelera</button>
          </NavLink>
        </div>
      </form>
    </nav>
  );
}

export default withRouter(Navigation);