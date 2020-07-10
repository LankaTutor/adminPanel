import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";

function HomePage() {
  return (
    <div>
      <header className="masthead">
        <div className="container" style={{ height: "600px" }}>
          <img
            src="https://i.ya-webdesign.com/images/libro-vector-book-5.png"
            alt="logo"
            style={{ height: "300px", width: "300px" }}
          />
          <div style={{ marginTop: "3%" }}>
            <div
              className="intro-lead-in"
              style={{
                fontSize: "50px",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Welcome To TutorLanka Learning Platform!
            </div>
            <div
              className="intro-heading text-uppercase"
              style={{ fontSize: "25px", fontWeight: "700", color: "yellow" }}
            >
              It's Nice To Meet You 🙂
            </div>
            <a
              className="btn btn-light btn-xl text-uppercase js-scroll-trigger"
              href="#about"
              style={{ marginTop: "3%" }}
            >
              Tell Me More
            </a>
          </div>
        </div>
      </header>

      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Services</h2>
              <h3 className="section-subheading text-muted">
                Now TutorLanka is Visible with.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fa fa-circle fa-stack-2x"
                  style={{ color: "#25315e" }}
                ></i>
                <i className="fa fa-pencil fa-fw fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Question Forum</h4>
              <p className="text-muted">
                Here you can ask your doubts as questions in the forum.
                Registered mentors will answer your question as soon as
                possible.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fa fa-circle fa-stack-2x"
                  style={{ color: "#25315e" }}
                ></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Learning Platform</h4>
              <p className="text-muted">
                Here video lectures will be uploaded on particular units of
                subjects in module wise. Students can enroll their subjects
                according to their payment methods.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fa fa-circle fa-stack-2x"
                  style={{ color: "#25315e" }}
                ></i>
                <i className="fa fa-book fa-fw fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Paper & Article resources</h4>
              <p className="text-muted">
                Here students can view past papers with answers, other model
                papers, short notes on particular units and articles on
                particular topics, related to their subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="subjects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Subjects in TutorLanka</h2>
              <h3 className="section-subheading text-muted">
                (Only for Advanced Level Students)
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="https://tuitionphysics.com/wp-content/uploads/2016/09/What-you-need-to-know-before-you-opt-for-physics-tuition-for-your-child.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Biology & Physical stream</h4>
                      <h4 className="subheading">Physics</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Number of Lectures: xx
                        <br />
                        Number of Mentors: xx
                        <br />
                        Number of Subjects: xx
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000x2000fit/4/1/6/17416_3organicchemistrybackground_619603.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Biology & Physical stream</h4>
                      <h4 className="subheading">Chemistry</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Number of Lectures: xx
                        <br />
                        Number of Mentors: xx
                        <br />
                        Number of Subjects: xx
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="https://image.freepik.com/free-vector/biology-elements-chalkboard_23-2147506442.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Biology stream</h4>
                      <h4 className="subheading">Biology</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Number of Lectures: xx
                        <br />
                        Number of Mentors: xx
                        <br />
                        Number of Subjects: xx
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="https://st2.depositphotos.com/2824873/7465/v/950/depositphotos_74656399-stock-illustration-algebra-formula-board.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Physical stream</h4>
                      <h4 className="subheading">Combined Mathematics</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Number of Lectures: xx
                        <br />
                        Number of Mentors: xx
                        <br />
                        Number of Subjects: xx
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="https://previews.123rf.com/images/hugolacasse/hugolacasse1501/hugolacasse150100011/35244504-hand-drawn-business-icons-on-chalkboard-vector.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Physical stream</h4>
                      <h4 className="subheading">Information Technology</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Number of Lectures: xx
                        <br />
                        Number of Mentors: xx
                        <br />
                        Number of Subjects: xx
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div
                    className="timeline-image"
                    style={{ backgroundColor: "#25315e" }}
                  >
                    <h4 style={{ color: "white" }}>
                      Travel with
                      <br />
                      us for your
                      <br />
                      Benefits
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" style={{ color: "#2d6686" }}>
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
            </div>
          </div>
          <div className="row" style={{ color: "#25315e" }}>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"
                  alt=""
                />
                <h4>Sivarasa Sivapriyan</h4>
                <p className="text-muted" style={{ color: "#799ed2" }}>
                  example@gmail.com
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
                  alt=""
                />
                <h4>Anojija Vijayakumar</h4>
                <p className="text-muted" style={{ color: "#799ed2" }}>
                  example@gmail.com
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"
                  alt=""
                />
                <h4>Thurairajah Yathurshan</h4>
                <p className="text-muted" style={{ color: "#799ed2" }}>
                  example@gmail.com
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ color: "#25315e" }}>
            <div className="col-sm-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"
                  alt=""
                />
                <h4>Thavaranjan Mayurathan</h4>
                <p className="text-muted" style={{ color: "#799ed2" }}>
                  example@gmail.com
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"
                  alt=""
                />
                <h4>Vasudevan Dilushkumar</h4>
                <p className="text-muted" style={{ color: "#799ed2" }}>
                  example@gmail.com
                </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Just tap a message, we will reply you as soon as possible.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-light btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
