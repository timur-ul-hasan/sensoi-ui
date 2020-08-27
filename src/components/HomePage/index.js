import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import panel from "../../assets/images/page.svg";
import pdf from "../../assets/images/pdf-icon.svg";
import text from "../../assets/images/txt-icon.svg";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <div className="generic-body">
          <div>
            <header>
              <div className="container header  main-container nopadding">
                <nav className="navbar navbar-expand-md navbar-light nopadding">
                  <a className="navbar-brand" href="/">
                    <img type="image" src={logo} alt="logo" height="" width=""></img>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav nav-center">
                      <li className="nav-item">
                        <a href="/dashboard/" className="nav-link">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/login/" className="nav-link">
                          Login
                        </a>
                      </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                      <li className="dropdown order-1">
                        <button type="button" className="download-btn btn">
                          Download SENSAI
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
            <section className="main-container container">
              <div className="row">
                <div className="col-lg-10 col-md-10 ">
                  <h2 className="title">Make research easier</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                  <div className="button-box">
                    <button className="generic-btn white-btn">Buy now</button>
                    <button className="generic-btn">learn more</button>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-3 icon-panel">
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
                <div className="col-lg-1 col-md-1 col-sm-3 circle-panel">
                  <div className="circle">
                    <span>
                      <span></span>
                    </span>
                  </div>
                  <div className="circle">
                    <span>
                      <span></span>
                    </span>
                  </div>
                  <div className="circle noafter">
                    <span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="middle-title">Four ways to help you research easier</h2>
              <section className="row middle-banner">
                <div className="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/page.svg" />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8">
                  <div className="row">
                    <div className="col-lg-1 col-md-1  col-sm-1 number-list">01</div>
                    <div className="col-lg-11 col-md-11 col-sm-12">
                      <p className="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p className="light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="row middle-banner banner-details">
                <div className="col-lg-1"></div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row banner-details">
                    <div className="text-right  col-sm-12 col-md-11 col-lg-11  pr40">
                      <p className="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p className="light-txt details-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                    <div className="col-lg-1 col-md-1  col-sm-1  number-list number2">02</div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-1 nopadding ml5">
                  <img src="/static/images/bookmark.svg" />
                </div>
              </section>
              <section className="row middle-banner">
                <div className="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/loop.svg" />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8">
                  <div className="row">
                    <div className="col-lg-1 col-md-1  col-sm-1 number-list">03</div>
                    <div className="col-lg-11 col-md-11 col-sm-12">
                      <p className="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p className="light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="row middle-banner ok ">
                <div className="col-lg-1"></div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row ok">
                    <div className="text-right  col-sm-12 col-md-11 col-lg-11 pr40">
                      <p className="research-description">
                        Are your PDFs littered across your desk or PC?
                      </p>
                      <p className="details-txt light-txt">
                        Sensai keeps all your PDFs secure and makes them instantly accessible and
                        searchable across all your devices. Automatic identification, tagging and
                        categorization of your PDFs means you never have to go hunting for that
                        missing paper again.
                      </p>
                    </div>
                    <div className="col-lg-1 col-md-1  col-sm-1  number-list number2">04</div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-1 nopadding">
                  <img src="/static/images/page.svg" />
                </div>
              </section>
              <section className="slider-section">
                <div className="row">
                  <div className="col-lg-7">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                      <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                      </ul>
                      <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                      </a>
                      <div className="carousel-inner">
                        <div className="carousel-item row active">
                          <div className="row">
                            <div className="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item row">
                          <div className="row">
                            <div className="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item row">
                          <div className="row">
                            <div className="col-lg-12 slider-box">
                              <img src="/static/images/slider-item.png" alt="slider-item"></img>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                      </a>
                      <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 right-banner">
                    <div>
                      <button>Download SENSAI</button>
                    </div>
                    <div className="empty-space"></div>
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
                <div className="white-banner"></div>
                <div className="company-description">
                  <h2 className="text-center">Some Motivation Text to join company</h2>
                  <p className="text-center">
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
