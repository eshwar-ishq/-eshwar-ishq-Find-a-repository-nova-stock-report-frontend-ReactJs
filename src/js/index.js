
let searchBar = document.getElementById('myInput');

const prevButton = document.getElementById('prev_Button')
const nextButton = document.getElementById('next_Button')


const fetchDataAndUpdateTable = (url, tableId, currentPage, itemsPerPage) => {
    fetch(`${url}?page=${currentPage}&limit=${itemsPerPage}`)
        .then(response => response.json())
        .then(completeData => {
            let storedData = '';
            completeData.forEach(e => {
                storedData += `<tr key=${e.id}>
                <td>${e.id}</td>
                <td>${e.MSKU}</td>
                <td>${e.Item_name}</td>
                <td>${e.Quantity}</td>
                <td>${e.LocationName}</td>
                <td>${e.Brand}</td>
                <td>${e.Product_Category}</td>
                <td>${e.Category}</td>
                <td>${e.Purchase_amt}</td>
                <td>${e.Item_Amount}</td>
                <td>${e.Batch}</td>
                <td>${e.Available_Qty}</td>
                <td>${e.Blocked_Qty}</td>
                <td>${e.Sheet_name}</td>
                <td>${e.Date_modified}</td>
            </tr>`;
            });
            document.getElementById(tableId).innerHTML = storedData;
        })
        .catch(error => console.log('Error fetching data:', error));
};

const updatePageContent = (currentPage, itemsPerPage) => {
    const pages = ['Belmont', 'Richmond', 'Hyderabad', 'Haridwar', 'all'];
    const baseUrl = 'http://localhost:5000/combinedstocks/';

    pages.forEach(page => {
        const url = page === 'all' ? 'http://localhost:5000/all' : `${baseUrl}${page}`;
        const tableId = page === 'all' ? 'allStocks' : page;
        fetchDataAndUpdateTable(url, tableId, currentPage, itemsPerPage);
    });
}

let currentPage = 1;
const itemsPerPage = 30;
updatePageContent(currentPage, itemsPerPage);


// const updatePageContent = () => {
// 	// fetch(`https://my-server-u7xs.onrender.com/combinedstocks/Belmont?page=${currentPage}&limit=30`)
// 	// fetch(`http://localhost:5000/pmsstock/19?page=${currentPage}&limit=20`)
// 	fetch(`http://localhost:5000/combinedstocks/Belmont?page=${currentPage}&limit=30`)
// 		.then((respond) => {
// 			console.log(respond.status)
// 			return respond.json();
// 		}).then((completeData) => {
// 			let storedData = '', data = '';
// 			data = completeData;
// 			data.map((e, index) => {
// 				storedData += `<tr key=${e.ID}}>
// 							<td>${e.id}</td>
// 							<td>${e.MSKU}</td>
// 							<td>${e.Item_name}</td>
// 							<td>${e.Quantity}</td>
// 							<td>${e.LocationName}</td>
// 							<td>${e.Brand}</td>
// 							<td>${e.Product_Category}</td>
// 							<td>${e.Category}</td>
// 							<td>${e.Purchase_amt}</td>
// 							<td>${e.Item_Amount}</td>
// 							<td>${e.Batch}</td>
// 							<td>${e.Available_Qty}</td>
// 							<td>${e.Blocked_Qty}</td>
// 							<td>${e.Sheet_name}</td>
// 							<td>${e.Date_modified}</td>
// 						</tr>`
// 			})
// 			document.getElementById("Belmont").innerHTML = storedData
// 		})

