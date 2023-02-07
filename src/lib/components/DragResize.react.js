import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rnd from 'react-rnd';

export default class DragResize extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDragStop = this.onDragStop.bind(this);
        this.onResizeStop = this.onResizeStop.bind(this);
    }

    onDragStop(e, d) { 
        this.props.setProps({ 
            x: d.x, 
            y: d.y, 
        }) 
    }
    
    onResizeStop(e, direction, ref, delta, position) {
        this.props.setProps({
            width: ref.style.width,
            height: ref.style.height,
        })
    }
    
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            // <div id={this.props.id}>
                <Rnd
                    // size={{ width: this.props.width,  height: this.props.height }}
                    // position={{ x: this.props.x, y: this.props.y }}
                    // onDragStop={(e, d) => { this.props.setProps({ x: d.x, y: d.y }) }}
                    // onResizeStop={(e, direction, ref, delta, position) => {
                    //     this.props.setProps({
                    //         width: ref.style.width,
                    //         height: ref.style.height,
                    //     });
                    // }}
                    default={{
                        x: 0,
                        y: 0,
                        width: 320,
                        height: 200,
                      }}
                    >
                    {/* <div>
                        {this.props.children}
                    </div> */}
                    Test Message
                </Rnd>
            // </div>
        );
    }
}

DragResize.defaultProps = {};

DragResize.propTypes = {
    // id: PropTypes.string,
    // label: PropTypes.string.isRequired,
    // value: PropTypes.string,
    // setProps: PropTypes.func
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    setProps: PropTypes.func,
    onDragStop: PropTypes.func,
    onResizeStop: PropTypes.func,
    size: PropTypes.object,
    position: PropTypes.object,
    dragGrid: PropTypes.object,
    resizeGrid: PropTypes.object,
};
