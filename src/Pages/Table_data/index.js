import React, { useState, useEffect } from 'react';

const Table = ({ page, LocationName, searchValue, selectedCategory  }) => {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    console.log("LocationName", LocationName);

    console.log(`In table component for ${LocationName || 'All Stocks'} - Page: ${page}`);
    let initialPage = 1;
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const apiUrl = LocationName
                //     ? `http://localhost:5000/all?LocationName=${LocationName}`
                //     : `http://localhost:5000/all`;
                // let apiUrl = `http://localhost:5000/all`;
                let apiUrl = `https://my-server-u7xs.onrender.com/all`;

                if (LocationName) {
                    apiUrl += `?LocationName=${LocationName}`;
                }

                console.log("API URL:", apiUrl);

                const response = await fetch(apiUrl);
                const data = await response.json();

                console.log("Fetched Data:", data);

                // setAllData(data);
                setAllData(Array.isArray(data) ? data : []);

            } catch (err) {
                console.log('Error fetching data', err);
            }
        };
        fetchData();
    }, [LocationName]);

    useEffect(() => {
        // Ensure allData is not null or undefined before filtering
        if (allData) {
            // Apply filtering logic on the entire dataset
            const filteredData = allData.filter(item => {
                const categoryValue = item[selectedCategory];

                if (selectedCategory === 'Quantity' && typeof categoryValue === 'number') {
                    // Convert quantity to string before filtering
                    return categoryValue.toString().toLowerCase().includes(searchValue.toLowerCase());
                  }
                return (
                    categoryValue &&
                    categoryValue.toLowerCase().includes(searchValue.toLowerCase())
                );
            });

            // console.log("Filtered Data:", filteredData);

            setFilteredData(filteredData);
        }
    }, [allData, searchValue, selectedCategory]);

    const renderValue = (value) => {
        return value !== null && value !== undefined ? value : "null";
    };

    // Apply pagination logic to the filtered data
    const itemsPerPage = 30;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const paginatedData = filteredData.slice(startIndex, endIndex);
    const paginatedData = (filteredData.length > 0 ? filteredData : allData).slice(startIndex, endIndex);
    console.log("emply paginatedData", paginatedData)

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">MSKU</th>
                            <th scope="col">Item_name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Location</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Product_Category</th>
                            <th scope="col">Category</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Item_Amount</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Available_Qty</th>
                            <th scope="col">Blocked_Qty</th>
                            <th scope="col">Sheet_name</th>
                            <th scope="col">Date_modified</th>
                        </tr>
                    </thead>
                    <tbody id="allStocks">
                        {paginatedData.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.MSKU}</td>
                                <td>{e.Item_name}</td>
                                <td>{e.Quantity}</td>
                                <td>{e.LocationName}</td>
                                <td>{e.Brand}</td>
                                <td>{e.Product_Category}</td>
                                <td>{renderValue(e.Category)}</td>
                                <td>{e.Purchase_amt}</td>
                                <td>{e.Item_Amount}</td>
                                <td>{e.Batch}</td>
                                {/* <td>{e.Available_Qty}</td> */}
                                <td>{renderValue(e.Available_Qty)}</td>
                                <td>{renderValue(e.Blocked_Qty)}</td>
                                {/* <td>{e.Blocked_Qty}</td> */}
                                <td>{e.Sheet_name}</td>
                                <td>{e.Date_modified}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