// 	// fetch(`https://my-server-u7xs.onrender.com/combinedstocks/Richmond?page=${currentPage}&limit=30`)
// 	// fetch(`http://localhost:5000/pmsstock/20?page=${currentPage}&limit=20`)
// 	fetch(`http://localhost:5000/combinedstocks/Richmond?page=${currentPage}&limit=30`)
// 		.then((respond) => {
// 			console.log(respond.status)
// 			return respond.json();
// 		}).then((completeData) => {
// 			let storedData = '', data = '';
// 			data = completeData;
// 			data.map((e, key) => {
// 				storedData += `<tr key=${e.id}>
// 							<td>${e.id}</td>
// 							<td>${e.MSKU}</td>
// 							<td>${e.Item_name}</td>
// 							<td>${e.Quantity}</td>
// 							<td>${e.LocationName}</td>
// 							<td>${e.Brand}</td>
// 							<td>${e.Product_Category}</td>
// 							<td>${e.Category}</td>
// 							<td>${e.Purchase_amt}</td>
// 							<td>${e.Item_Amount}</td>
// 							<td>${e.Batch}</td>
// 							<td>${e.Available_Qty}</td>
// 							<td>${e.Blocked_Qty}</td>
// 							<td>${e.Sheet_name}</td>
// 							<td>${e.Date_modified}</td>
// 						</tr>`
// 			})
// 			document.getElementById('Richmond').innerHTML = storedData;
// 		})

// 	// fetch(`https://my-server-u7xs.onrender.com/combinedstocks/Hyderabad?page=${currentPage}&limit=30`)
// 	// fetch(`http://localhost:5000/pmsstock/1?page=${currentPage}&limit=20`)
// 	fetch(`http://localhost:5000/combinedstocks/Hyderabad?page=${currentPage}&limit=30`)
// 		.then((respond) => {
// 			console.log(respond.status)
// 			return respond.json();
// 		}).then((completeData) => {
// 			let storedData = '', data = '';
// 			data = completeData;
// 			data.map((e, key) => {
// 				storedData += `<tr key=${e.id}>
// 							<td>${e.id}</td>
// 							<td>${e.MSKU}</td>
// 							<td>${e.Item_name}</td>
// 							<td>${e.Quantity}</td>
// 							<td>${e.LocationName}</td>
// 							<td>${e.Brand}</td>
// 							<td>${e.Product_Category}</td>
// 							<td>${e.Category}</td>
// 							<td>${e.Purchase_amt}</td>
// 							<td>${e.Item_Amount}</td>
// 							<td>${e.Batch}</td>
// 							<td>${e.Available_Qty}</td>
// 							<td>${e.Blocked_Qty}</td>
// 							<td>${e.Sheet_name}</td>
// 							<td>${e.Date_modified}</td>
// 						</tr>`
// 			})
// 			document.getElementById('Hyderabad').innerHTML = storedData;
// 		})

// 	// fetch(`https://my-server-u7xs.onrender.com/combinedstocks/Haridwar?page=${currentPage}&limit=30`)
// 	// fetch(`http://localhost:5000/pmsstock/17?page=${currentPage}&limit=20`)
// 	fetch(`http://localhost:5000/combinedstocks/Haridwar?page=${currentPage}&limit=30`)
// 		.then((respond) => {
// 			console.log(respond.status)
// 			return respond.json();
// 		}).then((completeData) => {
// 			let storedData = '', data = '';
// 			data = completeData;
// 			data.map((e, key) => {
// 				storedData += `<tr key=${e.id}>
// 							<td>${e.id}</td>
// 							<td>${e.MSKU}</td>
// 							<td>${e.Item_name}</td>
// 							<td>${e.Quantity}</td>
// 							<td>${e.LocationName}</td>
// 							<td>${e.Brand}</td>
// 							<td>${e.Product_Category}</td>
// 							<td>${e.Category}</td>
// 							<td>${e.Purchase_amt}</td>
// 							<td>${e.Item_Amount}</td>
// 							<td>${e.Batch}</td>
// 							<td>${e.Available_Qty}</td>
// 							<td>${e.Blocked_Qty}</td>
// 							<td>${e.Sheet_name}</td>
// 							<td>${e.Date_modified}</td>
// 						</tr>`
// 			})
// 			document.getElementById('Haridwar').innerHTML = storedData;
// 		})

