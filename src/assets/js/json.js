import co19A from '../json/co19A.json';
import co19B from '../json/co19B.json';
import co19C from '../json/co19C.json';
import gdaxi from '../json/gdaxi.json';
import dateFormat from 'dateformat';

// Case Data Merger
var co19 = [];
for (let i = 0; i < co19A.length; i++) {
    // Format date
    co19A[i].Date = dateFormat(co19A[i].Date, 'yyyy-mm-dd');
    var jsonObject = {
        Date: co19A[i].Date,
        Cases: co19A[i].Cases,
        Deaths: co19B[i].Cases,
        Recovered: co19C[i].Cases,
    };
    co19.push(jsonObject);
}

// Stock Data Merger
co19.sort((a, b) => new Date(a.Date) - new Date(b.Date));

var result = [];
co19.forEach(function (e) {
    if (!this[e.Date]) {
        this[e.Date] = { date: e.Date, price: null, price2: null };
        result.push(this[e.Date]);
    }
    this[e.Date] = Object.assign(this[e.Date], e);
});

console.log(JSON.stringify(result, 0, 4));

console.log(co19);

export default co19;
