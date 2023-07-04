import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Chatbot 
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      />        
      </header>
    </div>
  );
}
export default App;