// 		fetch(`http://localhost:5000/all`)
// 		.then((respond) => {
// 			console.log(respond.status)
// 			return respond.json();
// 		}).then((completeData) => {
// 			let storedData = '', data = '';
// 			data = completeData;
// 			data.map((e, key) => {
// 				storedData += `<tr key=${e.id}>
// 							<td>${e.id}</td>
// 							<td>${e.MSKU}</td>
// 							<td>${e.Item_name}</td>
// 							<td>${e.Quantity}</td>
// 							<td>${e.LocationName}</td>
// 							<td>${e.Brand}</td>
// 							<td>${e.Product_Category}</td>
// 							<td>${e.Category}</td>
// 							<td>${e.Purchase_amt}</td>
// 							<td>${e.Item_Amount}</td>
// 							<td>${e.Batch}</td>
// 							<td>${e.Available_Qty}</td>
// 							<td>${e.Blocked_Qty}</td>
// 							<td>${e.Sheet_name}</td>
// 							<td>${e.Date_modified}</td>
// 						</tr>`
// 			})
// 			document.getElementById('allStocks').innerHTML = storedData;
// 		})
// }

// updatePageContent();

// const searchBarFunction = () => {
// 	let allData = [];
// 	const itemsPerPage = 40;
// 	let currentPage = 1;

// 	// Fetch All data initially
// 	fetch('http://localhost:5000/allpmcstocks')
// 	// fetch('https://my-server-u7xs.onrender.com/allpmcstocks')
// 	// fetch(`https://my-server-u7xs.onrender.com/allpmcstocks`)
// 		.then((response) => response.json())
// 		.then((response) => {
// 			allData = response;

// 			// Attach input event listener after all data has been fetched
// 			document.getElementById('myInput').addEventListener('input', function () {
// 				let searchValue = this.value.toLowerCase();

// 				// Get the selected category
// 				const selectedCategory = document.getElementById('category').value;

// 				let allFilteredData = allData.filter((e) => {
// 					let fieldvalue = e[selectedCategory]

// 					if(fieldvalue !== undefined && (typeof fieldvalue === "string" || typeof fieldvalue === "number" )) {
// 						// const fieldValeString = typeof fieldvalue === 'string' ? fieldvalue.toLowerCase() : String(fieldvalue);
// 						// return fieldValeString === searchValue;
// 						return String(fieldvalue).toLowerCase().includes(searchValue);	
// 					}

// 					return false;
// 				})

// 				// // Filter allData based on the selectedCategory and searchValue
// 				// let allFilteredData = allData.filter((e) => {
// 				// 	return e[selectedCategory] && e[selectedCategory].toLowerCase().includes(searchValue) 
// 				// });

// 				// Update all tables with the filtered and paginated data
// 				// updateTables(getPageData(allFilteredData, currentPage, itemsPerPage));
// 				updateTables(allFilteredData);
// 			});
// 		})
// 		.catch((err) => {
// 			console.log('Error fetching data:', err);
// 		});
// };

// const updateTables = (data) => {
// 	const tableIds = ['belmont_table_body', 'richmond_table_body', 'hariwdar_table_body', 'hyderabad_table_body'];

// 	tableIds.forEach((tableId) => {
// 		let storedFullData = '';
// 		data.forEach((e) => {
// 			storedFullData += `<tr key=${e.id}>
// 									<td>${e.id}</td>
// 									<td>${e.MSKU}</td>
// 									<td>${e.Item_name}</td>
// 									<td>${e.Quantity}</td>
// 									<td>${e.LocationName}</td>
// 									<td>${e.Brand}</td>
// 									<td>${e.Product_Category}</td>
// 									<td>${e.Category}</td>
// 									<td>${e.Purchase_amt}</td>
// 									<td>${e.Item_Amount}</td>
// 									<td>${e.Batch}</td>
// 									<td>${e.Date_modified}</td>
// 									<td>${e.Available_Qty}</td>
// 									<td>${e.Blocked_Qty}</td>
// 									<td>${e.Sheet_name}</td>
// 						  		</tr>`;
// 		});

