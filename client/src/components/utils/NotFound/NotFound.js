import React from 'react'
import './NotFound.css'

function NotFound() {
    return (
 
    
        <div className="container">
        <div className="topic">Manager-SV</div>
        <div className="content">
          <input type="radio" name="slider" defaultChecked id="home" />
          <input type="radio" name="slider" id="blog" />
          <input type="radio" name="slider" id="help" />
          <input type="radio" name="slider" id="code" />
          <input type="radio" name="slider" id="about" />
          <div className="list">
            <label htmlFor="home" className="home">
              <i className="fas fa-home" />
              <span className="title">Home</span>
            </label>
            <label htmlFor="blog" className="blog">
              <span className="icon"><i className="fas fa-blog" /></span>
              <span className="title">Blog</span>
            </label>
            <label htmlFor="help" className="help">
              <span className="icon"><i className="far fa-envelope" /></span>
              <span className="title">Help</span>
            </label>
            <label htmlFor="code" className="code">
              <span className="icon"><i className="fas fa-code" /></span>
              <span className="title">Code</span>
            </label>
            <label htmlFor="about" className="about">
              <span className="icon"><i className="far fa-user" /></span>
              <span className="title">About</span>
            </label>
            <div className="slider" />
          </div>
          <div className="text-content">
            <div className="home text">
              <div className="title">Home Manager</div>
              <p>1111</p>
            </div>
            <div className="blog text">
              <div className="title">Blog Content</div>
              <p>222222222</p>
            </div>
            <div className="help text">
              <div className="title">Help </div>
              <p>222</p>
            </div>
            <div className="code text">
              <div className="title">Code Content</div>
              <p>444444444</p>
            </div>
            <div className="about text">
              <div className="title">About Content</div>
              <p>linh</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
;
export default NotFound
