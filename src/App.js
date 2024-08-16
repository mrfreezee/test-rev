import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header-container'>
          <div className='navbar'>
            <a href="#">LOST  DOGS</a>
            <span className='spanX'>x</span>
            <a href="#">NOTCOIN</a>
            <span className='span'>|</span>
            <a href="#">ABOUT US</a>
          </div>
          <button id="not-ton-connect" onlick="openButton()" className='btn-header'>
            Connect wallet
          </button>
        </div>
      </header>
      <div className='section1'>
        <img className='bg-img' src='bg1.png' />
        <div className="main-content">
          <h1 className="title">THE BIGGEST COLOBRATION IN THE WORLD!</h1>
          <h2 className="subtitle">AND BIIGEST AIRDROP</h2>
          <p className="earn-text">EARN 20.000 $NOT AND RANDOM $WOOF</p>
          <div className='btn-wrap'>
            <img className='btn' src='btn.svg' />
            <p style={{ zIndex: '5' }}>EARN</p>
            <button className='inv-btn' id="not-ton-connect" onlick="openButton()">

            </button>
          </div>

        </div>
        <footer className="footer">
          <span className="powered">POWERED ON <span className="ton">TON</span></span>
          <span className="limited-pool">LIMITED POOL*</span>
        </footer>
      </div>
      <div className='line'>

      </div>
      <div className='section2'>
        <img className='bg-img' src='bg2.png' />
        <h1 className="title">How to earn airdrop?</h1>
        <div
          className="container">
          <div
            className="card">
            <h1><img className='icon' src='ic1.png'/>CONNECT</h1>
            <p>Connect your crypto wallet to get the reward, the coins will be instantly delivered to your wallet.</p>
          </div>
          <div
            className="card">
            <h1><img className='icon' src='ic2.png'/>EARN</h1>
            <p>Confirm the transaction in your wallet so we realize you are not a robot and send your reward from airdrop.</p>
          </div>
          <div
            className="card">
            <h1><img className='icon' src='ic3.png'/>SHARE</h1>
            <p>This airdrop will not be relevant for a long time. So, hurry up and take part in airdrop. We wish you good luck!</p>
          </div>
        </div>
        <footer className="footer foot2">
            <span className="lost">LOST DOGS <span className="all">All Rights Reserved</span></span>
            <span className="terms">Terms of use</span>
          </footer>
      </div>
    </div>
  );
}

export default App;
