import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Rnd} from 'react-rnd';

export default class DragResize extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOnDragStop = this.handleOnDragStop.bind(this);
        this.handleOnResizeStop = this.handleOnResizeStop.bind(this);
    }
    
    handleOnDragStop(e, d) { 
        this.props.setProps({ 
            x: d.x, 
            y: d.y, 
        }) 
    }
    
    handleOnResizeStop(e, direction, ref, delta, position) {
        this.props.setProps({
            w: ref.style.width,
            h: ref.style.height,
        })
    }
    
    render() {
        return (
            // <div id={this.props.id}>
                <Rnd
                    default={{
                        x: this.props.x, 
                        y: this.props.y, 
                        width: this.props.w, 
                        height: this.props.h,
                    }}
                    onDragStop = {this.handleOnDragStop}
                    onResizeStop = {this.handleOnResizeStop}
                    disableDragging = {this.props.disableDragging}
                    dragGrid = {this.props.dragGrid}
                    enableResizing={this.props.enableResizing}
                    resizeGrid = {this.props.resizeGrid}
                    bounds={this.props.bounds}
                    // style={this.props.style}
                    className={this.props.className}
                    >
                    <div style={{height: "100%"}}>
                        {this.props.children}
                    </div>
                </Rnd>
            // </div>
        );
    }
}

DragResize.defaultProps = {};

DragResize.propTypes = {
    id: PropTypes.string,
    children: PropTypes.object,
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.string,
    h: PropTypes.string,
    disableDragging: PropTypes.bool,
    dragGrid: PropTypes.array, // [1,1]
    enableResizing: PropTypes.bool,
    resizeGrid: PropTypes.array, // [1,1]
    bounds: PropTypes.string, // parent, window
    className: PropTypes.string, // square border border-0
    // style: PropTypes.object,
};
