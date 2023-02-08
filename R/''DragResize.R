# AUTO GENERATED FILE - DO NOT EDIT

''DragResize <- function(children=NULL, id=NULL, bounds=NULL, className=NULL, disableDragging=NULL, dragGrid=NULL, enableResizing=NULL, h=NULL, resizeGrid=NULL, style=NULL, w=NULL, x=NULL, y=NULL) {
    
    props <- list(children=children, id=id, bounds=bounds, className=className, disableDragging=disableDragging, dragGrid=dragGrid, enableResizing=enableResizing, h=h, resizeGrid=resizeGrid, style=style, w=w, x=x, y=y)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragResize',
        namespace = 'drag_resize',
        propNames = c('children', 'id', 'bounds', 'className', 'disableDragging', 'dragGrid', 'enableResizing', 'h', 'resizeGrid', 'style', 'w', 'x', 'y'),
        package = 'dragResize'
        )

    structure(component, class = c('dash_component', 'list'))
}
