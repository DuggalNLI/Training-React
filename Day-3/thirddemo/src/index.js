import React from 'react';
import ReactDOM from 'react-dom/client';
// import List from './Components/List';
// import Page from './Components/Page';
// import SellList from './Components/SpellList';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginControl from './Components/LoginControl';
// import Mailbox from './Components/Mailbox';
import Usest from './Components/usest';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Usest />);

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<List />);


// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<SellList />);

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Page />);

// const messages = ['Khan', 'Re: Khan ', 'Re:Re: Khan ', 'Re:Re:Re: Khan', 'Nineleaps ', 'Nineleaps'];
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Mailbox unreadMessages={messages} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LoginControl/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
