function testWidgets() {
    let data = {
        "data": [
            {
                "Owner": {
                    "name": "zoho",
                    "id": "4918916000000319001",
                    "email": "zohotester48@gmail.com"
                },
                "Company": "Rangoni Of Florence",
                "Email": "christopher-maclead@gmail.com",
                "$currency_symbol": "$",
                "$upcoming_activity": null,
                "Sales_12_Month": 5000000,
                "Last_Activity_Time": "2021-06-27T20:29:12-07:00",
                "Industry": "Service Provider",
                "$state": "save",
                "Unsubscribed_Mode": null,
                "$converted": false,
                "$process_flow": false,
                "Street": "37275 St Rt 17m M",
                "Zip_Code": "11953",
                "id": "4918916000000329425",
                "$approved": true,
                "$approval": {
                    "delegate": false,
                    "approve": false,
                    "reject": false,
                    "resubmit": false
                },
                "Created_Time": "2021-06-27T18:48:29-07:00",
                "$editable": true,
                "City": "Middle Island",
                "No_of_Employees": null,
                "State": "NY",
                "$status": "cmv_53-1",
                "Country": "United States",
                "Created_By": {
                    "name": "zoho",
                    "id": "4918916000000319001",
                    "email": "zohotester48@gmail.com"
                },
                "Annual_Revenue": 850000,
                "Secondary_Email": null,
                "Description": null,
                "$photo_id": "jmp9jc9817a8fcd8e4567865e7df436ee86df",
                "Rating": null,
                "$review_process": {
                    "approve": false,
                    "reject": false,
                    "resubmit": false
                },
                "Website": "http://www.rangoniofflorence.com",
                "Twitter": "christophermaclead_sample",
                "Salutation": "Mr.",
                "First_Name": "Christopher",
                "Full_Name": "Mr. Christopher Maclead (Sample)",
                "Lead_Status": "Lost Lead",
                "Record_Image": "1f0d19ba0dc83064aa89b3dabbd400d2fd93f3ae9a87cc1489d05f85d0d76bdc9b9a2d41f4b7418ebe5385691f716e41a2563f06742f4f71706603e93a7f86f9eead8e77c7cd97a3abda4aab9d7b7ed1",
                "Modified_By": {
                    "name": "zoho",
                    "id": "4918916000000319001",
                    "email": "zohotester48@gmail.com"
                },
                "$review": null,
                "Sales_1_Month": 89999000,
                "Skype_ID": "christopher-maclead",
                "Phone": "555-555-5555",
                "Email_Opt_Out": false,
                "Designation": "VP Accounting",
                "Modified_Time": "2021-06-27T20:29:12-07:00",
                "$converted_detail": {},
                "Unsubscribed_Time": null,
                "Mobile": "555-555-5555",
                "$orchestration": false,
                "Sales_6_Month": 67888000,
                "Last_Name": "Maclead (Sample)",
                "Layout": {
                    "name": "Standard",
                    "id": "4918916000000091055"
                },
                "$in_merge": false,
                "Lead_Source": "Cold Call",
                "Sales_3_Month": 890000,
                "Tag": [],
                "Fax": null,
                "$approval_state": "approved",
                "Sales_24_Month": 40000000
            }
        ],
        "$responseHeaders": {
            "x-ratelimit-remaining": "98",
            "x-ratelimit-limit": "100",
            "x-ratelimit-reset": "1625141989076"
        }
    };
    let arrayFilterRecord = [];

    for (let i in data.data) {
        let recordData = data.data[i];
        let tempRecord = {
            Sales_1_Month: recordData.Sales_1_Month,
            Sales_3_Month: recordData.Sales_3_Month,
            Sales_6_Month: recordData.Sales_6_Month,
            Sales_12_Month: recordData.Sales_12_Month,
            Sales_24_Month: recordData.Sales_24_Month
        }
        arrayFilterRecord.push(tempRecord);
    }
    return arrayFilterRecord;

}


