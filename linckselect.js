function syncList() {

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
            var sumbit = this._getId("submit");
            if (secondSelect.length > 0) {
                setTimeout(function () {
                    secondSelect.options[0].selected = true; 
                    sumbit.href = '#';
                    sumbit.removeAttribute('target');
                    sumbit.setAttribute("class", "noReady");
                }, 1);
            };
        };
        secondSelect.onchange;
    };

    //setTimeout
    syncList.prototype.setTim = function () {

    };

    //print message
    syncList.prototype.print = function (id , ms) {
        return this._getId(id).innerHTML = "URL : " + ms;
    };

    //getIdElement
    syncList.prototype._getId = function (id) {
        return document.getElementById(id);
    };
};

