package io.gatling.highcharts

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestDemoSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://www.decathlon.com.cn")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("zh-CN,zh;q=0.9")
		.contentTypeHeader("application/json")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36")

	val headers_0 = Map(
		"Origin" -> "https://www.decathlon.com.cn",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"""",
		"sec-ch-ua-mobile" -> "?0")


	val scn = scenario("TestDemoSimulation")
		.exec(http("request_0")
			.post("/zh/ajax/rest/model/atg/userprofiling/ProfileActor/isIdentifierExists")
			.headers(headers_0)
			.body(RawFileBody("bodies/io/gatling/highcharts/0000_request.json")))

	setUp(scn.inject(atOnceUsers(10))).protocols(httpProtocol)
}