function syncList() { };

    syncList.prototype.sync = function () {
        for (var i = 0, allar = arguments.length -1; i < allar; i++) {
            this._getId(arguments[i]).onchange = (function (o, id1, id2) {
                return function () {
                    o._sync(id1, id2);
                };
            })(this, arguments[i], arguments[i + 1]);
        };
        this._getId(arguments[0]).onchange();
    };

    syncList.prototype._sync = function (firstSelectId, secondSelectId) {
        var firstSelect = this._getId(firstSelectId);
        var secondSelect = this._getId(secondSelectId);

        secondSelect.length = 0;

        if (firstSelect.length > 0) {
            var optionData = this.dataList[firstSelect.options[firstSelect.selectedIndex == -1 ? 0 : firstSelect.selectedIndex].value];

            for (var key in optionData || null) {
                secondSelect.options[secondSelect.length] = new Option(optionData[key], key);
            };
            if (firstSelect.selectedIndex == -1) {
                setTimeout(function () {
                    firstSelect.options[0].selected = true;
                }, 1);
            };
            if (secondSelect.length > 0) {
                setTimeout(function () {
                    secondSelect.options[0].selected = true; 
                }, 1);
            };
        };
        secondSelect.onchange;
    };

    //setTimeout
    syncList.prototype.setTim = function () {

    };

    //print message in future
    syncList.prototype.print = function (id , ms) {
        return this._getId(id).innerHTML = ms;
    };

    //getIdElement
    syncList.prototype._getId = function (id) {
        return document.getElementById(id);
    };

//Tooltip

function Tooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.style.position = "absolute";
    this.tooltip.style.visibility = "hidden";
    this.tooltip.className = "tooltip";
}

Tooltip.prototype.show = function (text, x, y) {
    this.tooltip.innerHTML = text;
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";
    this.tooltip.style.visibility = "visible";

    if (this.tooltip.parentNode != document.body)
        document.body.appendChild(this.tooltip);
};

Tooltip.prototype.hide = function () {
    this.tooltip.style.visibility = "hidden";
};



