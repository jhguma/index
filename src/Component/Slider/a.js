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
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
  }

  setSlideMake = () =>{
    const {slideImages} =this.props;
    
    return slideImages.map(item =>{
      // TODO hegiht값 조정 필요
      return (
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${process.env.PUBLIC_URL}/image/${item}.png)`,height:"500px"}} />
        </div>
      )
    })
  }

  render(){
    const {setSlideMake} = this
    const states = this.state
    return (
      <div className="slide-container" >
        <Slide {...states}>
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