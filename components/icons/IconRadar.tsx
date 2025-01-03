export function IconRadar({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className={className} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="black" />

            <defs>
                <linearGradient id="radar-gradient" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#0f0" />
                    <stop offset="50%" stopColor="#080" />
                    <stop offset="100%" stopColor="#000" />
                </linearGradient>
            </defs>

            <path d="M100,100 L100,0 A100,100 0 0,1 200,100 Z" fill="url(#radar-gradient)" />

            <line x1="100" y1="100" x2="100" y2="0" stroke="#0f0" strokeWidth="2" />
        </svg>
    )
}