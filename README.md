# Breaking the Monolith by using hapi 
## Background
Let me get the disclaimer out of the way: I am not an expert on Hapi
I started looking into Hapi's ability to break components out.
This is my attempt to follow other tutorials from a hello world to a true component system.
I have broken this down into the following steps

| Project  | Description | Link |
|---|---|---|
|hapi-tut-monolith-01|A simple hello world hapi project| [01](https://github.com/quapaw/hapi-tut-monolith-01)|
|hapi-tut-monolith-02a|Add services - customers and products| [02A](https://github.com/quapaw/hapi-tut-monolith-02a)|
|hapi-tut-monolith-02b|Adding Glue and externalizing config| [02B](https://github.com/quapaw/hapi-tut-monolith-02b)|
|hapi-tut-monolith-02c|Moving services into their own folders| [02C](https://github.com/quapaw/hapi-tut-monolith-02c)|
|hapi-tut-monolith-03-main|Moved service into own project. Instructions here| [03-main](https://github.com/quapaw/hapi-tut-monolith-03-main)|
|hapi-tut-monolith-03-customer|Just the customer service| [03-customers](https://github.com/quapaw/hapi-tut-monolith-03-customers)|
|hapi-tut-monolith-03-products|Just the produce service| [03-products](https://github.com/quapaw/hapi-tut-monolith-03-products)|
|**hapi-tut-monolith-04a-customer**|**Movement of some files**| **[04a-customers](https://github.com/quapaw/hapi-tut-monolith-04a-customers)**|

#HAPI Tutorial - Monolith - 4 - Move toward production
This part of the tutorial will move the customer plugin more toward a production plugin.
This step, 04a, will move some files around.

* Move customer.js file from root directory to a lib directory.  It will also rename the file to CustomerRoutes.js
* Change CustomerRoutes.js into a class
* Add localServer.js
This will allow us to test customers api without including the main project and other components.
    * need to add glue to dev dependencies by running ```npm install -save-dev glue```
    * need to add hapi as a dependencies by running ```npm install -save hapi```
    
    
You should be able to run just the customers component by running ```node localServer.js```
Then you can hit the following url to get data (http://localhost:3000/customers)
 