import React from 'react';
import './style.css';

function Contact() {
  return (
    <div>
      {/* <!-- Navigation Bar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">OneTradeAI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">Pricing</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Contact Form --> */}
      <div className="container mt-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer class="py-5 bg-dark">
		<div class="container">
			<p class="m-0 text-center text-white">&copy; 2023 Algorithmic Trading Bot</p>
		</div>
		{/* <!-- /.container --> */}
	</footer>
    </div>
  );
}

export default Contact;
