const quotes = [
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy"
  },
  {
    quote: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us. ",
    author: "Helen Keller"
  },
  {
    quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Machael Jordan"
  },
  {
    quote: "When anger rises, think of the consequences.",
    author: "Confucius"
  },
  {
    quote: "People fail forward to success.",
    author: "Mary Kay Ash"
  },
  {
    quote: "Luck is the residue of design.",
    author: "John F. Kennedy"
  },
  {
    quote: "A man is but the product of his thoughts. What he thinks, he becoms.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The knowledge exists in knowing that you konw nothing.",
    author: "Scorates" 
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    quote: "The more violent the storm, the quicker it passes.",
    author: "Paulo Coelho"
  }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote
author.innerText = `-${quotes[Math.floor(Math.random()*quotes.length)].author}-`

console.log()