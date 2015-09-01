var React = require("react/addons");

var DimensionDisplay = React.createClass({
  render: function() {
    return ( 
    	<div className="dimension-display">
    		<div className="dimension-display-height">{this.props.height}</div>
    		<div className="dimension-display-width">{this.props.width}</div>
    	</div>
    );
  }
});

module.exports = DimensionDisplay;