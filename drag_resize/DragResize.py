# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DragResize(Component):
    """A DragResize component.


Keyword arguments:

- id (string; optional)

- dragGrid (dict; optional)

- position (dict; optional)

- resizeGrid (dict; optional)

- size (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, setState=Component.UNDEFINED, onDragStop=Component.UNDEFINED, onResizeStop=Component.UNDEFINED, size=Component.UNDEFINED, position=Component.UNDEFINED, dragGrid=Component.UNDEFINED, resizeGrid=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'dragGrid', 'position', 'resizeGrid', 'size']
        self._type = 'DragResize'
        self._namespace = 'drag_resize'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'dragGrid', 'position', 'resizeGrid', 'size']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DragResize, self).__init__(**args)
