import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Customerlogin extends Component {

  state={
    nangkap:""
  }
  // Login function
  login(obj){
    axios.post('http://localhost:3002/login',{
        name: obj.name.value,
        password: obj.password.value
    }).then((respon) =>{
          var isi = respon.data
          console.log(isi.toString())
    })
  }


  render() {
    return (
    <div>
   
    <Navbar />

  {/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Customer zone</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Customer zone</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- text page--> */}
  <section className="padding-small">
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="block">
            <div className="block-header">
              <h5>Login</h5>
            </div>
            <div className="block-body"> 
              <p className="lead">Already our customer?</p>
              <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <hr/>
              
              
                <div className="form-group">
                  <label for="name" className="form-label">Name</label>
                  <input ref="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Password</label>
                  <input ref="password" type="password" className="form-control"/>
                </div>
                <div className="form-group text-center">
                  <button onClick={()=>this.login(this.refs)} type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Log in</button>&nbsp;&nbsp;
                  <Link to ="/customerregister" className="btn btn-primary"><i className="fas fa fa-edit"></i> Register</Link>
                </div>
                <div className="form-group text-center">

                </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <Footer/>

    </div>
    );
  }
}

export default Customerlogin;