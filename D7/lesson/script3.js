// Handling events involves responding to user interactions, such as clicks, submissions, and keypresses, on web pages. By registering event listeners, you can execute specific actions or functions when an event occurs. Additionally, understanding the event object and its properties allows you to access information related to the event. Event delegation is a technique that optimizes event handling by assigning a single event listener to a parent element instead of attaching listeners to multiple child elements

// Registering event listeners to respond to user interactions
const button = document.querySelector('#btn');
button.addEventListener('click', handleClick);

function handleClick() {
  console.log('The button works');
}
