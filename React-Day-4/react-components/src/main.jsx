import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Post />
    <App/>
  </React.StrictMode>
);
