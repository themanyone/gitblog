# GitBlog

Collaborative web publishing with [GitHub](https://github.com/) and [Git](https://git-scm.com/download/win).

* Free and easy
* Website stays up-to-date
* Git tracks revision history
* Avoids version conflicts
* Avoids duplicate work
* No database headaches
* Better collaboration
* Publish with `git push`
* Easy backups with `git clone`

## How It Works

GitBlog is a simple js script that takes [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) from GitHub and displays it on your website using [marked.js](https://github.com/chjj/marked).

GitBlog takes a specially-crafted URL with a=GitHub author, p=project name, and f=file name containing markdown, or fill out this form. <form name="gitblog" target="">
<fieldset><legend>GitHub Configuration</legend>
    <label class="field">author: </label> <input name="a"  type="text"></input>
    <label class="field">project:</label> <input name="p"  type="text"></input>
    <label class="field">file: </label> <input name="f"  type="text"></input><input type="submit"></input>
</fieldset>
</form>

You may also enter the URL of local or remote [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files. <form name="gitblog" target="">
<fieldset><legend>Load Markdown File</legend>
    <label class="field">URL: </label> <input name="u"  type="text"></input><input type="submit"></input>
</fieldset>
</form>
Save or bookmark the resulting page link, and add it to your sitemap or navigation bar.

## Automatic Meta Tag Generation

* `#` Heading at start of page becomes the &lt;title&gt; tag.
* The first sentence becomes the website description.
* Keywords tag is automatically generated from content word count.

## Installation

1. Optionally update [marked.js](https://github.com/chjj/marked).
2. See that the latest marked.min.js is in the js folder of this project.
3. Copy the project to your web server.

## Testing

You may test this project

* by running `python3 -m http.server&`
* or by running `php -S addr:port&`
* or copying it to a local web server

## Credits

Our script loads the remote content and displays it on a web page. It depends upon [marked.js](https://github.com/chjj/marked) by Christopher Jeffrey to do the dirty work of converting the GitHub style [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or mixed HTML tags with markdown to standard HTML. We also need something like [Git](https://git-scm.com/download/win) to keep track of the version history. Git already exists and is stable. Why not use it?