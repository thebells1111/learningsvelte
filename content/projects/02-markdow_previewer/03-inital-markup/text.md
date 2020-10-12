---
title: Create Initial Markup
fold: ["script"]
---

The markup for this is really easy. 

**User Story #1**: I can see a `textarea` element with a corresponding `id="editor"`.

**User Story #2**: I can see an element with a corresponding `id="preview"`.

Which will look like this

```html
<textarea id="editor" />
<div id="preview"></div>
```

We'll want to make sure whatever we type inside the `textarea` automatically updates the `markdownContent` variable, so we'll bind `textarea` `value` to the `markdownContent` variable.

```html
<textarea id="editor" bind:value={markdownContent} />
<div id="preview"></div>
```

Now we'll make `#preview` show `htmlContent`

```html
<textarea id="editor" bind:value={markdownContent} />
<div id="preview">{htmlContent}</div>
```

Ok... so doing this shows a bunch of html, but we want the html to be parsed in the preview pane, not shown as actual html. Svelte has a built-in way of doing that called `@html`. It can be dangerous to use, because it doesn't sanitize any of the html, so if you're showing user generated inputs, you could be exposed to some cross-site scripting. Since we're the one providing the input from the text editor, we won't sanitize the htmlContent, but it is something to keep in mind when developing your own apps in the future. So, we'll use `@html` to change the preview.

```html
<textarea id="editor" bind:value={markdownContent} />
<div id="preview">{@htmlContent}</div>
```

Aside from some styling, that's pretty much it. We're meeting all of the User Stories.~

~**User Story #1**: I can see a `textarea` element with a corresponding `id="editor"`.~

~**User Story #2**: I can see an element with a corresponding `id="preview"`.~

~**User Story #3**: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.~

~**User Story #4**: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type.~

~**User Story #5**: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.~

~**User Story #6**: When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.~

~**Optional Bonus (you do not need to make this test pass)**: My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.~