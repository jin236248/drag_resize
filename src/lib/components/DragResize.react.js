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

    handleOnResize(e, direction, ref, delta, position) {
        this.props.setProps({
            w: ref.style.width,
            h: ref.style.height,
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
            <Rnd
                default={{
                    x: this.props.x, 
                    y: this.props.y, 
                    width: this.props.w, 
                    height: this.props.h,
                }}
                onDragStop = {this.handleOnDragStop}
                onResize = {this.handleOnResize}
                onResizeStop = {this.handleOnResizeStop}
                disableDragging = {this.props.disableDragging}
                dragGrid = {this.props.dragGrid}
                enableResizing={this.props.enableResizing}
                resizeGrid = {this.props.resizeGrid}
                bounds={this.props.bounds}
                style={this.props.style}
                className={this.props.className}
                >
                <div>
                    {this.props.children}
                </div>
            </Rnd>
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
    style: PropTypes.object,
};
