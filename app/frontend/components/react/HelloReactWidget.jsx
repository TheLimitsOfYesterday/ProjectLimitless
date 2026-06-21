export default function HelloReactWidget ({ label = 'React island'}) {
    return (
        <div className="rounded-title boarder boarder-ink-line bg-ink-surface px-4 py-3 text-sm text-mist">
            <span className="font-mono text-signal">●</span>{' '}
            {label} mounted via the shared island registry.
        </div>
    )
}