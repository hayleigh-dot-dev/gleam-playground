import playground/dom/document
import playground/dom/element.{Element}
import playground/dom/event.{KeyboardEvent}
import playground/util/any.{Any}
import playground/util/ref.{Ref}

// CREATING PROGRAMS -----------------------------------------------------------

external fn make_foo () -> a = "" "new Foo"

pub opaque type Program(model) {
    Program(
        model:  Ref(model),
        draw:   fn (model) -> Element,
        root:   Element,
        update: fn (model) -> model,
        id:     Ref(Int)
    )
}

pub fn start (model: model, draw: fn (model) -> Element, update: fn (model) -> model) -> Program(model) {
    let program = Program(
        model:  ref.from(model),
        draw:   draw,
        root:   document.query_selector("body"),
        update: update,
        id:     ref.from(0)
    )

    program.model |> ref.get |> program.draw |> element.render_into(program.root)
    program.model |> ref.update(program.update)

    let id = tick(program) |> request_animation_frame
    program.id |> ref.set(id)

    program
}

// DRAWING PROGRAMS ------------------------------------------------------------

external fn request_animation_frame (f: fn () -> Nil) -> Int =
    "" "window.requestAnimationFrame"

fn tick (program: Program(model)) -> fn () -> Nil {
    fn () {
        program.model |> ref.get |> program.draw |> element.render_into(program.root)
        program.model |> ref.update(program.update)

        let id = tick(program) |> request_animation_frame
        program.id |> ref.set(id)
    }
}

// STOPPING PROGRAMS -----------------------------------------------------------

external fn cancel_animation_frame (id: Int) -> Nil = 
    "" "window.cancelAnimationFrame"

pub fn stop (program: Program(model)) -> Program(model) {
    program.id |> ref.get |> cancel_animation_frame
    program.id |> ref.set(0)

    program
}

// LISTENING TO EVENTS ---------------------------------------------------------

pub fn on (program: Program(model), event: String, f: fn (model, Any) -> model) -> Nil {
    element.add_event_listener(program.root, event, fn (e) {
        program.model |> ref.update(f(_, e))
        Nil
    })
}

pub fn on_key_down (program: Program(model), f: fn (model, KeyboardEvent) -> model) -> Nil {
    program |> on("keydown", fn (model, e) {
        let event: KeyboardEvent = any.cast(e)
        f(model, event)
    })
}

pub fn on_key_up (program: Program(model), f: fn (model, KeyboardEvent) -> model) -> Nil {
    program |> on("keyup", fn (model, e) {
        let event: KeyboardEvent = any.cast(e)
        f(model, event)
    })
}