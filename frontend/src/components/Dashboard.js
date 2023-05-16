import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

const Dashboard = () => {
  const [trades, setTrades] = useState([]);
  const [showNewTradeForm, setShowNewTradeForm] = useState(false);
  const [newTrade, setNewTrade] = useState({
    symbol: '',
    stopLoss: '',
    profitPercent: '',
    amount: '',
  });

  useEffect(() => {
    // Fetch trade data from the API
    const fetchTrades = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/recent_trades?userId=5`);
        const data = await response.json();
        // console.log('Fetched data:', data['data']);
        setTrades(data['data']);
      } catch (error) {
        console.error('Error fetching trade data:', error);
      }
    };    

    fetchTrades();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrade((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTrade = async (e) => {
    e.preventDefault();
    
    // Prepare the request body
    const requestBody = {
      symbol: newTrade.symbol,
      amount: parseFloat(newTrade.amount),
      position: parseFloat(newTrade.profitPercent),
      userId: 5,
      time: new Date().toISOString(), // Use the current date and time
    };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/add_trade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        // Trade added successfully, update the trades state with the new trade
        const newTradeData = { ...requestBody, status: 'Pending' };
        setTrades([...trades, newTradeData]);
        setShowNewTradeForm(false);
        setNewTrade({ symbol: '', stopLoss: '', profitPercent: '', amount: '' });
      } else {
        console.error('Error adding trade:', response.status, response.statusText);
        // Handle the error case, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error adding trade:', error);
      // Handle the error case, e.g., show an error message to the user
    }
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          &ensp; OneTradeAI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/profile">
                  My Profile
                </a>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    <Container>
      <Row>
        <Col>
          <h2>Recent trades</h2>
          <Table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Trade Amount (in INR)</th>
                <th>Profit/Loss (%)</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index}>
                  <td>{trade.symbol}</td>
                  <td>{trade.amount}</td>
                  <td>{trade.position}</td>
                  <td>{trade.status ? "Closed": "Active"}</td>
                  <td>{trade.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowNewTradeForm(true)}>+ New</Button>
          </div>
          {showNewTradeForm && (
            <div>
              <h2>Add new trade</h2>
              <form onSubmit={handleAddTrade}>
                <div className="form-group">
                  <label htmlFor="symbol">Symbol</label>
                  <input
                    type="text"
                    className="form-control"
                    id="symbol"
                    name="symbol"
                    value={newTrade.symbol}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stopLoss">Stop Loss (in %)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stopLoss"
                    name="stopLoss"
                    value={newTrade.stopLoss}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profitPercent">Profit (in %)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="profitPercent"
                    name="profitPercent"
                    value={newTrade.profitPercent}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount (in INR)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={newTrade.amount}
                    onChange={handleInputChange}
                  />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">
                  Add Trade
                </button>
              </form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Dashboard;
