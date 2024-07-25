const loadUoM = ()=> {
  fetch('http://localhost/getUoM.php')
      .then(response => response.json())
      .then(data => {
          console.log(data); // Handle the received JSON data here
          // You can use the data to populate a dropdown, table, etc.
          const uomBody = document.querySelector(".uom-body");
          const itmUoM = document.querySelector(".itmUoM");
          for(let i=0; i<data.length ; i++){
            uomBody.innerHTML+= `
                    <tr>
                      <th scope="row">${data[i].UoMID}</th>
                      <td>${data[i].UoM}</td>
                    </tr>`
            
            //setter of uoum dropdown
            itmUoM.innerHTML+=`<option value="${data[i].UoMID}">${data[i].UoM}</option>`
            
          }
          document.getElementById("uomForm").reset();
      })
      .catch(error => console.error('Error fetching data:', error));
}

const loadCategory = ()=> {
  fetch('http://localhost/getCategory.php')
      .then(response => response.json())
      .then(data => {
          console.log(data); // Handle the received JSON data here
          // You can use the data to populate a dropdown, table, etc.
          const categoryBody = document.querySelector(".category-body");
          const itmCategory = document.querySelector(".itmCategory");
          for(let i=0; i<data.length ; i++){
            categoryBody.innerHTML+= `
                    <tr>
                      <th scope="row">${data[i].categoryType}</th>
                      <td>${data[i].categoryDesc}</td>
                    </tr>`
            
          //setter of uom dropdown
          itmCategory.innerHTML+=`<option value="${data[i].categoryType}">${data[i].categoryDesc}</option>`
          }
          document.getElementById("categoryForm").reset();
      })
      .catch(error => console.error('Error fetching data:', error));
}

const loadProducts = () => {
  fetch('http://localhost/getProduct.php')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the received JSON data here
        // You can use the data to populate a dropdown, table, etc.
        const productBody = document.querySelector(".product-body");

        for(let i=0; i< data.length ; i++){
          productBody.innerHTML+= `
                  <tr>
                    <th scope="row">${data[i].prod_id}</th>
                    <td>${data[i].category_id}</td>
                    <td>${data[i].product}</td>
                    <td>${data[i].UoM_id}</td>
                    <td>${data[i].price}</td>
                  </tr>`

        }
        document.querySelector(".itmProduct").value="";
        document.querySelector(".itmCategory").selectedOptions[0]["innerText"] = "";
        document.querySelector(".itmUoM").selectedOptions[0]["innerText"] = "";
        document.querySelector(".itmRate").value="";
    })
    .catch(error => console.error('Error fetching data:', error));

}

const loadRoutes = () => {
  fetch('http://localhost/getRoutes.php')
      .then(response => response.json())
      .then(data => {
          console.log(data); // Handle the received JSON data here
          const routeBody = document.querySelector(".route-body");
          const routeID = document.querySelector(".routeID");
          for(let i=0; i<data.length ; i++){
            routeBody.innerHTML+= `
                    <tr>
                      <th scope="row">${data[i].route}</th>
                      <td>${data[i].deliveryType}</td>
                    </tr>`
          
          routeID.innerHTML+=`<option value="${data[i].route}">${data[i].deliveryType}</option>`
          }
          document.getElementById("routeForm").reset();
      })
      .catch(error => console.error('Error fetching data:', error));
}

const loadCustomers = () => {
  fetch('http://localhost/getCustomer.php')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the received JSON data here
      const customerBody = document.querySelector(".customer-body");
      for(let i=0; i<data.length ; i++){
        customerBody.innerHTML += `
          <tr>
            <td scope="row">${data[i].customerName}</td>
            <td>${data[i].routeID}</td>
            <td>${data[i].contact}</td>
            <td>${data[i].alternativeContact}</td>
            <td>${data[i].address}</td>
            <td>${data[i].emailID}</td>
          </tr>`
      }
      document.getElementById("customerForm").reset();
    })
    .catch(error => console.error('Error fetching data:', error));
};

const loadSuppliers = () => {
  fetch('http://localhost/getSupplier.php')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the received JSON data here
      const supplierBody = document.querySelector(".supplier-body");

      for(let i=0; i<data.length ; i++){
        supplierBody.innerHTML += `
          <tr>
            <td scope="row">${data[i].supplierName}</td>
            <td>${data[i].farmLocation}</td>
            <td>${data[i].contact}</td>
            <td>${data[i].alternativeContact}</td>
            <td>${data[i].farmSize}</td>
            <td>${data[i].emailID}</td>
          </tr>`
      }
      document.getElementById("supplierForm").reset();
    })
    .catch(error => console.error('Error fetching data:', error));
};

loadUoM();
loadCategory();
loadProducts();
loadRoutes();
loadCustomers();
loadSuppliers();

