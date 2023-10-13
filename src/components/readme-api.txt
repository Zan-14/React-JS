*REACT JS PART 7*
Session 27 HariSenin Bootcamp (Fetch and review some basic react knowledges)
Session 28 HariSenin Bootcamp / Practice React JS (Axios)
Tutor: Kak Rizal

Topic :
- API Implementation


Some terms in API:
 - endpoints:
    the last word in the URL is the endpoints.
    Example: 
        - When we fetch some products data from API, we will get "products" as the last word in the URL for example. This is the endpoints of all products. 
        - When we want to show a specific product, we need to get the product id and change the endpoints to the specific product with specific id.
            Example: Iphone 15 is the product with id: 1. There are other apple products with their own id. So we need to set the URL (endpoints) to 1 after the product.
                        The URL will be like: .../products/1

*API (Application Programming Interface)
    - What is API?
        a. Connector between the Front End and Back End of the Application
        b. Tools to use data from th Back End or from Databases
        c. Used to create integration between application (send and receive data each other)

        formal definitions:
            Rules and protocols used for creating interaction for applications
    
    - Function of API:
        - Managing communication and data transfer between software (internal or between software or third party software)

*Types of API
    1. API RESTful: (frequently used)
        - HTTP (Hypertext Transfer Protocol) based API that uses REST (Representational State Transfer) principles to communicate with the server
        - Often use JSON format to transfer data

    2. API SOAP: (rarely used now)
        - SOAP (Simple Object Access Protocol) based API that uses XML (eXtensible Markup Language) format to transfer data

    3. API GraphQL: (New and Hype now)
        - API with the possibility for client to ask and return certain data with customized queries
        - Claimed faster and simpler than RESTful API but there are conditions when to use GraphQL and RESTful API

    4. API Public:
        - API that can be accessed by third parties to develop their applications or create a new one.
        - Example: Weather API, Outbreak data like Covid data information

    5. API Internal:
        - API from the internal organization and only used internally.

    * Different between RESTful and GraphQL API:
        a. RESTful
            - Connect to the server with fetch() or axios() when GET/POST/PUT/DELETE requests
        b. GraphQL
            - Use third party to do HTTP method (GET/POST/PUT/DELETE requests)

*HTTP (Hypertext Transfer Protocol) API Methods:
    1. GET Method: 
        - Take data from the server
        example: go to product details page when clicking on product (because of the product id)
    
    2. POST Method:
        - Send new data to the server
        - Tools to do this, we can use "POSTMAN" search it on google
        example: register-login, adding new products in e commerce
    
    3. PUT/PATCH Method:
        - Update the data in the server
 
    4. DELETE Method:
        - Delete data from the server
    
    - In RESTful API, we use fetch() or axios()
        It's the same but Kak Rizal prefer axios because it's more customable 

*There will be 2 options to 'GET' RESTful API data:
    1. fetch()
        Open FetchPage.jsx
    2. axios()
        Open AxiosPage.jsx

*Indicator for successfully fetching data
    inspect > network > Fetch/XHR > Name > data name is there > status = 200

*Some ways to call the API data:
    1. When the page is opened or loaded
        we use useEffect 
    2. When a button is clicked
        we add onClick inside the button and put the function that fetch the data.
        syntax:
            <button onClick={() => getApiProduct()}>Call the API</button>

    3. (Recommended) When the data will be fetched multiple times on different pages
            - There is a way to prevent coding the async await function to get the data.
            - We need to create a new folder inside src named "services"
                Go to part-8 branch!
