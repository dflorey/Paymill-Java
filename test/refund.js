{
	"event" : {
		"event_type" : "refund.created",
		"event_resource" : {
			"id" : "refund_22c121d3d7ceb4336929",
			"amount" : "6600",
			"status" : "open",
			"description" : null,
			"livemode" : false,
			"created_at" : 1366719340,
			"updated_at" : 1366719340,
			"response_code" : 10001,
			"transaction" : {
				"id" : "tran_59bbbad8f7b3ca6e617ddf9630d4",
				"amount" : "6600",
				"origin_amount" : 6600,
				"status" : "closed",
				"description" : "Test",
				"livemode" : false,
				"refunds" : null,
				"currency" : "EUR",
				"created_at" : 1366719332,
				"updated_at" : 1366719332,
				"response_code" : 20000,
				"invoices" : [],
				"payment" : {
					"id" : "pay_243cd933e7e3a4c5f9b8c135c49a",
					"type" : "creditcard",
					"client" : "client_4c3c0ca620164f5e5e7d",
					"card_type" : "visa",
					"country" : null,
					"expire_month" : 2,
					"expire_year" : 2014,
					"card_holder" : null,
					"last4" : "1111",
					"created_at" : 1366719311,
					"updated_at" : 1366719312
				},
				"client" : {
					"id" : "client_4c3c0ca620164f5e5e7d",
					"email" : "daniel.florey@gmail.com",
					"description" : "name=Oliver Zeigermann;address=Gau\u00dfstra\u00dfe 180,22765 Hamburg;language=de;country=DE;vat=19",
					"created_at" : 1366719298,
					"updated_at" : 1366719298,
					"payment" : [ "pay_243cd933e7e3a4c5f9b8c135c49a" ],
					"subscription" : null
				},
				"preauthorization" : null
			}
		},
		"created_at" : 1366719340
	}
}