// 		const tableElement = document.getElementById(tableId);
// 		console.log(tableElement);

// 		if (tableElement) {
// 			tableElement.innerHTML = storedFullData;
// 			console.log(tableElement.innerHTML);
// 		} else {
// 			console.error("Table element not found with ID:", tableId);
// 		}
// 	});
// };

// // Function to get a specific page of data
// const getPageData = (data, currentPage, itemsPerPage) => {
// 	const startIndex = (currentPage - 1) * itemsPerPage;
// 	const endIndex = startIndex + itemsPerPage;
// 	return data.slice(startIndex, endIndex);
// };

// // Initial function call
// searchBarFunction();

//==============================================================================

// const searchBarFunction = (keys,tableId) => {
//     let tableData = [];
//     // const itemsPerPage = 40;
//     // let currentPage = 1;

//     // Fetch data for the specific table
// 	fetch(`http://localhost:5000/allpmcstocks/${keys}`)
// 	// fetch(`https://my-server-u7xs.onrender.com/allpmcstocks/${keys}`)
//         .then((response) => response.json())
//         .then((response) => {
//             tableData = response;
// 			console.log(tableData)

//             // Attach input event listener after the data has been fetched
//             document.getElementById('myInput').addEventListener('input', function () {
//                 let searchValue = this.value.toLowerCase();

//                 // Get the selected category
//                 const selectedCategory = document.getElementById('category').value;

//                 let tableFilteredData = tableData.filter((e) => {
//                     let fieldValue = e[selectedCategory];

//                     if (fieldValue !== undefined && (typeof fieldValue === "string" || typeof fieldValue === "number")) {
//                         return String(fieldValue).toLowerCase().includes(searchValue);
//                     }

//                     return false;
//                 });

//                 // Update the specific table with the filtered and paginated data
//                 updateTable(tableId, tableFilteredData);
//             });
//         })
//         .catch((err) => {
//             console.log('Error fetching data:', err);
//         });
// };

// const updateTable = (tableId, data) => {
//     let storedFullData = '';
//     data.forEach((e) => {
//         storedFullData += `<tr key=${e.id}>
//                                 <td>${e.id}</td>
//                                 <td>${e.MSKU}</td>
//                                 <td>${e.Item_name}</td>
//                                 <td>${e.Quantity}</td>
//                                 <td>${e.LocationName}</td>
//                                 <td>${e.Brand}</td>
//                                 <td>${e.Product_Category}</td>
//                                 <td>${e.Category}</td>
//                                 <td>${e.Purchase_amt}</td>
//                                 <td>${e.Item_Amount}</td>
//                                 <td>${e.Batch}</td>
//                                 <td>${e.Available_Qty}</td>
//                                 <td>${e.Blocked_Qty}</td>
//                                 <td>${e.Sheet_name}</td>
//                                 <td>${e.Date_modified}</td>
//                             </tr>`;
//     });

//     const tableElement = document.getElementById(tableId);
//     console.log(tableElement);

//     if (tableElement) {
//         tableElement.innerHTML = storedFullData;
//         console.log(tableElement.innerHTML);
//     } else {
//         console.error("Table element not found with ID:", tableId);
//     }
// };

// // Call the function to initiate the process for each table
// searchBarFunction('Belmont','belmont_table_body');
// searchBarFunction('Richmond','richmond_table_body');
// searchBarFunction('Hyderabad','hyderabad_table_body');
// searchBarFunction('Haridwar','hariwdar_table_body');

//=================================================================

