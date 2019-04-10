import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

class Home extends React.Component<{},{}> {
  render() {
    return(
      <p>Probando SSR</p>
    );
  }
}

ReactDOMServer.renderToString(<Home/>);