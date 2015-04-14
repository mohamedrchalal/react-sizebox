var React = require("react/addons");
var DimensionDisplay = require('./dimension-display.jsx');
var TestUtils = React.addons.TestUtils;
var ReactSizebox = require('../lib/react-sizebox.jsx');


describe("ReactSizebox", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <ReactSizebox className="react-sizebox-test" style={{width: 600, height: 400}} widthProp="width" heightProp="height">
      	<DimensionDisplay />
      </ReactSizebox>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('react-sizebox-test');
  });

  it("should render child component", function(){
  	var dd = TestUtils.findRenderedComponentWithType(component, DimensionDisplay);
  	expect(dd).not.toEqual(undefined);
  });

  it("should render child component with have matching width", function(){
    var dd = TestUtils.findRenderedComponentWithType(component, DimensionDisplay);
    expect(dd.props.width).toEqual(600);
  });

  it("should render child component with have matching height", function(){
    var dd = TestUtils.findRenderedComponentWithType(component, DimensionDisplay);
    expect(dd.props.height).toEqual(400);
  });

  /* TODO: test on window resize */

});