const searchBarFunction = (tableId) => {
    let tableData = [];
    const itemsPerPage = 40;
    let currentPage = 1;

    // Fetch data for the specific table if it's not "all_stocks"
    if (tableId !== 'allStocks') {
        // fetch(`http://localhost:5000/combinedstocks/${tableId}?page=${currentPage}&limit=30`)
        fetch(`http://localhost:5000/allpmcstocks/${tableId}`)
            .then((response) => response.json())
            .then((response) => {
                tableData = response;
                console.log(tableData);

                // Attach input event listener after the data has been fetched
                document.getElementById('myInput').addEventListener('input', function () {
                    let searchValue = this.value.toLowerCase();

                    // Get the selected category
                    const selectedCategory = document.getElementById('category').value;

                    let tableFilteredData = tableData.filter((e) => {
                        let fieldValue = e[selectedCategory];

                        if (fieldValue !== undefined && (typeof fieldValue === "string" || typeof fieldValue === "number")) {
                            return String(fieldValue).toLowerCase().includes(searchValue);
                        }

                        return false;
                    });

                    // Update the specific table with the filtered and paginated data
                    updateTable(tableId, tableFilteredData);
                });
            })
            .catch((err) => {
                console.log('Error fetching data:', err);
            });
    } else {
        // Fetch all data initially if it's the "all_stocks" page
        fetch(`http://localhost:5000/all`)
            .then((response) => response.json())
            .then((response) => {
                tableData = response;
                console.log(tableData)

                // Attach input event listener after all data has been fetched
                document.getElementById('myInput').addEventListener('input', function () {
                    let searchValue = this.value.toLowerCase();

                    // Get the selected category
                    const selectedCategory = document.getElementById('category').value;

                    // Filter allData based on the selectedCategory and searchValue
                    // let tableFilteredData = tableData.filter((e) => {
                    //     return e[selectedCategory] && e[selectedCategory].toString().toLowerCase().includes(searchValue);
                    // });

                    let tableFilteredData = tableData.filter((e) => {
                        let fieldValue = e[selectedCategory];

                        if (fieldValue !== undefined && (typeof fieldValue === "string" || typeof fieldValue === "number")) {
                            return String(fieldValue).toLowerCase().includes(searchValue);
                        }

                        return false;
                    });

                    // Update the specific table with the filtered and paginated data
                    updateTable(tableId, tableFilteredData);
                });
            })
            .catch((err) => {
                console.log('Error fetching data:', err);
            });
    }
};

const updateTable = (tableId, data) => {
    let storedFullData = '';
    data.forEach((e) => {
        storedFullData += `<tr key=${e.id}>
                                <td>${e.id}</td>
                                <td>${e.MSKU}</td>
                                <td>${e.Item_name}</td>
                                <td>${e.Quantity}</td>
                                <td>${e.LocationName}</td>
                                <td>${e.Brand}</td>
                                <td>${e.Product_Category}</td>
                                <td>${e.Category}</td>
                                <td>${e.Purchase_amt}</td>
                                <td>${e.Item_Amount}</td>
                                <td>${e.Batch}</td>
                                <td>${e.Available_Qty}</td>
                                <td>${e.Blocked_Qty}</td>
                                <td>${e.Sheet_name}</td>
                                <td>${e.Date_modified}</td>
                            </tr>`;
    });

    const tableElement = document.getElementById(tableId);
    console.log(tableElement);

    if (tableElement) {
        tableElement.innerHTML = storedFullData;
        console.log(tableElement.innerHTML);
    } else {
        console.error("Table element not found with ID:", tableId);
    }
};

// Call the function to initiate the process for each table
searchBarFunction('allStocks');
searchBarFunction('Belmont');
searchBarFunction('Richmond');
searchBarFunction('Hyderabad');
searchBarFunction('Haridwar');



const prevButtonFun = () => {
    currentPage--;
    updatePageContent(currentPage, itemsPerPage);
}

const nextButtonFun = () => {
    currentPage++;
    updatePageContent(currentPage, itemsPerPage);
}






