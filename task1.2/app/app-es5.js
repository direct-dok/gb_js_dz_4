'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(editText) {
    this.text = editText;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}


// let pst = new Post('Viktor', 'Lorem ipsum dolor sit amet', '26-03-2021');
let attach = new AttachedPost('Viktor', 'Lorem ipsum dolor sit amet', '26-03-2021');

attach.edit('Сделайте в стиле es5, а затем в стиле es6 ');

console.log(attach.author, attach.text, attach.date);

attach.makeTextHighlighted();
console.log(attach.highlighted);