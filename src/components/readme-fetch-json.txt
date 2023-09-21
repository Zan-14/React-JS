2. How to use JSON files in React (the example of the code will be taken from this project branch)

a. Remember fetch() method. 
    What is it?
        - fetch() method in JavaScript is used to request data from a server
b. This fetch() will be related to API (Application Programming Interface)
c. visit https://dummyjson.com/docs/products to get dummy json file.
d. Import useState and create a useState with undefined default useState
    const [product, setProduct] = useState();

e. Copy the code (this case is using all products)

f. Paste the code above return() in home-page.jsx
    - Erase the:
    .then(console.log); and change to:
    .then(setProduct); or same with the state changer name
    in the fetch method to show the data in HTML later.

    - Paste the code inside useEffect(), so the code will be like this:
        useEffect(() => {
            fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(setProduct);
        }, []);

    Note: this will prevent infinite loop. If you just paste the fetch, you will get error because of infinite loop.


h. Place the JSON file inside a div like this:
    {state ? (
        <div>{JSON.stringify(state)}</div>
      ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
          Loading...
        </h3>
    )};

    Note: JSON.stringify() is a function to convert the value in the JSON file to a string data. The code must be inside an if else statement or ternary operator. The example above just to test if the json file is fetched properly or not.

i. Map the data, to know the data structure, open inspect > Network > products (look at Name) > Preview
    Map the data like this if we want to show the product images, name, category, price:

    {state ? (
        <div>
          {state.products.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p>{product.category}</p>
                <p>{product.stock}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>
          Loading...
        </h3>
    )};

j. If you want to show the detail of the product when clicking a button, do this:
    1. Create a file to store the product details
    2. import { Link, useParams } from "react-router-dom";
    3. Create a standard FC
    4. Create a new Route on the index.jsx, example:
        <Route path="/details/:id" element={<ProductDetailsPage />} />

        Note: in the path there is /:id , this additional will create a unique link to each product based on it's id.

    5. Create a button inside a Link inside the ternary operator, example:

        {state ? (
        <div className="flex flex-wrap justify-evenly">
            {state.products.map(product => (
            <div key={product.id} className="m-5">
                <h3 className="py-2 font-bold text-xl">{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                <p className="leading-10">Category: {product.category}</p>
                <p className="leading-10">Stock: {product.stock}</p>
                <p className="leading-10">Price: ${product.price}</p>
                </div>
                {/* this is how to create a different page for each product */}

                *PAY ATTENTION TO THIS SECTION*

                <Link to={`/details/${product.id}`}>
                <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
                    Details
                </button>
                </Link>
            </div>
            ))}
        </div>
        ) : (
        <h3 className="text-center font-bold text-xl bg-gray-300">
            Loading...
        </h3>
        )}

        Note: Pay attention to the link target URL, instead of just type a string like other router, now we type path like this:
            to={`/details/${product.id}`}
        Open with backtick ` then chosen url, then /${product.id}
        The last part is why we can generate a specific url for a specific product, because we take their id.
    
    6. Now we need to add the product details to each page by using useParams Hook inside the product detail page like this:
        const { id } = useParams();
        note: don't forget to import useParams from react-router-dom

    7. fetch the json data again and place it inside useEffect:
        useEffect(() => {
            fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(setProduct);
        }, [id]);

        Note: 
            - fetch data from dummy JSON but changing the link with backtick and dynamic url using ${id}
            - Because we use useParams and the const is {id}, we need to add id inside the [] useEffect instead of just leave it empty like on the homepage.
    
    8. Create a ternary operator but now without mapping/looping the json data:
        {product ? (
            <div className="p-5 flex flex-wrap justify-evenly">
            <div className="m-5">

                /* here we put the other data from the JSON file, the order may be different from the homepage because in homepage, we just show the important information */

                <h3 className="py-2 font-bold text-xl text-center">
                {product.title}
                </h3>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                <p className="leading-10">
                    <span className="font-bold">Category:</span> {product.category}
                </p>
                <div className="w-[50vw]">
                    <p className="leading-6">
                    <span className="font-bold">Description:</span>{" "}
                    {product.description}
                    </p>
                </div>
                <p className="leading-10">
                    <span className="font-bold">Rating:</span> {product.rating}
                </p>
                <p className="leading-10">
                    <span className="font-bold">Stock:</span> {product.stock}
                </p>
                <p className="leading-10">
                    <span className="font-bold">Price:</span> ${product.price}
                </p>
                </div>
                {/* <img src={product.images} alt={product.title} /> */}
            </div>
            </div>
        ) : (
            <h3 className="text-center font-bold text-xl bg-gray-300">
            Loading...
            </h3>
        )};


*Different between Link and useNavigate
- Link is used after or inside return(), useNavigate before
- We can open new tab when right clicking Link from <Link></Link>, but we can't do that when using useNavigate
- useNavigate has a return() that maybe a function, Link doesn't have.
- Case when we use useNavigate:
    a. When there is an error, user will be redirected to a new page with the error message and details.
    b. More details will be added in the Hooks section.