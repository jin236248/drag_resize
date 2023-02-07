# AUTO GENERATED FILE - DO NOT EDIT

''DragResize <- function(id=NULL, dragGrid=NULL, onDragStop=NULL, onResizeStop=NULL, position=NULL, resizeGrid=NULL, setState=NULL, size=NULL) {
    
    props <- list(id=id, dragGrid=dragGrid, onDragStop=onDragStop, onResizeStop=onResizeStop, position=position, resizeGrid=resizeGrid, setState=setState, size=size)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragResize',
        namespace = 'drag_resize',
        propNames = c('id', 'dragGrid', 'onDragStop', 'onResizeStop', 'position', 'resizeGrid', 'setState', 'size'),
        package = 'dragResize'
        )

    structure(component, class = c('dash_component', 'list'))
}
