import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetch_category, set_category } from '../redux/actions/actions';

function NavBar() {
  var loading=useSelector((state)=>state.loading_category);
  var arr_category=useSelector((state)=>state.data_category);
  var error=useSelector((state)=>state.error_category);
  var category=useSelector((state)=>state.current_category);
  var cart=useSelector((state)=>state.cart);
  var dispatch=useDispatch();
  useEffect(()=>{
    if(category == 'Select Category')
    dispatch(fetch_category());
  },[]);
   

  if(loading){
    return(
      <>
      <h2>Category Loading....</h2>
      </>
      
    )
  }
  else if(arr_category.length!= 0){
    return (
      <>
      {/* Navbar Start */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                {category}
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                {
                   arr_category.map((e,index)=>(<div key={index} onClick={()=>{ dispatch(set_category(e.toUpperCase()))}} className="nav-item nav-link">
                    {e.toUpperCase()}
                    </div>))
                }
                 
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink to="/" className="nav-item nav-link active">
                    Home
                  </NavLink>
                  <NavLink to="/shop" className="nav-item nav-link">
                    Shop
                  </NavLink>
                  <NavLink to="/detail" className="nav-item nav-link">
                    Shop Detail
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="/"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1" />
                    </NavLink>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <NavLink to="/cart" className="dropdown-item">
                        Shopping Cart
                      </NavLink>
                      <NavLink to="/checkout" className="dropdown-item">
                        Checkout
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact
                  </NavLink>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href="" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      
                    </span>
                  </a>
                  <NavLink to="/cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      {cart.length}
                    </span>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </>
    
    )
  }
  else{
    return(
    <>
    <h2>There is some problem in Loading....</h2>
    </>
    );
  }

 
}

export default NavBar