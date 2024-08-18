import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Login-CC1</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" />
          </label><br/>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

export default App;
