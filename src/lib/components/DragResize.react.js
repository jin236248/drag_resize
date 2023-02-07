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
        // const {id, label, setProps, value} = this.props;

        return (
            <div id={this.props.id}>
            <Rnd
                default={{
                    x: 0, 
                    y: 0, 
                    width: this.props.w, 
                    height: this.props.h,
                }}
                onDragStop = {this.handleOnDragStop}
                onResizeStop = {this.handleOnResizeStop}
                >
                <div 
                    className="box" 
                    style={{height: '100%' }}
                    >
                        <div style={{height: '100%', border: '1px solid rgba(0, 0, 0, 0.05)'}}>
                            {this.props.children}
                        </div>
                    
                </div>
            </Rnd>
            </div>
        );
    }
}

DragResize.defaultProps = {};

DragResize.propTypes = {
    id: PropTypes.string,
    children: PropTypes.object,
    // label: PropTypes.string.isRequired,
    // value: PropTypes.string,
    // setProps: PropTypes.func
    // id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.string,
    h: PropTypes.string,
    // setProps: PropTypes.func,
    // onDragStop: PropTypes.func,
    // onResizeStop: PropTypes.func,
    // size: PropTypes.object,
    // position: PropTypes.object,
    // dragGrid: PropTypes.object,
    // resizeGrid: PropTypes.object,
};
