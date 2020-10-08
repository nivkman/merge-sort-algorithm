var {performance} = require('perf_hooks');

const data = [
    {name:"Apple", score:95},
    {name:"Microsoft", score:10},
    {name:"Amazon", score:25},
    {name:"Google", score:35},
    {name:"Facebook", score:200},
    {name:"Instagram", score:135},
    {name:"Twitter", score:0},
    {name:"Reddit", score:5},
    {name:"Wikipedia", score:22},
    {name:"Whatsapp", score:33},
    {name:"Salesforce", score:44},
    {name:"Youtube", score:11},
    {name:"Snapchat", score:345},
    {name:"Samsung", score:234},
    {name:"LG", score:123},
    {name:"Netflix", score:09},
    {name:"Github", score:75},
    {name:"Linkedin", score:2256},
    {name:"Wechat", score:33},
    {name:"Stripe", score:444},
    {name:"Skipe", score:121},
    {name:"Zoom", score:2020},
    {name:"Fiverr", score:15635},
    {name:"Wix", score:17},
    {name:"Wordpress", score:70},
    {name:"Telegram", score:58},
];

const mergeSort = (function () {
    function merger(array, start, end) {
        if (Math.abs(end - start) <= 1) {
            return [];
        }
        var middle = Math.ceil((start + end) / 2);

        merger(array, start, middle);
        merger(array, middle, end);

        return merge(array, start, middle, end);
    }

    function merge(array, start, middle, end) {
        var left = [],
            right = [],
            leftSize = middle - start,
            rightSize = end - middle,
            maxSize = Math.max(leftSize, rightSize),
            size = end - start,
            i;

        for (i = 0; i < maxSize; i += 1) {
            if (i < leftSize) {
                left[i] = array[start + i];
            }
            if (i < rightSize) {
                right[i] = array[middle + i];
            }
        }
        i = 0;
        while (i < size) {
            if (left.length && right.length) {
                if (left[0].score <= right[0].score) {
                    array[start + i] = right.shift();
                } else {
                    array[start + i] = left.shift();
                }
            } else if (left.length) {
                array[start + i] = left.shift();
            } else {
                array[start + i] = right.shift();
            }
            i += 1;
        }
        return array;
    }
    return function (array) {
        return merger(array, 0, array.length);
    }

}());
var data1 = mergeSort(data);
var t0 = performance.now();
data1.forEach((x)=>{
    console.log(x.name +'-'+x.score);
})
var t1 = performance.now();
console.log("\nSort took " + (t1 - t0) + " milliseconds.");
