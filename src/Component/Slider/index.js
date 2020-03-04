import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
 
class Slideshow extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
    }
  }

  setSlideMake = () =>{
    const {slideImages} =this.props;
    
    return slideImages.map(item =>{
      // TODO hegiht값 조정 필요
      return (
        <div key={`keys${item}`} className="each-slide">
          <div style={{'backgroundImage': `url(${process.env.PUBLIC_URL}/image/${item}.png)`,height:"500px"}} />
        </div>
      )
    })
  }

  render(){
    const {setSlideMake} = this
    const {duration ,transitionDuration , infinite , indicators , arrows} = this.state
    return (
      <div className="slide-container" >
        <Slide duration={duration} transitionDuration={transitionDuration} infinite={infinite} indicators={indicators} arrows={arrows}>
          {setSlideMake()}
        </Slide>
      </div>
    )
    }  

}

Slideshow.propTypes = {
  resize: PropTypes.number,
  slideImages: PropTypes.array,
};

Slideshow.defaultProps = {
  resize: 1004,
  slideImages: [],
};


export default Slideshow;