import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import panel from "../../assets/images/page.svg";
import pdf from "../../assets/images/pdf-icon.svg";
import text from "../../assets/images/txt-icon.svg";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
        document.title = "Home :: EBuild Pakistan";
      
  }
  render() {
    return (
      <div class="wrapper">
        <div class="generic-body">
          <div>
            <header>
              <div class="container header  main-container nopadding">
                <nav class="navbar navbar-expand-md navbar-light nopadding">
                  <a class="navbar-brand" href="/">
                    <img type="image" src={logo} alt="logo" height="" width=""></img>
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="nav navbar-nav nav-center">
                      <li class="nav-item">
                        <a href="/dashboard/" class="nav-link">
                          Product Details
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/login/" class="nav-link">
                          Login
                        </a>
                      </li>
                    </ul>
                    <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                      <li class="dropdown order-1">
                        <button type="button" class="download-btn btn">
                          Download SENSAI
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
            <section class="main-container container">
              <div class="row">
                <div class="col-lg-10 col-md-10 ">
                  <h2 class="title">Make research easier</h2>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                  <div class="button-box">
                    <button class="generic-btn white-btn">Buy now</button>
                    <button class="generic-btn">learn more</button>
                  </div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-3 icon-panel">
                  <div>
                    <img src={pdf} />
                  </div>
                  <div>
                    <img src={panel} />
                  </div>
                  <div>
                    <img src={text} />
                  </div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-3 circle-panel">
                  <div class="circle">
                    <span>
                      <span></span>
                    </span>
                  </div>
                  <div class="circle">
                    <span>
                      <span></span>
                    </span>
                  </div>
                  <div class="circle noafter">
                    <span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <h2 class="middle-title">Four ways to help you research easier</h2>
              <section class="row middle-banner">
                <div class="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/page.svg" />
                </div>
                <div class="col-sm-12 col-md-10 col-lg-8">
                  <div class="row">
                    <div class="col-lg-1 col-md-1  col-sm-1 number-list">01</div>
                    <div class="col-lg-11 col-md-11 col-sm-12">
                      <p class="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p class="light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="row middle-banner banner-details">
                <div class="col-lg-1"></div>
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <div class="row banner-details">
                    <div class="text-right  col-sm-12 col-md-11 col-lg-11  pr40">
                      <p class="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p class="light-txt details-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                    <div class="col-lg-1 col-md-1  col-sm-1  number-list number2">02</div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-2 col-lg-1 nopadding ml5">
                  <img src="/static/images/bookmark.svg" />
                </div>
              </section>
              <section class="row middle-banner">
                <div class="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/loop.svg" />
                </div>
                <div class="col-sm-12 col-md-10 col-lg-8">
                  <div class="row">
                    <div class="col-lg-1 col-md-1  col-sm-1 number-list">03</div>
                    <div class="col-lg-11 col-md-11 col-sm-12">
                      <p class="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p class="light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="row middle-banner ok ">
                <div class="col-lg-1"></div>
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <div class="row ok">
                    <div class="text-right  col-sm-12 col-md-11 col-lg-11 pr40">
                      <p class="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p class="details-txt light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                    <div class="col-lg-1 col-md-1  col-sm-1  number-list number2">04</div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/page.svg" />
                </div>
              </section>
              <section class="slider-section">
                <div class="row">
                  <div class="col-lg-7">
                    <div id="demo" class="carousel slide" data-ride="carousel">
                      <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                      </ul>
                      <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                      </a>
                      <div class="carousel-inner">
                        <div class="carousel-item row active">
                          <div class="row">
                            <div class="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item row">
                          <div class="row">
                            <div class="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item row">
                          <div class="row">
                            <div class="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                      </a>
                      <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-4 right-banner">
                    <div>
                      <button>Download SENSAI</button>
                    </div>
                    <div class="empty-space"></div>
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate auctor
                      rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      vulputate auctor rutrum.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div class="white-banner"></div>
                <div class="company-description">
                  <h2 class="text-center">Some Motivation Text to join company</h2>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