//to sent data to sql - done with form action
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('uomForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      console.log("work")
      // Get form data and convert it to JSON
      const formData = {
          UoMID: document.getElementById('UoMID').value,
          UoM: document.getElementById('UoM').value
      };
      const jsonData = JSON.stringify(formData);

      fetch('submitUoM.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: jsonData
      })
      .then(response => response.text())
      .then(data => {
          document.getElementById('result-uom').innerText = data; // Display the response in the result div
          document.querySelector(".uom-body").innerHTML="";
          loadUoM();
      })
      .catch(error => {
          document.getElementById('result-uom').innerText = 'An error occurred. Please try again.';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('categoryForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      console.log("work")
      // Get form data and convert it to JSON
      const formData = {
        categoryType: document.getElementById('categoryType').value,
        categoryDesc: document.getElementById('categoryDesc').value
      };
      const jsonData = JSON.stringify(formData);

      fetch('submitCategory.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: jsonData
      })
      .then(response => response.text())
      .then(data => {
          document.getElementById('result-category').innerText = data; // Display the response in the result div
          document.querySelector(".category-body").innerHTML="";
          loadCategory();
      })
      .catch(error => {
          document.getElementById('result-category').innerText = 'An error occurred. Please try again.';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('routeForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      console.log("work")
      // Get form data and convert it to JSON
      const formData = {
          route: document.getElementById('route').value,
          deliveryType: document.querySelector('input[name="deliveryType"]:checked').value
      };
      const jsonData = JSON.stringify(formData);

      fetch('submitRoute.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: jsonData
      })
      .then(response => response.text())
      .then(data => {
          document.getElementById('result-route').innerText = data; // Display the response in the result div
          document.querySelector(".route-body").innerHTML="";
          loadRoutes();
      })
      .catch(error => {
          document.getElementById('result-route').innerText = 'An error occurred. Please try again.';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("work");
    const formData = {
      customerName: document.getElementById('customerName').value,
      routeID: document.querySelector(".routeID").value,
      contact: document.getElementById('contact').value,
      alternativeContact: document.getElementById('alternativeContact').value,
      address: document.getElementById('address').value,
      emailID: document.getElementById('emailID').value
    };
    const jsonData = JSON.stringify(formData);

    fetch('submitCustomer.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('result-customer').innerText = data; // Display the response in the result div
      document.querySelector(".customer-body").innerHTML="";
      loadCustomers(); // Reload the customer data
    })
    .catch(error => {
      document.getElementById('result-customer').innerText = 'An error occurred. Please try again.';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('supplierForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("work");
    const formData = {
      supplierName: document.getElementById('supplierName').value,
      farmLocation: document.getElementById('farmLocation').value,
      contact: document.getElementById('contact').value,
      alternativeContact: document.getElementById('alternativeContact').value,
      farmSize: document.getElementById('farmSize').value,
      emailID: document.getElementById('emailID').value
    };
    const jsonData = JSON.stringify(formData);

    fetch('submitSupplier.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('result-supplier').innerText = data; // Display the response in the result div
      document.querySelector(".supplier-body").innerHTML="";
      loadSuppliers(); // Reload the supplier data
    })
    .catch(error => {
      document.getElementById('result-supplier').innerText = 'An error occurred. Please try again.';
    });
  });
});

/* function submitForm() {
//   if (!validateForm()) {
//       return;
//   }

//   const formData = new FormData(document.getElementById("productForm"));
//   fetch("store_product.php", {
//       method: "POST",
//       body: formData
//   })
//   .then(response => response.text())
//   .then(data => {
//       alert(data);
//   })
//   .catch(error => {
//       console.error("Error:", error);
//   });
// } */

document.querySelector(".ADDPRODUCT").addEventListener("click",(e)=>{
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  else {
    const ProductZIP =  {
      category_id:document.querySelector(".itmCategory").value,
      product: document.querySelector(".itmProduct").value,
      UoM_id: document.querySelector(".itmUoM").value,
      price: document.querySelector(".itmRate").value,
    };
    fetch('submitProduct.php', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(ProductZIP)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.querySelector(".product-body").innerHTML="";
        loadProducts();
    })
    .catch((error) => {
        console.error('Error:', error);
        document.querySelector(".product-body").innerHTML="";
        loadProducts();
    })
}});

function validateForm() {
  let category_id = document.querySelector(".itmCategory").value;
  let product = document.querySelector(".itmProduct").value;
  let UoM_id = document.querySelector(".itmUoM").value;
  let price = document.querySelector(".itmRate").value;

  if (category_id === "" || product === "" || UoM_id === "" || price === "") {
      alert("All fields must be filled out");
      return false;
  }
  return true;
}