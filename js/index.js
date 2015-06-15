webpackJsonp([1], [function (t, e, n) {
    var i = n(1), a = n(2);
    window.addEventListener("load", function () {
        var t = new i({
            onSelect: function (t) {
                var e = a(t);
                window.location.href += "/../diary.html?path=" + e.format("YYYY/MM/YYYY-MM-DD")
                + "&title=" + e.format("Do.MMMM")
                + "&year=" + e.format("YYYY");
            },
            i18n: {
                previousMonth: "&lt;&lt;",
                nextMonth: "&gt;&gt;",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            minDate: new Date("2015-06-01"),
            maxDate: new Date
        });
        document.getElementById("calendar").appendChild(t.el);
        document.querySelector(".pika-prev").textContent = "<<";
        document.querySelector(".pika-next").textContent = ">>";
    })
}]);