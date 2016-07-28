
//$('#svgintro').svg({onLoad: drawIntro});

function drawIntro(svg) {
    svg.circle(75, 75, 50,
        {fill: 'none', stroke: 'red', strokeWidth: 3});
    var g = svg.group({stroke: 'black', strokeWidth: 2});
    svg.line(g, 15, 75, 135, 75);
    svg.line(g, 75, 15, 75, 135);
}


