import playground/util/any.{Any}

pub external type Element

pub opaque type Attribute {
    Attr(namespace: String, name: String, value: String)
    Prop(name: String, value: Any)
}

// RENDERING ELEMENTS ----------------------------------------------------------

pub external fn render_into (el: Element, target: Element) -> Nil = 
    "./element.ffi.js" "render_into"

// CREATING ELEMENTS -----------------------------------------------------------

pub external fn element (tag: String, attrs: List(Attribute), children: List(Element)) -> Element =
    "./element.ffi.js" "element"

pub external fn element_namespaced (namespace: String, tag: String, attrs: List(Attribute), children: List(Element)) -> Element =
    "./element.ffi.js" "element_namespaced"

pub external fn text (content: String) -> Element =
    "./element.ffi.js" "text"

// CREATING ATTRIBUTES ---------------------------------------------------------

pub fn attr (name: String, value: String) -> Attribute {
    Attr("", name, value)
}

pub fn attr_namespaced (namespace: String, name: String, value: String) -> Attribute {
    Attr(namespace, name, value)
}

pub fn prop (name: String, value: Any) -> Attribute {
    Prop(name, value)
}

pub fn int_prop (name: String, value: Int) -> Attribute {
    Prop(name, any.from(value))
}

pub fn float_prop (name: String, value: Float) -> Attribute {
    Prop(name, any.from(value))
}

// EVENT LISTENERS -------------------------------------------------------------

pub external fn add_event_listener (el: Element, event: String, f: fn (Any) -> Nil) -> Nil = 
    "./element.ffi.js" "add_event_listener"