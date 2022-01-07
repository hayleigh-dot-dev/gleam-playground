import morphdom from 'morphdom'

export const render_into = (el, target) => {
    const prev = target.firstChild

    prev ? morphdom(prev, el) : target.appendChild(el)
}

export const element_namespaced = (namespace, tag, attrs, children) => {
    const el = namespace
        ? document.createElementNS(namespace, tag)
        : document.createElement(tag)

    attrs.flat(Infinity).forEach(attr => {
        switch (attr.type) {
            case 'Attr': {
                const { namespace, name, value } = attr

                namespace
                    ? el.setAttributeNS(namespace, name, value)
                    : el.setAttribute(name, value)
                break
            }

            case 'Prop': {
                const { name, value } = attr

                el[name] = value
                break
            }
        }
    })

    children.flat(Infinity).forEach(child => {
        el.appendChild(child)
    })

    return el
}
export const element = element_namespaced.bind(null, '')

export const text = (content) => {
    return document.createTextNode(content)
}

export const add_event_listener = (el, event, f) => {
    el.addEventListener(event, f)
}