function initializeWidget() {
	/*
	 * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget 
	 */
	ZOHO.embeddedApp.on("PageLoad", function (data) {

		/*
		   * Verify if EntityInformation is Passed 
		   */
		var id = data.EntityId[0];
		ZOHO.CRM.API.getRecord({Entity:"Leads",RecordID:id})
		.then(function(data){
			// for (i in data){
			// 	var record = data[i].Sales_12_Month;
			// 	// var sales12 = record.Sales_12_Month;
			// }[]
			let arrayFilterRecord = [];

			for(let i in data.data){
				let recordData = data.data[i];
				let tempRecord = {
					Sales_1_Month: recordData.Sales_1_Month,
					Sales_3_Month: recordData.Sales_3_Month,
					Sales_6_Month: recordData.Sales_6_Month,
					Sales_12_Month: recordData.Sales_12_Month,
					Sales_24_Month: recordData.Sales_24_Month
				}
				arrayFilterRecord.push(tempRecord);
				
			}
			let value = [arrayFilterRecord[0].Sales_1_Month, arrayFilterRecord[0].Sales_3_Month, arrayFilterRecord[0].Sales_6_Month, arrayFilterRecord[0].Sales_12_Month, arrayFilterRecord[0].Sales_24_Month]
			// document.getElementById("test").innerHTML = JSON.stringify(arrayFilterRecord,null,2);
			var ctx = document.getElementById("recordInfo").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {

					labels: ['Sales Volume 1 Months', 'Sales Volume 3 Months', 'Sales Volume 6 Months', 'Sales Volume 9 Months', 'Sales Volume 12 Months'],
					datasets: [{
						label: '# of Votes',
						data: value,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});


		})
	})
	/*
	 * initialize the widget.
	 */
	ZOHO.embeddedApp.init();
}

// function testWidgets() {
//     let data = {
//         "data": [
//             {
//                 "Owner": {
//                     "name": "zoho",
//                     "id": "4918916000000319001",
//                     "email": "zohotester48@gmail.com"
//                 },
//                 "Company": "Rangoni Of Florence",
//                 "Email": "christopher-maclead@gmail.com",
//                 "$currency_symbol": "$",
//                 "$upcoming_activity": null,
//                 "Sales_12_Month": 5000000,
//                 "Last_Activity_Time": "2021-06-27T20:29:12-07:00",
//                 "Industry": "Service Provider",
//                 "$state": "save",
//                 "Unsubscribed_Mode": null,
//                 "$converted": false,
//                 "$process_flow": false,
//                 "Street": "37275 St Rt 17m M",
//                 "Zip_Code": "11953",
//                 "id": "4918916000000329425",
//                 "$approved": true,
//                 "$approval": {
//                     "delegate": false,
//                     "approve": false,
//                     "reject": false,
//                     "resubmit": false
//                 },
//                 "Created_Time": "2021-06-27T18:48:29-07:00",
//                 "$editable": true,
//                 "City": "Middle Island",
//                 "No_of_Employees": null,
//                 "State": "NY",
//                 "$status": "cmv_53-1",
//                 "Country": "United States",
//                 "Created_By": {
//                     "name": "zoho",
//                     "id": "4918916000000319001",
//                     "email": "zohotester48@gmail.com"
//                 },
//                 "Annual_Revenue": 850000,
//                 "Secondary_Email": null,
//                 "Description": null,
//                 "$photo_id": "jmp9jc9817a8fcd8e4567865e7df436ee86df",
//                 "Rating": null,
//                 "$review_process": {
//                     "approve": false,
//                     "reject": false,
//                     "resubmit": false
//                 },
//                 "Website": "http://www.rangoniofflorence.com",
//                 "Twitter": "christophermaclead_sample",
//                 "Salutation": "Mr.",
//                 "First_Name": "Christopher",
//                 "Full_Name": "Mr. Christopher Maclead (Sample)",
//                 "Lead_Status": "Lost Lead",
//                 "Record_Image": "1f0d19ba0dc83064aa89b3dabbd400d2fd93f3ae9a87cc1489d05f85d0d76bdc9b9a2d41f4b7418ebe5385691f716e41a2563f06742f4f71706603e93a7f86f9eead8e77c7cd97a3abda4aab9d7b7ed1",
//                 "Modified_By": {
//                     "name": "zoho",
//                     "id": "4918916000000319001",
//                     "email": "zohotester48@gmail.com"
//                 },
//                 "$review": null,
//                 "Sales_1_Month": 89999000,
//                 "Skype_ID": "christopher-maclead",
//                 "Phone": "555-555-5555",
//                 "Email_Opt_Out": false,
//                 "Designation": "VP Accounting",
//                 "Modified_Time": "2021-06-27T20:29:12-07:00",
//                 "$converted_detail": {},
//                 "Unsubscribed_Time": null,
//                 "Mobile": "555-555-5555",
//                 "$orchestration": false,
//                 "Sales_6_Month": 67888000,
//                 "Last_Name": "Maclead (Sample)",
//                 "Layout": {
//                     "name": "Standard",
//                     "id": "4918916000000091055"
//                 },
//                 "$in_merge": false,
//                 "Lead_Source": "Cold Call",
//                 "Sales_3_Month": 890000,
//                 "Tag": [],
//                 "Fax": null,
//                 "$approval_state": "approved",
//                 "Sales_24_Month": 40000000
//             }
//         ],
//         "$responseHeaders": {
//             "x-ratelimit-remaining": "98",
//             "x-ratelimit-limit": "100",
//             "x-ratelimit-reset": "1625141989076"
//         }
//     };
//     let arrayFilterRecord = [];

//     for (let i in data.data) {
//         let recordData = data.data[i];
//         let tempRecord = {
//             Sales_1_Month: recordData.Sales_1_Month,
//             Sales_3_Month: recordData.Sales_3_Month,
//             Sales_6_Month: recordData.Sales_6_Month,
//             Sales_12_Month: recordData.Sales_12_Month,
//             Sales_24_Month: recordData.Sales_24_Month
//         }
//         arrayFilterRecord.push(tempRecord);
//     }
// 	let value = [arrayFilterRecord[0].Sales_1_Month, arrayFilterRecord[0].Sales_3_Month, arrayFilterRecord[0].Sales_6_Month, arrayFilterRecord[0].Sales_12_Month, arrayFilterRecord[0].Sales_24_Month]
// 	var ctx = document.getElementById('recordInfo').getContext('2d');
// 	var myChart = new Chart(ctx, {
// 		type: 'bar',
// 		data: {

// 			labels: ['Sales Volume Current', 'Sales Volume 3 Months', 'Sales Volume 6 Months', 'Sales Volume 9 Months', 'Sales Volume 12 Months'],
// 			datasets: [{
// 				label: '# of Votes',
// 				data: value,
// 				backgroundColor: [
// 					'rgba(255, 99, 132, 0.2)',
// 					'rgba(54, 162, 235, 0.2)',
// 					'rgba(255, 206, 86, 0.2)',
// 					'rgba(75, 192, 192, 0.2)',
// 					'rgba(153, 102, 255, 0.2)',
// 					'rgba(255, 159, 64, 0.2)'
// 				],
// 				borderColor: [
// 					'rgba(255, 99, 132, 1)',
// 					'rgba(54, 162, 235, 1)',
// 					'rgba(255, 206, 86, 1)',
// 					'rgba(75, 192, 192, 1)',
// 					'rgba(153, 102, 255, 1)',
// 					'rgba(255, 159, 64, 1)'
// 				],
// 				borderWidth: 1
// 			}]
// 		},
// 		options: {
// 			scales: {
// 				y: {
// 					beginAtZero: true
// 				}
// 			}
// 		}
// 	});

// }




