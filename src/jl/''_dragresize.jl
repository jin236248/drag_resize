# AUTO GENERATED FILE - DO NOT EDIT

export ''_dragresize

"""
    ''_dragresize(;kwargs...)
    ''_dragresize(children::Any;kwargs...)
    ''_dragresize(children_maker::Function;kwargs...)


A DragResize component.

Keyword arguments:
- `children` (Dict; optional)
- `id` (String; optional)
"""
function ''_dragresize(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("''_dragresize", "DragResize", "drag_resize", available_props, wild_props; kwargs...)
end

''_dragresize(children::Any; kwargs...) = ''_dragresize(;kwargs..., children = children)
''_dragresize(children_maker::Function; kwargs...) = ''_dragresize(children_maker(); kwargs...)

