## Future Development:

- create toggle for dark mode

- programmatically linking out to the links and not directing if no link.
  

```js
// EXAMPLE:
function Example() {
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };

  return (
    <div>
      <h2>App</h2>
      <button 
        onClick={handleClick}>
        Twitter
      </button>
    </div>
  );
}
```


  -  this way can account for if null and pass the community as a param to the function