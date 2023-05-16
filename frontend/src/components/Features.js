import React from 'react';
import './style.css';

function Home() {
  return (
    <div>
     {/* <!-- Navigation Bar --> */}
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">OneTradeAI</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
            <li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item  active">
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
			<h1 class="display-4">Features</h1>
			<p class="lead">Explore the advanced features of our algorithmic trading bot.</p>
		</div>
	</div>

	{/* <!-- Features Section --> */}
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<h2>Real-time Analysis</h2>
				<p>Our bot uses advanced algorithms to analyze market data in real-time, giving you a competitive edge in the market.</p>
			</div>
			<div class="col-lg-4">
				<h2>Automated Trading</h2>
				<p>Set your trading strategies and let our bot execute trades for you. Save time and increase your profits.</p>
			</div>
			<div class="col-lg-4">
				<h2>Customizable Strategies</h2>
				<p>Create your own trading strategies or use our pre-built ones. Our bot adapts to your trading style.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4">
				<h2>Backtesting</h2>
				<p>Test your trading strategies against historical market data to optimize your trading performance.</p>
			</div>
			<div class="col-lg-4">
				<h2>Portfolio Management</h2>
				<p>Manage multiple trading accounts and portfolios with ease using our bot's intuitive interface.</p>
			</div>
			<div class="col-lg-4">
				<h2>24/7 Support</h2>
				<p>Our dedicated support team is available 24/7 to assist you with any issues or questions you may have.</p>
			</div>
		</div>
	</div>

	{/* <!-- Footer --> */}
	<footer class="page-footer font-small bg-dark text-light">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p>© 2023 Algorithmic Trading Bot. All rights reserved.</p>
				</div>
			</div>
		</div>
	</footer>
    </div>
  );
}

export default Home;
