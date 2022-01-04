import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import image from './assets/banner.svg';

function App() {
  return (
    <div>
      {/* nav bar  */}
       <div class="container-fluid header">
            <div class="">
                <nav class="navbar navbar-expand-lg navbar-light bg-white containerPadding">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  d-flex align-items-center justify-content-between" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">iTesseract</a>
                    <ul class="navbar-nav mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Solution</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Course</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Instructors</a>
                        </li>
                        <li class="nav-item">                
                            <form class="form-inline my-2 my-lg-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                               
                            </form>
                        </li>
                        <li class="nav-item">
                            <button class="btn signInButton text-white font-weight-bold ml-5">Sign in</button>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>
        {/* navbar end  */}
        <div class="container-fluid banner containerPadding">
            <div class="row">
                <div class="col-md-6 d-flex flex-column align-items-start justify-content-center">                    
                    <h2 class="bannerTitle font-weight-bold">
                        Develop analytical thinking in your child by Coding
                    </h2>
                    <p class="bannerSubTitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
                    <Button variant="success" className='free-demo-btn'>Book Your Free Demo Class</Button>
                </div>
                <div class="col-md-6 p-4 d-flex align-items-center justify-content-start">
                    <img class="bannerImage w-100" src={image} alt="bannerImage"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
