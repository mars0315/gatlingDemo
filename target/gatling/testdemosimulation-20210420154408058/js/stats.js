var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "67"
    },
    "maxResponseTime": {
        "total": "218",
        "ok": "121",
        "ko": "218"
    },
    "meanResponseTime": {
        "total": "115",
        "ok": "83",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "19",
        "ko": "54"
    },
    "percentiles1": {
        "total": "109",
        "ok": "73",
        "ko": "116"
    },
    "percentiles2": {
        "total": "120",
        "ok": "95",
        "ko": "210"
    },
    "percentiles3": {
        "total": "215",
        "ok": "117",
        "ko": "217"
    },
    "percentiles4": {
        "total": "217",
        "ok": "120",
        "ko": "218"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 50
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
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "10",
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
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles3": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles4": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
        "ko": "-"
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
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "maxResponseTime": {
        "total": "218",
        "ok": "-",
        "ko": "218"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "-",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "-",
        "ko": "54"
    },
    "percentiles1": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles2": {
        "total": "210",
        "ok": "-",
        "ko": "210"
    },
    "percentiles3": {
        "total": "217",
        "ok": "-",
        "ko": "217"
    },
    "percentiles4": {
        "total": "218",
        "ok": "-",
        "ko": "218"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
