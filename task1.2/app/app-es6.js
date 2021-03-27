'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(editText) {
        this.text = editText;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let pst = new Post('Viktor', 'Lorem ipsum dolor sit amet', '26-03-2021');
let attPst = new AttachedPost('Dmitry', 'конструктор AttachedPost, который принимает параметры author, text, date.', '26-03-2021');

pst.edit('Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования');
// console.log(pst.author, pst.text, pst.date);

attPst.makeTextHighlighted();
console.log(attPst.author, attPst.text, attPst.date, attPst.highlighted);