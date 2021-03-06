import React from 'react';
import Carousel from 'nuka-carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videos, numToSlide } = this.props;

    return (
      <Carousel
        className="video-carousel"
        slidesToShow={numToSlide}
        slidesToScroll={numToSlide}
        height={"250px"}
        widht={"1265px"}
        dragging={false}
        decorators={[{
          component: React.createClass({
            render() {
              return (
                <button
                  className="left-button"
                  onClick={this.props.previousSlide}>
                  {"<"}
                </button>
              );
            }
          }),
          position: 'CenterLeft'
        },{
          component: React.createClass({
            render() {
              return (
                <button
                  className="right-button"
                  onClick={this.props.nextSlide}>
                  {">"}
                </button>
              );
            },
          }),
          position: 'CenterRight'
        }]}>

        { videos }

      </Carousel>
    );
  }
}

export default App;
