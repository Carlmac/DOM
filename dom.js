window.dom = {
    find(selector, scope) {
        let n = (scope || document).querySelectorAll(selector);
        if (n.length > 1) {
            return n;
        } else if (n.length === 1) {
            return n[0];
        }
    },

    style(node, style, value) {
        if (arguments.length === 2) {
            if (style instanceof Object) {
                for (let key in style) {
                    node.style[key] = style[key];
                }
            } else if (typeof style === 'string') {
                return node.style[style];
            }
        } else if (arguments.length === 3) {
            node.style[style] = value;
        }
    },

    each(nodeList, fn) {
        let n = Array.from(nodeList);
        n.forEach(fn);
    }
}