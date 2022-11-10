import React from 'react'
import  './HeroStyles.css'

const Hero = () => {
  return (
    <div className="hero">
    <div className="container">
      <div className="content">
        <div className="col-1">
          <h1>Data to enrich your</h1>
          <h1>
            <span className="primary-color">online business</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
            laboriosam eos praesentium veritatis!
          </p>
          <div className="used-by">
            <p>USED BY</p>
            <div className="icons">
              <i className="fa-solid fa-layer-group"><i className='iconItem'>Staxx</i></i>
              <i className="fa-sharp fa-solid fa-star-of-life"><i className='iconItem'>Star AI</i></i>
              <i className="fa-brands fa-accusoft"> <i className='iconItem'>Accusoft</i></i>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="form-layout">
            <div className="form-container">
              <p className="sign-in-txt">Sign in width</p>
              <div className="social-login">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="divider">
                <p>
                  <span>Or</span>
                </p>
              </div>
              <form action>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Create Your Accaunt</button>
              </form>
            </div>
            <div className="form-footer">
              <p>
                "By signing up, you agree to our"
                <span className="primary-color"> Terms, Data Policy</span>
                "and" <span className="primary-color"> Cookies Policy.</span>
                "."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero