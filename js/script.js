// create an array to hold quotes and quote properties
var quotes = [
	{
		quote:"The way I need you is a loneliness I cannot bear.",
		name:"Carson McCullers",
		citation:"The Heart is a Lonely Hunter",
		year:"1940"
	},
	{
		quote:"Someone I loved once gave me a box full of darkness. It took me years to understand that this, too, was a gift.",
		name:"Mary Oliver",
		citation:"Thirst",
		year:"2006"
	},
	{
		quote:"Years afterward she thought of the duck as still there, swimming and diving all by herself in the sunlight.",
		name:"Willa Cather",
		citation:"O Pioneers!",
		year:"1913"
	},
	{
		quote:"The eyes that glanced at me shone with a pale-green light.",
		name:"H.G. Wells",
	},
	{
		quote:"Open your eyes and see what you can with them before they close forever.",
		name:"Anthony Doerr",
		citation:"All the Light We Cannot See",
		year:"2014"
	},
	{
		quote:"Have all beautiful things sad destinies?",
		name:"Jean Rhys",
		citation:"Wide Sargasso Sea",
		year:"1966"
	},
	{
		quote:"If you're looking for sympathy, you'll find it between shit and syphilis in the dictionary.",
		name:"David Sedaris",
		citation:"Barrel Fever",
		year:"1994"
	},
	{
		quote:"No live organism can continue for long to exist sanely under conditions of absolute reality; even larks and katydids are supposed, by some, to dream.",
		name:"Shirley Jackson",
		citation:"The Haunting of Hill House",
	}
];

// event listener to respond to "Gimme a quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create a getRandomQuote function that selects a quote object from the quotes array and returns it
function getRandomQuote () {
	var randQuote = quotes[Math.floor( Math.random() * quotes.length )];
	return randQuote;
}

// create a printQuote function that calls getRandomQuote and stores it in an object variable
// run this through an if else if else statement that looks for specific values - e.g. citation and year
function printQuote () {
	var pickedQuote = getRandomQuote();
	if (pickedQuote.citation && pickedQuote.year) {
		var quote = '<p class="quote">“' + pickedQuote.quote + '”</p>';
		var name = '<p class="source">' + pickedQuote.name + '</p>';
		var citation = '<span class="citation">' + pickedQuote.citation + '</span>';
		var year = '<span class="year">' + pickedQuote.year + '</span>';
		return document.getElementById('dynamic-box').innerHTML = quote + name + citation + year;
	} else if (pickedQuote.citation) {
		var quote = '<p class="quote">“' + pickedQuote.quote + '”</p>';
		var name = '<p class="source">' + pickedQuote.name + '</p>';
		var citation = '<span class="citation">' + pickedQuote.citation + '</span>';
		return document.getElementById('dynamic-box').innerHTML = quote + name + citation;
	} else {
		var quote = '<p class="quote">“' + pickedQuote.quote + '”</p>';
		var name = '<p class="source">' + pickedQuote.name + '</p>';
		return document.getElementById('dynamic-box').innerHTML = quote + name;
	}
}