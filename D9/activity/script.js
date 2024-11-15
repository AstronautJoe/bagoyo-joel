const productsContainer =
  document.getElementsByClassName('products-container')[0];

// General Template for fetching data with a try catch block
const displayUserData = async () => {
  // Select the user container element
  try {
    // Fetch user data from the JSONPlaceholder API
    const response = await fetch('https://fakestoreapi.com/products/');

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    // Extract JSON data from the response
    const data = await response.json();
    // console.log(data);
    let html = '';
    // Loop through each of the product, create a card for it
    data.forEach((product) => {
      // Generate HTML markup for each product
      html += `
                <div class="product-card">
                    <img src="${product.image}" alt="product-image">
                    <p class="product-title">${product.title}</p>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-description truncate">${product.description}</p>
                </div>
          `;
    });

    // Insert the generated HTML
    productsContainer.innerHTML = html;
  } catch (error) {
    // Display an error message if fetching data fails
    userContainer.innerHTML = 'An error occurred while fetching data.';
    console.error(error);
  }
};
// run the function automatically to load the products data
displayUserData();
