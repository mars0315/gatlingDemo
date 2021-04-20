var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19",
        "ok": "9",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "177",
        "ko": "62"
    },
    "maxResponseTime": {
        "total": "432",
        "ok": "421",
        "ko": "432"
    },
    "meanResponseTime": {
        "total": "201",
        "ok": "295",
        "ko": "116"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "87",
        "ko": "108"
    },
    "percentiles1": {
        "total": "177",
        "ok": "300",
        "ko": "69"
    },
    "percentiles2": {
        "total": "330",
        "ok": "368",
        "ko": "115"
    },
    "percentiles3": {
        "total": "422",
        "ok": "405",
        "ko": "293"
    },
    "percentiles4": {
        "total": "430",
        "ok": "418",
        "ko": "404"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19",
        "ok": "9",
        "ko": "10"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "10",
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "432"
    },
    "maxResponseTime": {
        "total": "432",
        "ok": "421",
        "ko": "432"
    },
    "meanResponseTime": {
        "total": "309",
        "ok": "295",
        "ko": "432"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "87",
        "ko": "0"
    },
    "percentiles1": {
        "total": "330",
        "ok": "300",
        "ko": "432"
    },
    "percentiles2": {
        "total": "378",
        "ok": "368",
        "ko": "432"
    },
    "percentiles3": {
        "total": "427",
        "ok": "405",
        "ko": "432"
    },
    "percentiles4": {
        "total": "431",
        "ok": "418",
        "ko": "432"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9",
        "ko": "1"
    }
}
    },"req_request-0-redir-e6ac5": {
        type: "REQUEST",
        name: "request_0 Redirect 1",
path: "request_0 Redirect 1",
pathFormatted: "req_request-0-redir-e6ac5",
stats: {
    "name": "request_0 Redirect 1",
    "numberOfRequests": {
        "total": "9",
        "ok": "0",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "maxResponseTime": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "-",
        "ko": "81"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles1": {
        "total": "66",
        "ok": "-",
        "ko": "66"
    },
    "percentiles2": {
        "total": "88",
        "ok": "-",
        "ko": "88"
    },
    "percentiles3": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "percentiles4": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
