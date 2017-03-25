function syncList() {

    this.prototype.sync = function () {
        for (var i = 0, allar = arguments.length -1; i < allar; i++) {
            document.getElementById(arguments[i]).onchange = (function (o, id1, id2) {
                return function () {
                    o._sync(id1, id2);
                };
            })(this, arguments[i], arguments[i + 1]);
        };
        document.getElementById(arguments[0]).onchange();
    };

    this.prototype._sync = function (firstSelectId, secondSelectId) {
        var firstSelect = document.getElementById(firstSelectId);
        var secondSelect = document.getElementById(secondSelectId);

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
    syncList.prototype._getId = function (id) {
        return document.getElementById(id);
    };
};

