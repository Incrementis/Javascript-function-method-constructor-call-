//sources for jokes: 
//http://www.short-funny.com/sarcasm-black-humor.php



//1.
function jokeOne(telling)
{
	var joke = document.getElementById('jokeOne');
	
	joke.innerHTML = telling;
}


//2.
var jokeTwo =
{
	tellMe: function()
	{
		var joke = document.getElementById('jokeTwo');
	
		joke.innerHTML = this.telling;
	},
	telling: "Wow, honey, I never thought our son would go that far!-Yeah, the catapult is really amazing. Go get our daughter!"	
}


//3.
function jokeThree(telling)
{
	this.tellMe = telling;
}


//Call the Jokes
function Joke(first, second, third)
{
	if(first === 1)
	{
		//Function call
		jokeOne("You know you're ugly when you get handed the camera every time they make a group photo.");
	}
	else if(second === 1)
	{
		//Method call
		jokeTwo.tellMe();
		
	}
	else if(third === 1)
	{
		var joke = document.getElementById('jokeThree');
		
		//Constructor call
		var lastJoke = new jokeThree("What do you get when you cross a bunny and a Rottweiler?-Just the Rottweiler.");
		
		
		joke.innerHTML = lastJoke.tellMe;
	}
}
