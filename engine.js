'use strict';

function parseTheme(parent, child, relativeName) {
    if (!parent || !child) {
        throw new Error('Enter valid args');
    }

    var fs = require('fs');
    var cheerio = require('cheerio');

    fs.readFile(parent, 'utf8', function(error, content) {
        if (error) {
            throw new Error(error);
        }

        let $parent = {};
        $parent = cheerio.load(content);

        fs.readFile(child, 'utf8', function(error, childContent) {
            if (error) {
                throw new Error(error);
            }

            let $child = cheerio.load(childContent);

            let el = $child('.js-renderable');

            while (el.html()) {
                const targetId = "#" + el.data('to');
                const content = el.html();
                $parent(targetId).replaceWith(content);
                el = el.next();
            }

            fs.writeFile('./dist/rendered/' + relativeName, $parent.html(), function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('The new HTML file has been created!');
            });
        })
    })
}

process.argv.slice(2).forEach(function(val, index, array) {
    parseTheme('./html/layout.html', './html/pages/' + val, val)
});