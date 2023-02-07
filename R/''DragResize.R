# AUTO GENERATED FILE - DO NOT EDIT

''DragResize <- function(id=NULL, dragGrid=NULL, height=NULL, onDragStop=NULL, onResizeStop=NULL, position=NULL, resizeGrid=NULL, size=NULL, width=NULL, x=NULL, y=NULL) {
    
    props <- list(id=id, dragGrid=dragGrid, height=height, onDragStop=onDragStop, onResizeStop=onResizeStop, position=position, resizeGrid=resizeGrid, size=size, width=width, x=x, y=y)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragResize',
        namespace = 'drag_resize',
        propNames = c('id', 'dragGrid', 'height', 'onDragStop', 'onResizeStop', 'position', 'resizeGrid', 'size', 'width', 'x', 'y'),
        package = 'dragResize'
        )

    structure(component, class = c('dash_component', 'list'))
}
