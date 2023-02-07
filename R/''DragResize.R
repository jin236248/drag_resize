# AUTO GENERATED FILE - DO NOT EDIT

''DragResize <- function(children=NULL, id=NULL, h=NULL, w=NULL, x=NULL, y=NULL) {
    
    props <- list(children=children, id=id, h=h, w=w, x=x, y=y)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragResize',
        namespace = 'drag_resize',
        propNames = c('children', 'id', 'h', 'w', 'x', 'y'),
        package = 'dragResize'
        )

    structure(component, class = c('dash_component', 'list'))
}
