# AUTO GENERATED FILE - DO NOT EDIT

''DragResize <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragResize',
        namespace = 'drag_resize',
        propNames = c('children', 'id'),
        package = 'dragResize'
        )

    structure(component, class = c('dash_component', 'list'))
}
