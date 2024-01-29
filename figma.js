let mainApi = "https://dummyjson.com/users";
fetch(mainApi)
.then((response) =>{
    if (response.ok) {
        let res = response.json();
        console.log(res)
        return res;
    }else{
        throw new Error("could not fetch ")
    }
})
.then((data) =>{
    // return data
    console.log(data)
    displayData(data)
})
.catch((error) =>{
    console.error("FETCH ERROR",error)

});

function displayData(data) {
   const tableContainer = document.querySelector("#tableContainer")
   let tableContent = data.users.slice(0,5);
   const table = document.createElement ("table");
   table.innerHTML = `
   <tr>
   <th>Department Name</th>
   <th>Doctor</th>
   <th>Gender</th>
   <th>Head of Department</th>
   <th > Action </th>
   <th style="text-align:center;"> Status</th>

</tr>
   `
   tableContent.forEach((data) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${data.company.department}</td>
                <td><img src="${data.image}"> ${data.firstName}</td>
                <td>${data.gender}</td>
                <td>${data.company.title}</td>
                <td ><img src="asset/pen.png" >
                    <img src="asset/profile.png" >
                    <img src="asset/delete.png" ></td>
                <td><button class="active">Active</button></td>
            </tr>
      `;
      table.appendChild(row)
       
   });
 tableContainer.appendChild(table)

}

