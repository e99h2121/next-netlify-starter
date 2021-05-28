import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class app extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
        <SimpleBar style={{ height: '300px', color: "red" }}>
          {[...Array(50)].map((x, i) =>
            <p key={i} className="odd">Some content</p>
          )}
        </SimpleBar>
      </div>
    );
  }
}

export default app;
