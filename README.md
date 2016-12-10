# [GitBlog](https://github.com/themanyone/gitblog)
<img style="float:right" alt="GitBlog" src="favicon/android-icon-192x192.png">

Use [GitHub](https://github.com/themanyone/gitblog) as a blogging platform. Free collaborative web publishing with [Git](https://git-scm.com/download/win). 

Brought to you by [TheNerdShow.com](http://thenerdshow.com/)

* Keep websites up to date
* Avoid duplicate work
* Better collaboration
* Track revision history
* Work offline, and locally

## Why This Exists

We developed several [GitHub projects](https://github.com/themanyone) and synchronizing our website with [README.md](README.md) from each project became tiresome. Browsers routinely cache the result of AJAX queries for many hours anyway, unless [instructed to do otherwise](http://www.itgeared.com/articles/1401-ajax-browser-cache-issues-fix/), so there is nothing wrong with having a website fetch markdown from GitHub [or custom git server](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols) and convert it to HTML on demand. Then we had another thought. Why not serve even more content in [markdown](https://help.github.com/enterprise/2.8/user/articles/basic-writing-and-formatting-syntax/) format?

## How It Works

Use [GitBlog](https://github.com/themanyone/gitblog) to display README.md from a GitHub project, or create entire websites on GitHub using their simplified [markdown](https://help.github.com/enterprise/2.8/user/articles/basic-writing-and-formatting-syntax/) format. GitBlog is a simple js script that takes [markdown](https://help.github.com/enterprise/2.8/user/articles/basic-writing-and-formatting-syntax/) files from GitHub and displays them on a website using [marked.js](https://github.com/chjj/marked). Start a GitHub project containing markdown files and use GitBlog to display them as web pages.

[GitBlog](https://github.com/themanyone/gitblog) takes a specially-crafted URL with a=author, p=project name, and f=file name containing markdown. Fill out this form and click submit for an example. Copy or bookmark the resulting page link, and add it to the sitemap or navigation bar.<form name="gitblog" target="">
<fieldset><legend>GitHub Configuration</legend>
    <label class="field">author: </label> <input name="a"  type="text"></input>
    <label class="field">project:</label> <input name="p"  type="text"></input>
    <label class="field">(opt.) file: </label> <input name="f"  type="text"></input><input type="submit"></input>
</fieldset>
</form>

You may also enter the URL of local or remote [markdown](https://help.github.com/enterprise/2.8/user/articles/basic-writing-and-formatting-syntax/) files. <form name="gitblog" target="">
<fieldset><legend>Load Markdown File</legend>
    <label class="field">URL: </label> <input name="u"  type="text"></input><input type="submit"></input>
</fieldset>
</form>

## Automatic Meta Tag Generation

* `#` Heading at start of page becomes the &lt;title&gt; tag.
* The first sentence becomes the website description.
* Keywords tag is automatically generated from content word count.
* Google [apparently indexes](http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157) these automatically generated tags.

## Installation

1. Get [GitBlog from GitHub](https://github.com/themanyone/gitblog)
1. Optionally update [marked.js](https://github.com/chjj/marked).
2. See that the latest marked.min.js is in the js folder of this project.
3. Edit this README.md or replace with custom markdown.
4. Edit navbar.html with site links.
3. Copy this project to a web server.

## Testing

You may test this project

* by running `python3 -m http.server&`
* by running `php -S addr:port&`
* with `webfsd -F -p 8000&`
* using `ruby -run -ehttpd . -p8000&`
* or with [many other test servers](http://unix.stackexchange.com/questions/32182/simple-command-line-http-server).

## Credits

Our script loads the remote content, displays it on a web page, and generates meta tags. It depends upon [marked.js](https://github.com/chjj/marked) by Christopher Jeffrey to convert the GitHub style [markdown](https://help.github.com/enterprise/2.8/user/articles/basic-writing-and-formatting-syntax/) to HTML. We also need something like [Git](https://git-scm.com/download/win) to keep track of the version history. Git already exists and is stable. Why not use it?