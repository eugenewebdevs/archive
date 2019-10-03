# Web Services: How we serve up our content

Slides use [remark](https://remarkjs.com/#1). Outline and diagrams were made using LibreOffice Writer and Draw.

## Setup

    $ sudo apt-get install make

## Build and run

    $ make

Then open index.html in your browser.

## Making changes

Update presentation.md and run `make`. The format of the md file should be obvious. Make simply concatinates header.html, presentation.md, and footer.html. See the Makefile for details.

## License

MIT
