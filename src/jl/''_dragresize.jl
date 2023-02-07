# AUTO GENERATED FILE - DO NOT EDIT

export ''_dragresize

"""
    ''_dragresize(;kwargs...)

A DragResize component.

Keyword arguments:
- `id` (String; optional)
- `dragGrid` (Dict; optional)
- `height` (Real; optional)
- `position` (Dict; optional)
- `resizeGrid` (Dict; optional)
- `size` (Dict; optional)
- `width` (Real; optional)
- `x` (Real; optional)
- `y` (Real; optional)
"""
function ''_dragresize(; kwargs...)
        available_props = Symbol[:id, :dragGrid, :height, :position, :resizeGrid, :size, :width, :x, :y]
        wild_props = Symbol[]
        return Component("''_dragresize", "DragResize", "drag_resize", available_props, wild_props; kwargs...)
end

