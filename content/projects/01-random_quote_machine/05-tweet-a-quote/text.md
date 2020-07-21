---
title: Create Tweet Quote URL
---
**User Story #10:** I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

Let's complete this user story real quick. The tweet quote should look something like this...

```
"This is a super awesome quote." -Somebody Cool
```

In order to put that in a url, we'll have to escape any of the following characters: `, / ? : @ & = + $ #`. That's pretty easy to do with our handy-dandy built-in encodeURIComponent function. Let's create a new reactive variable that updates whenever the quote text and author changes.

```html
<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;
  $: encodedTweet = encodeURIComponent(
    `"${currentText}"  -${currentAuthor}`
  );
  ...
```

We're just building a string using string literals, which allow us to use the value of a variable as long as it's in a `${}` wrapper, which is not to be confused with Svelte's reactive declaration, which is preceded by `$:`. 

Now that we have our message encoded, we can create our url, again, using a reactive declaration and a string literal.

```html
<script>
  import quotes from './quotes.json';
  let index = 0;
  $: currentText = quotes[index].text;
  $: currentAuthor = quotes[index].author;
  $: encodedTweet = encodeURIComponent(
    `"${currentText}"  -${currentAuthor}`
  );
  $: twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedTweet}`;
  ...
```

Finally, we just need to use the `twitterUrl` in our Twitter `anchor tag` as the `href`.

```html
<div id="quote-box">
  <p id="text">{currentText}</p>
  <p id="author">{currentAuthor}</p>
  <button id="new-quote" on:click={newQuote}>New Quote</button>
  <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
</div>
```

Now, if you click on the `Tweet Quote` link, the link will take you to Twitter

