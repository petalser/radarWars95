import { useEffect, useState } from "react";

const ANIMATION_CYCLE_DURATION = 2;
const HOSTILE_SPEED = ANIMATION_CYCLE_DURATION * 20;

const getRandomPointOnCircle = (distant = false) => {
    const angleInRadians = Math.random() * 2 * Math.PI;
    const adjustedAngle =
        (Math.PI * 1.5 - angleInRadians + 2 * Math.PI) % (2 * Math.PI);
    const angleInDegrees = (adjustedAngle * 180) / Math.PI;
    const radiusPrimary = Math.random() * 200;

    const radius = distant
        ? 100
        : radiusPrimary > 100
            ? radiusPrimary / 2
            : radiusPrimary;
    const x = 100 + radius * Math.cos(angleInRadians);
    const y = 100 + radius * Math.sin(angleInRadians);

    return {
        x,
        y,
        delay: ANIMATION_CYCLE_DURATION / (360 / angleInDegrees),
        moves: distant,
    };
};

type RadarVisualProps = {
    className: string;
};

type PointsType = {
    x: number;
    y: number;
    delay: number;
    moves: boolean;
};

export default function RadarVisual({ className }: RadarVisualProps) {
    const [points, setPoints] = useState<PointsType[] | null>(null);

    useEffect(() => {
        const pointsArray = Array.from({ length: 10 }, () =>
            getRandomPointOnCircle()
        );
        pointsArray[5] = getRandomPointOnCircle(true);
        setPoints(pointsArray);
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className={className}
            viewBox="0 0 200 200"
        >
            <circle cx="100" cy="100" r="100" fill="#0a0" />

            <defs>
                <linearGradient
                    id="radar-gradient"
                    gradientTransform="rotate(90)"
                >
                    <stop offset="0%" stopColor="#0000" />
                    <stop offset="60%" stopColor="#0000b" />
                    <stop offset="100%" stopColor="#000f" />
                </linearGradient>
            </defs>

            <path
                d="M100,200 L100,0 A100,100 0 0,1 100,200 Z"
                fill="url(#radar-gradient)"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 100 100"
                    to="0 100 100"
                    dur={`${ANIMATION_CYCLE_DURATION}s`}
                    repeatCount="indefinite"
                />
            </path>

            <path d="M100,200 L100,0 A100,100 0 0,0 100,200 Z" fill="black">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 100 100"
                    to="0 100 100"
                    dur={`${ANIMATION_CYCLE_DURATION}s`}
                    repeatCount="indefinite"
                />
            </path>

            {points?.map((point, index) => {
                return (
                    <g key={`${index}b`}>
                        <circle
                            cx={point.moves ? 100 : point.x}
                            cy={point.moves ? 100 : point.y}
                            r={2}
                            fill={"#0f00"}
                        >
                            <animate
                                attributeName="fill"
                                from="#0f0f"
                                to="#0f00"
                                begin={`${point.delay + index * ANIMATION_CYCLE_DURATION}s`}
                                dur={`${ANIMATION_CYCLE_DURATION}s`}
                                repeatCount="indefinite"
                            />
                            {point.moves && (
                                <>
                                    <animate
                                        attributeName="cx"
                                        from={point.x}
                                        to="100"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                    <animate
                                        attributeName="cy"
                                        from={point.y}
                                        to="100"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                </>
                            )}
                        </circle>
                        {point.moves && (
                            <circle
                                key={`${index}a`}
                                cx={100}
                                cy={100}
                                r={6}
                                stroke={"#0f00"}
                                strokeWidth={1}
                                fill="none"
                            >
                                <>
                                    <animate
                                        attributeName="stroke"
                                        from="#0f00"
                                        to="#0f0f"
                                        begin={`${HOSTILE_SPEED / 1.5}s`}
                                        dur={`0.5s`}
                                        repeatCount="indefinite"
                                        calcMode="discrete"
                                    />
                                    <animate
                                        attributeName="cx"
                                        from={point.x}
                                        to="100"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                    <animate
                                        attributeName="cy"
                                        from={point.y}
                                        to="100"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                </>
                            </circle>
                        )}
                        {point.moves && (
                            <rect
                                x={97}
                                y={97}
                                width={6}
                                height={6}
                                stroke={"#0f00"}
                                strokeWidth={1}
                                fill="none"
                            >
                                <>
                                    <animate
                                        attributeName="stroke"
                                        from="#0f00"
                                        to="#0f0f"
                                        begin={`${HOSTILE_SPEED / 1.5}s`}
                                        dur={`0.5s`}
                                        repeatCount="indefinite"
                                        calcMode="discrete"
                                    />
                                    <animate
                                        attributeName="x"
                                        from={point.x - 3}
                                        to="97"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                    <animate
                                        attributeName="y"
                                        from={point.y - 3}
                                        to="97"
                                        dur={`${HOSTILE_SPEED}`}
                                    />
                                </>
                            </rect>
                        )}
                    </g>
                );
            })}
            <circle cx="100" cy="100" r="100" fill="#f000">
                <animate
                    attributeName="fill"
                    from="#0f0"
                    to="#000"
                    dur="1s"
                    begin={`${HOSTILE_SPEED}s`}
                    fill="freeze"
                />
            </circle>

            <text
                x={100}
                y={75}
                fill="#0f0"
                fontSize="25"
                textAnchor="middle"
                dominantBaseline="middle"
                visibility="hidden"
            >
                {`BASE IS`}
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <animate
                    attributeName="stroke"
                    from="#000"
                    to="#0f0f"
                    begin={`${HOSTILE_SPEED}s`}
                    dur={`0.5s`}
                    repeatCount="indefinite"
                    calcMode="discrete"
                />
            </text>
            <text
                x={100}
                y={100}
                fill="#0f0"
                fontSize="25"
                textAnchor="middle"
                dominantBaseline="middle"
                visibility="hidden"
            >
                {`UNDER`}
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <animate
                    attributeName="stroke"
                    from="#000"
                    to="#0f0f"
                    begin={`${HOSTILE_SPEED}s`}
                    dur={`0.5s`}
                    repeatCount="indefinite"
                    calcMode="discrete"
                />
            </text>
            <text
                x={100}
                y={125}
                fill="#0f0"
                fontSize="25"
                textAnchor="middle"
                dominantBaseline="middle"
                visibility="hidden"
            >
                {`ATTACK`}
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <animate
                    attributeName="stroke"
                    from="#000"
                    to="#0f0f"
                    begin={`${HOSTILE_SPEED}s`}
                    dur={`0.5s`}
                    repeatCount="indefinite"
                    calcMode="discrete"
                />
            </text>
            <rect
                x={43}
                y={43}
                width={112}
                height={112}
                fill="none"
                stroke="#0f0"
                strokeWidth={3}
                visibility="hidden"
            >
                <set
                    attributeName="visibility"
                    to="visible"
                    begin={`${HOSTILE_SPEED + 1}s`}
                />
                <animate
                    attributeName="stroke"
                    from="#000"
                    to="#0f0f"
                    begin={`${HOSTILE_SPEED}s`}
                    dur={`0.5s`}
                    repeatCount="indefinite"
                    calcMode="discrete"
                />
            </rect>
        </svg>
    );
}
