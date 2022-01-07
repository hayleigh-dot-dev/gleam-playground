import playground/dom/element.{Element}
import playground/dom/event.{KeyboardEvent}
import playground/dom/svg
import playground/program.{Program}
import playground/util/console

// MAIN ------------------------------------------------------------------------

pub fn main () {
    let app = program.start(init(), draw, update)

    app |> program.on_key_down(key_down)
    app |> program.on_key_up(key_up)
}

// MODEL -----------------------------------------------------------------------

type Model {
    Model(width: Float, height: Float, x_pos: Float, x_vel: Float, y_pos: Float, y_vel: Float)
}

fn init () -> Model {
    Model(width: 600.0, height: 600.0, x_pos: 275.0, x_vel: 0.0, y_pos: 275.0, y_vel: 0.0)
}

// DRAW ------------------------------------------------------------------------

const svg_namespace = "http://www.w3.org/2000/svg"

fn draw (model: Model) -> Element {
    svg.svg([
        svg.width(model.width),
        svg.height(model.height)
    ], [
        svg.rect([
            svg.width(50.0),
            svg.height(50.0),
            svg.x(model.x_pos),
            svg.y(model.y_pos),
            svg.fill("blue")
        ], [])
    ])
}

// UPDATE ----------------------------------------------------------------------

fn update (model: Model) -> Model {
    let x_pos = model.x_pos +. model.x_vel |> clamp(0.0, 600.0)
    let y_pos = model.y_pos +. model.y_vel |> clamp(0.0, 600.0)

    Model(..model, x_pos: x_pos, y_pos: y_pos)
}

fn key_down (model: Model, event: KeyboardEvent) -> Model {
    case event.key {
        "ArrowUp" ->
            Model(..model, y_vel: -5.0)
        "ArrowDown" ->
            Model(..model, y_vel: 5.0)
        "ArrowLeft" ->
            Model(..model, x_vel: -5.0)
        "ArrowRight" ->
            Model(..model, x_vel: 5.0)
        other -> 
            model
    }
}

fn key_up (model: Model, event: KeyboardEvent) -> Model {
    case event.key {
        "ArrowUp" ->
            Model(..model, y_vel: 0.0)
        "ArrowDown" ->
            Model(..model, y_vel: 0.0)
        "ArrowLeft" ->
            Model(..model, x_vel: 0.0)
        "ArrowRight" ->
            Model(..model, x_vel: 0.0)
        other -> 
            model
    }
}


fn clamp (val: Float, min: Float, max: Float) -> Float {
    case val <. min {
        True ->
            min

        False ->
            case val >. max {
                True ->
                    max

                False ->
                    val
            }
    }
}