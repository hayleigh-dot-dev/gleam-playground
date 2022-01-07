import playground/util/any
import playground/dom/element.{Element, Attribute}

pub const namespace = "http://www.w3.org/2000/svg"

// ELEMENTS --------------------------------------------------------------------

pub fn svg (attrs: List(Attribute), children: List(Element)) -> Element {
    element.element_namespaced(namespace, "svg", attrs, children)
}

pub fn rect (attrs: List(Attribute), children: List(Element)) -> Element {
    element.element_namespaced(namespace, "rect", attrs, children)
} 

// ATTRIBUTES ------------------------------------------------------------------

pub fn width (val: Float) -> Attribute {
    element.attr("width", val |> any.to_string)
}

pub fn height (val: Float) -> Attribute {
    element.attr("height", val |> any.to_string)
}

pub fn x (val: Float) -> Attribute {
    element.attr("x", val |> any.to_string)
}

pub fn y (val: Float) -> Attribute {
    element.attr("y", val |> any.to_string)
}

pub fn fill (val: String) -> Attribute {
    element.attr("fill", val)
}