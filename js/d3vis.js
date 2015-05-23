// Let's draw something

var  body=d3.select("body");
var graphics =body.append("svg");

var width=900;
var height=600;

graphics.attr("width", width);
graphics.attr("height", height);

/*
graphics.append("circle")
    .attr("r",15)
    .attr("cx",20)
    .attr("cy",20);

graphics.append("rect")
    .attr("r",40)
    .attr("y",20)
    .attr("height",30)
    .attr("width",50);

graphics.append("line")
    .attr("x1",100)
    .attr("y1",50)
    .attr("x2",180)
    .attr("y2",10)
    .attr("stroke","#000000")
    .attr("stroke-width",2);

graphics.append("text")
    .text("I am adrawing")
    .attr("x",190)
    .attr("y",30);


graphics.append("rect")
    .attr("x",50)
    .attr("y",20)
    .attr("height",70)
    .attr("width",50);
graphics.append("rect")
    .attr("x",90)
    .attr("y",300-100)
    .attr("height",100)
    .attr("width",50);
graphics.append("rect")
    .attr("x",140)
    .attr("y",300-120)
    .attr("height",120)
    .attr("width",50);
graphics.append("rect")
    .attr("x",190)
    .attr("y",300-240)
    .attr("height",240)
    .attr("width",50);

for (var i=0 ;  i < 10; i++){
    graphics.append("rect")
        .attr("x",i*50)
        .attr("y",300-i*20)
        .attr("height",i*20)
        .attr("width",50);

    graphics.append("circle")
        .attr("r",40)
        .attr("cx",50)
        .attr("cy",50)
        .style("fill","#468284")
        .style("stroke","#CCCCCC")
        .style("stroke-width","3px")
        .style("opacity","0.5");

    graphics.append("text")
        .text("I am a drawing")
        .attr("x",450)
        .attr("y",50)
        .attr("text-anchor","start")
        .attr("transform","scale(2,2)")
    ;
*/
    var arc=d3.svg.arc()
        .innerRadius(80)
        .outerRadius(100)
        .startAngle(2)
        .endAngle(4.25);

    graphics.append("path")
        .attr("d",arc)
        .attr("transform","translate(100,100)")
    ;



