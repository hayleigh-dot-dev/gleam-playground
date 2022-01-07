import playground/dom/element.{Element}

pub external fn query_selector (selector: String) -> Element = 
    "" "document.querySelector"
