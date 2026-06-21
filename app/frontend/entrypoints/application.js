import './application.css'
import { mountIslands} from '../lib/mountIslands'

document.addEventListener('DOMContentLoaded', () => {
    mountIslands()
})

// Once Turbo is introduced (Phase 2, for no-reload project filtering),
// also re-run on 'turbo:load' so islands re-mount after Turbo page swaps:
// document.addEventListener('turbo:load', () => mountIslands())