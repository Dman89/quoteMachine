var quotes = new Array;
quotes[0] = {quote:"Good management consists in showing average people how to do the work of superior people.", author:"John D. Rockefeller"};
       quotes[1] = {quote:"When you expect things to happen - strangely enough - they do happen.", author:"J.P. Morgan"};
       quotes[2] = {quote:"If you have to ask how much it costs, you can't afford it.", author:"J.P. Morgan"};
       quotes[3] = {quote:"As I grow older, I pay less attention to what men say. I just watch what they do.", author:"Andrew Carnegie"};
quotes[4] = {quote:"Success is getting what you want. Happiness is wanting what you get.", author:"Dale Carnegie"};
quotes[5] = {quote:"Immense power is acquired by assuring yourself in your secret reveries that you were born to control affairs.", author:"Andrew Carnegie"};
quotes[6] = {quote:"Go as far as you can see; when you get there, you'll be able to see farther.", author:"J.P. Morgan"};
quotes[7] = {quote:"Don't be afraid to give up the good to go for the great.", author:"John D. Rockefeller"};
quotes[8] = {quote:"I would rather earn 1% off a 100 people's efforts than 100% of my own efforts.", author:"John D. Rockefeller"};
quotes[9] = {quote:"I believe that every right implies a responsibility; every opportunity, an obligation; every possession, a duty.", author:"John D. Rockefeller"};
quotes[10] = {quote:"I believe that government is the servant of the people and not their master.", author:"David Rockefeller"};

       quotes[11] = {quote:"I don't care half so much about making money as I do about making my point, and coming out ahead.", author:"Cornelius Vanderbilt"};
       quotes[12] = {quote:"When one door closes another door opens; but we so often look so long and so regretfully upon the closed door, that we do not see the ones which open for us.", author:"Alexander Graham Bell"};
       quotes[13] = {quote:"Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", author:"Alexander Graham Bell"};

quotes[14] = {quote:"A man, as a general rule, owes very little to what he is born with - a man is what he makes of himself.", author:"Alexander Graham Bell"};
quotes[15] = {quote:"The most successful men in the end are those whose success is the result of steady accretion.", author:"Alexander Graham Bell"};
quotes[16] = {quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work.", author:"Thomas Edison"};

quotes[17] = {quote:"There is no substitute for hard work.", author:"Thomas Edison"};
quotes[18] = {quote:"Everything comes to him who hustles while he waits.", author:"Thomas Edison"};
quotes[19] = {quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author:"Thomas Edison"};
quotes[20] = {quote:"Oh Divine providence, I ask not for more riches but more wisdom with which to accept and use wisely the riches I received at birth in the form of the power to control and direct my own mind to whatever ends I desire.", author:"Napoleon Hill"};
quotes[21] = {quote:"A life is not important except in the impact it has on other lives.", author:"Jackie Robinson"};
quotes[22] = {quote:"The Only Thing That Is Constant Is Change.", author:"Heraclitus"};

var display = "";
urlForImg = ["url('images/q1.png')",
                    "url('images/q2.png')",
                    "url('images/q3.png')",
                    "url('images/q4.png')",
                    "url('images/q5.png')",
                    "url('images/q6.png')",
                    "url('images/q7.png')",
                    "url('images/q8.png')",
                    "url('images/q9.png')",
                    "url('images/q10.png')",
                    "url('images/q11.png')",
                    "url('images/q12.png')",
                    "url('images/q13.png')"
          ]

$(document).ready(function() {
  $("#quote").html(function (){display = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteDisplay").innerHTML = '<p id="quote" class="">' + display.quote + '</p><p id="author" class="text-right">' + display.author + '</p>';});
   // Place an onclick command to place a quote/author and change the background
   $('#sendInput').on("click", function() {
      $("#quote").html(function (){display = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteDisplay").innerHTML = '<p id="quote" class="">' + display.quote + '</p><p id="author" class="text-right">' + display.author + '</p>';});

      url = urlForImg[Math.floor(Math.random() * urlForImg.length)];
      document.getElementById("backgroundImg").style.backgroundImage = url;
});

 $("#twitter").on("click", function() {
    // send Message "display.author" + " -" + "display.quote"
    var quoteToTweet = '"' + display.quote + '"' +  " -" + display.author;
    if (quoteToTweet.length > 136) {
       quoteToTweet = '"' + display.quote.slice(0, 133 - display.author.length) + '..."' +  " -" + display.author;
       //quoteToTweet = quoteToTweet.slice(0, 136) + '..."';
       var linkToTweet = 'http://twitter.com/home?status=' + encodeURIComponent(quoteToTweet);
       window.open(linkToTweet, '_blank');
    } else {
       var linkToTweet = 'http://twitter.com/home?status=' + encodeURIComponent(quoteToTweet);
       window.open(linkToTweet, '_blank');
    }

 });
});
