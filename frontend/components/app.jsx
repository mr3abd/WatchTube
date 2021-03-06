import React from 'react';
import { Link } from 'react-router';

import Footer from './footer/footer';
import LeftNav from './header/left_nav';
import SearchBarContainer from './search/search_bar_container';
import RightNavContainer from './header/right_nav_container';
import VideoIndex from './videos/video_index/video_index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app-page">
        <header className="app-header">
          <LeftNav/>
          <SearchBarContainer/>
          <RightNavContainer/>
        </header>

        <div className="app-body">
          { children }
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
