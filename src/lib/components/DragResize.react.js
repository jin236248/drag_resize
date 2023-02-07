import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rnd from 'react-rnd';

export default class DragResize extends Component {
    constructor(state) {
        super(state);
        this.onDragStop = this.onDragStop.bind(this);
        this.onResizeStop = this.onResizeStop.bind(this);
    }

    onDragStop(e, d) { 
        this.setState({ 
            x: d.x, 
            y: d.y, 
        }) 
    }
    
    onResizeStop(e, direction, ref, delta, position) {
        this.setState({
            width: ref.style.width,
            height: ref.style.height,
        })
    }
    
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={this.state.id}>
                <Rnd
                    size={{ width: this.state.width,  height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        this.setState({
                            width: ref.offsetWidth,
                            height: ref.offsetHeight,
                        });
                    }}
                    >
                    <div>
                        {this.state.children}
                    </div>
                </Rnd>
            </div>
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
    setState: PropTypes.func,
    onDragStop: PropTypes.func,
    onResizeStop: PropTypes.func,
    size: PropTypes.object,
    position: PropTypes.object,
    dragGrid: PropTypes.object,
    resizeGrid: PropTypes.object,
};
