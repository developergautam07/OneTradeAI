import React from 'react';
import './style.css';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["OneTradeAI", "Algorithmic Trading Bot!"],
      // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* <!-- Navigation Bar --> */}
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#"> &ensp; OneTradeAI</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
            <li class="nav-item  active">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/features">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/pricing">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	</nav>

	{/* <!-- Jumbotron --> */}
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
        <h1><span ref={el}></span></h1>
			<p class="lead">Maximize your profits with our advanced trading algorithms</p>
			<a class="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
		</div>
	</div>

	{/* <!-- Features Section --> */}
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
                <img src='/real_time.jpg' alt="My Image" style={{ width: "100%", height: "100%" }} />
			</div>
			<div class="col-lg-6">
                <h2>Real-time Analysis</h2>
				<p>Our bot uses advanced algorithms to analyze market data in real-time, giving you a competitive edge in the market.</p>
				<p>Our bot uses advanced algorithms to analyze market data in real-time, giving you a competitive edge in the market.</p>
				<p>Our bot uses advanced algorithms to analyze market data in real-time, giving you a competitive edge in the market.</p>
				<p>Our bot uses advanced algorithms to analyze market data in real-time, giving you a competitive edge in the market.</p>
			</div>
			
		</div>
        <br/>
        <br/>
        <br/>
        <div class="row">
			<div class="col-lg-6">
				<h2>Automated Trading</h2>
				<p>Set your trading strategies and let our bot execute trades for you. Save time and increase your profits.</p>
				<p>Set your trading strategies and let our bot execute trades for you. Save time and increase your profits.</p>
				<p>Set your trading strategies and let our bot execute trades for you. Save time and increase your profits.</p>
				<p>Set your trading strategies and let our bot execute trades for you. Save time and increase your profits.</p>
			</div>
			<div class="col-lg-6">
                <img src='/automated_trading.jpg' alt="My Image" style={{ width: "100%", height: "100%" }} />
			</div>
		</div>
        <br/>
        <br/>
        <br/>
        <div class="row">
			<div class="col-lg-6">
                <img src='/customizable_strategy.jpg' alt="My Image" style={{ width: "100%", height: "100%" }} />
			</div>
			<div class="col-lg-6">
                <h2>Customizable Strategies</h2>
				<p>Create your own trading strategies or use our pre-built ones. Our bot adapts to your trading style.</p>
				<p>Create your own trading strategies or use our pre-built ones. Our bot adapts to your trading style.</p>
				<p>Create your own trading strategies or use our pre-built ones. Our bot adapts to your trading style.</p>
				<p>Create your own trading strategies or use our pre-built ones. Our bot adapts to your trading style.</p>
			</div>
			
		</div>
	</div>

	{/* <!-- Call to Action Section --> */}
	<div class="container-fluid bg-dark">
		<div class="row">
			<div class="col-lg-12">
				<h2 class="text-center text-white mt-5">Ready to start trading?</h2>
				<p class="text-center text-white">Sign up today and start maximizing your profits with our algorithmic trading bot.</p>
				<p class="text-center">
					<a class ="btn btn-primary btn-lg" href="/signup" role="button">Sign Up Now</a>
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<h2 class="text-center text-white mt-5">Existing User?</h2>
				<p class="text-center text-white">Login now and continue maximizing your profits with our algorithmic trading bot.</p>
				<p class="text-center">
					<a class ="btn btn-primary btn-lg" href="/login" role="button">Login Now</a>
				</p>
			</div>
		</div>
	</div>

	{/* <!-- Footer --> */}
	<footer class="container-fluid bg-light mt-5">
		<div class="row">
			<div class="col-lg-12 text-center">
				<p style={{color: 'dark grey'}}> Copyright © 2023 &ensp;
				<a href="#">Algorithmic Trading Bot</a> - All Rights Reserved</p>
			</div>
		</div>
	</footer>
    </div>
  );
}

export default Home;
