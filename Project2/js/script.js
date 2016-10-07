var row = 10;
var col = 10;
var bodyWidth = 800;
var canPaint = false;

$(document).ready(function() {
	createGrid(row,col);	
});



var createGrid = function(row,col)
{
	$(".btn").remove();
	$(".wrapper").remove();
	$("<button onclick='newGrid();'>Reset</button>").appendTo("body").addClass("btn");
	$("body").append("<div class='wrapper'></div>");
	for(var i = 0; i<row; i++)
	{
		for(var j = 0; j < col; j++)
		{
			$("<div></div>").appendTo(".wrapper").addClass("grid").height((bodyWidth/row)-4).width((bodyWidth/row)-4).css({
				display: "inline-block",
				margin: "1px",
				padding: "-1px",
				border: "1px solid black"
			});
		}
	}

	$("body").mousedown(function(){
		canPaint = true;
	});
	
	$(".grid").hover(function() {
		if(canPaint)
		{
			$(this).css('background-color', 'black');
		}
	});
	$(".grid").click(function() {

			$(this).css('background-color', 'black');
	});

	$("body").mouseup(function(){
		canPaint = false;
	});
}

var newGrid = function()
{
	row = prompt("Row Size");
	col = prompt("Collumn Size");
	createGrid(row,col);
}