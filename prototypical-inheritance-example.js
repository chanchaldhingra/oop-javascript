
function HtmlElement() {
    this.click = function() {
        console.log("click");
    }
}

HtmlElement.prototype.focus = function() {
    console.log("focus");
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        let renderStr = "";
        for(let item of items) {
            renderStr += "<option>" + item + "</option>\n";
        }
        return "<select>\n" + renderStr + "</select>";
    }
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgElement(src = '') {
    this.src = src;
    this.render = function() {
        return "<img src= \"" + this.src + " \">";
    }
}

HtmlImgElement.prototype = new HtmlElement;
HtmlImgElement.prototype.constructor = HtmlImgElement;

const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImgElement('https://')];

for(const element of elements) {
    console.log(element.render());
}



