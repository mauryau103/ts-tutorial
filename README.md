# ts-tutorial
A code repo for typescript tutorial


AGENDA

.What is Angular ?
.Framework vs Libraries
.Features of Angular

WHAT IS ANGULAR ?

.A UI framework buit by google.
.A component-based framework for building scale app
.Provided Collection of libraries to cover features like Routing,forms.
 

-> previously angular was writtenn using javacript but in 2014 angular team decided to rewrite functionality and after that they write in typescript with inhanced features.
->on screen whatever we are seeing are components like header,footer,etc

FRAMEWORKS

.Frameworks generally contains set of libraries.
.You can extends the frameworks.
.some example are angular,.Net,Iconic,ExpressJS.

LIBRARIES

.Libraries generally perform specific operations.
.you can combine multiple libs to build apps.
.some examples are React,MomentsJS,Lodash

->in react , we will take ,react router ,and some other libraeries will combine all the library then create application.

FEATURES OF ANGULAR

.Template -> it has it's own template engine
.Data Binding-> to bind data from BE to FE
.Forms
.Routing
.Observables -> it is another library which is used inside angular mostly.
.PWA 

-------------------TYPESCRIPT------------------
.Introduction to typeScript
.why typescript
.type safety
.Installing and creating your first typescript program

*Introduction to typeScript*

->A strongly types programming language
->Created and maintained by Microsoft 
->superset of javascript

*why typescript*

->compiles to javascript
it is supersetof javascript but is again complies it to javascript.generally we are provide type safety to user so that he will not get any error and proper handling will done usig type script after that it converts into javascript.
->Keep your code evergreen
->Supported by all major libraries and frameworks

*type safety*

-> Keeps your application free from type errors.like undefined
-> language like c#,java are example of type safe language.
->Keep your JS code free from undefined and null vaules.
-> in typscript types are stripped when your code is converted to JS.

*Installing and creating your first typescript program*

-> Install node
-> Use latest version of Node.js
->'npm init' to create a package.json
->Install Typescript 'npm i typescript'
->Initoalize Typescript
->`tsc --init`

package.json -> keeps track of all package installes in our application

-------------------------Single page Application(SPA)--------------------

.what is spa?
.how angular hepls?


*what is spa*

->spa stands for single page applications.
->you can use modern frameworks like angular, React or vue to create Spa.
-> spa does not make requests to server for every URL requests.

all the resources will send to browser machine so.. browser is going to render ..there is no need to reload it from server.

*how angular hepls?*

-> Angular has routing functionality to create SPA
-> Angualr also offers SSR(Server side Rendering) which supports SPA.


-------------------------Data Types ----------------------------------------------

.Data types
.Type inference (Imp)
.Union and intersaction types
.Generics
.Literal Types


*Data types*

string 
number
boolean
array
enum
tuple
any
void
never

--> basically type inference ka mtlb hota hai ki typescript ko pata chalta hai ki kya datatype hai apke variable ka without defining its type...but it is not recomended to do like that ...because we are in typescript so use type....suppose agar hum koi string value assigned karte hai ek string ko to ..
let fname = "umesh"

fname = 12 --> yaha pe error aayega ...inference ne detect kiya ki isme pahle string define kiya gaya hai to abb number datatype nahi kar sakte isko.

as String define karne pe hame bhut sare props ya bol sakte hai unke methoda mil jate hai

-> numbers --> used for numbers