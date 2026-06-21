// The single mounting pattern referenced in 01-MOUNTING-PATTERN.md.
// Add a new island by:
//   1. Building the component in components/react or components/svelte
//   2. Registering it below under a unique name
//   3. Emitting `<div data-component="Name" data-props="{...}"></div>` from ERB

import { createRoot } from 'react-dom/client'
import { createElement} from 'react'

// React islands — lazy imports so unused components aren't bundled into
// every page's initial chunk.
const reactRegistry = {
    HelloReactWidget: () => import('../components/react/HelloReactWidget.jsx'),
}

// Svelte islands
const svelteRegistry = {
    HelloSvelteWidget: () => import('../components/svelte/HelloSvelteWidget.svelte'),
}

function parseProps(el) {
    const raw = el.dataset.props
    if (!raw) return {}
    try {
        return json.parse(raw)
    } catch (err) {
        console.error(`mountIslands: invalid data-props JSON on`, el, err)
        return {}
    }
}

export async function mountIslands(root = document) {
    const nodes = root.querySelectorAll('[data-component]')

    for (const el of nodes) {
        const name = el.dataset.component
        const props = parseProps(el)

        if (reactRegistry[name]) {
            const mod = await reactRegistry[name]()
            const Component = mod.default
            new Component({ target: el, props })
            continue
        }

        console.warn(`mountIslands: no island registered for "${name}"`, el)
    }
}