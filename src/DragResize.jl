
module DragResize
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_dragresize.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "drag_resize",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "drag_resize.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "drag_resize.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
