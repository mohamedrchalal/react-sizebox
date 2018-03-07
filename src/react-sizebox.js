var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./react-sizebox.scss');

var Sizebox = createReactClass({

  componentDidMount: function() {
    this._updateSize();
    var win = window;
    if (win.addEventListener) {
        win.addEventListener('resize', this._onResize, false);
      } else if (win.attachEvent) {
        win.attachEvent('onresize', this._onResize);
      } else {
        win.onresize = this._onResize;
      }
  },
  componentWillUnmount: function() {
    var win = window;
    if (win.removeEventListener) {
        win.removeEventListener('resize', this._onResize, false);
      } else if (win.detachEvent) {
        win.detachEvent('onresize', this._onResize);
      } else {
        win.onresize = undefined;
      }
  },
  getInitialState: function() {
    return {width: 0, height: 0};
  },
  render: function() {
  	var dimensionProps = {};
  	dimensionProps[this.props.widthProp] = this.state.width;
  	dimensionProps[this.props.heightProp] = this.state.height;

  	var alteredChildren = React.Children.map(this.props.children, function(child){
  	  return React.cloneElement(child, dimensionProps);
   	});

    return (
      <div
        className={this.props.className || 'react-sizebox'}
        style={this.props.style}>
        {alteredChildren}
      </div>
    );
  },
  _onResize: function() {
    clearTimeout(this._updateTimer);
    this._updateTimer = setTimeout(this._updateSize, 16);
  },
  _updateSize: function() {
    var domNode = ReactDOM.findDOMNode(this);
    this.setState({
      width: domNode.clientWidth,
      height: domNode.clientHeight
    });
  }

});

module.exports = Sizebox;
