function RadialChart() {
    const radius = 100;

    const skills = [
        { name: "C++", value: 65 },
        { name: "C#", value: 75 },
        { name: "HTML", value: 80 },
        { name: "JavaScript", value: 28 },
        { name: "CSS", value: 80 },
        { name: "Java", value: 90 }
    ];

    const hexPoints = skills.map((_, i) => {
        const angle = ((360 / skills.length) * i - 90) * (Math.PI / 180);
        return {
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle),
        };
    });

    return (
        <svg
            viewBox={`${-radius * 1.6} ${-radius * 1.6} ${radius * 3.2} ${radius * 3.2}`}
            preserveAspectRatio="xMidYMid meet"
            className="radial-chart"
        >
            {hexPoints.map((p, i) => (
                <line key={i} x1="0" y1="0" x2={p.x} y2={p.y} className="hex-lines" />
            ))}

            {[0.33, 0.66, 1].map((factor, i) => (
                <polygon
                    key={i}
                    className="hexagon"
                    points={hexPoints.map((p) => `${p.x * factor},${p.y * factor}`).join(" ")}
                />
            ))}

            <polygon
                className="skill-data"
                points={skills.map((skill, i) => {
                    const factor = skill.value / 100;
                    return `${hexPoints[i].x * factor},${hexPoints[i].y * factor}`;
                }).join(" ")}
            />

            {skills.map((skill, i) => (
                <text
                    key={skill.name}
                    className="skill-label"
                    x={hexPoints[i].x * 1.3}
                    y={hexPoints[i].y * 1.3}
                >
                    {skill.name}
                </text>
            ))}
        </svg>
    );
}

export default RadialChart;
