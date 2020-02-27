  /* eslint-disable */
  const Images = React.createClass({
  render: function() {
    let self = this;
    let divStyle = {
      left: this.props.active * (-100) + '%',
      width: 4 * (100) + '%'
    };
    let width = {
      width: (100/this.props.items.length) + '%'
    }
    return (
      <div className = "slider-wrapper">
        <ul className = "slides" style={divStyle}>
        { 
          this.props.items.map(function(m, index){
          if(self.props.useImages === 'true') {
                return <li style = {width} ><img src = {"images/"+m}/></li>
          } else {
             return <li style = {width} >{index}</li>
          }
          
          })
        }  
        </ul>
      </div>
    )
  }
});

const Pagers = React.createClass({
  updateSlide: function(i) {
    this.props.callbackParent(i); // hey parent, I've changed!
  },
  render: function() {
    let self = this;
    return (
      
      <div>
        <ul className = "pagers">
        { 
          this.props.items.map(function(m, index){
               return <li onClick = {this.updateSlide.bind(this, index)}></li> 
           }, this)}
        </ul>
      </div>
    )
  }
});

const Slider = React.createClass({
  getInitialState: function(){
    return { active: 0 };
  },
  onPagerClicked: function(newState) {
    this.setState({ active: newState });
  },
  render: function() {
    var self = this;
		return (
			<div className = "imgSlider">
        <Images items = {this.props.slides} useImages = {this.props.useImages} active = {this.state.active}></Images>
        <Pagers items = {this.props.slides}   callbackParent={this.onPagerClicked}></Pagers>
			</div>
		);
	}
})



React.render( <Slider useImages = 'false' slides={['image-1', 'image-2', 'image-3', 'image4']}/>, document.getElementById('react-container'));