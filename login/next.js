
    const mainApi = "https://dummyjson.com/users";
    let filteredData = [];

    // Fetch the data initially
    fetch(mainApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not fetch data");
        }
      })
      .then((data) => {
        // Save the data for filtering
        filteredData = data.users.slice(0, 10);
        displayData(data);
        handleInput(data);
      })
      .catch((error) => {
        console.error("FETCH ERROR", error);
      });

    // Add an event listener to the input for 'input' event
    const searchInput = document.getElementById('filter');
    searchInput.addEventListener('input', handleInput);

    function handleInput() {
      const searchTerm = searchInput.value.trim().toLowerCase();

      // Filter the data based on the input
      const filteredResult = filteredData.filter((item) => {
        return (
          item.company.department.toLowerCase().includes(searchTerm) ||
          item.firstName.toLowerCase().includes(searchTerm) ||
          item.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.company.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      // Display the filtered results
      displayData(filteredResult);
    }

    function displayData(data) {
      const tableContainer = document.querySelector("#tableContainer");

      tableContainer.innerHTML = '';
      const table = document.createElement("table");
      table.innerHTML = `
      <tr>
        <th>Department Name</th>
        <th>Doctor</th>
        <th>Gender</th>
        <th>Head of Department</th>
        <th>Action</th>
        <th style="text-align:center;">Status</th>
      </tr>
      `;

      data.forEach((dataItem) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${dataItem.company.department}</td>
          <td><img src="${dataItem.image}"> ${dataItem.firstName}</td>
          <td>${dataItem.gender}</td>
          <td>${dataItem.company.title}</td>
          <td>
            <img src="../asset/pen.png" >
            <img src="../asset/profile.png" >
            <img src="../asset/delete.png" >
          </td>
          <td><button class="active">Active</button></td>
        `;
        table.appendChild(row);
      });

      // Clear previous content before appending the new table
      tableContainer.appendChild(table);
    }


  
