// object literals - adding methods

//object
let user = {
  // properties with key value pairs
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  //key value pair
  //name of method and this is what it does
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){ //still regular function
    console.log('the user logged out');
  },
  logsblogs(){ //still regular function but a shorthand version
    //console.log(this.blogs) //"this" refers to this user object
    console.log('this user has written the following blogs');
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
  // logsblogs: () => {
  //   console.log(this); // window object when an arrow function is used as a method
  // }
};
//object name and then dot then the method name and we invoke it with parenthesis
user.login();

//string method - which is similar
const name = 'mario';
// method defined on a string object
name.toUpperCase();

// a regular function isn't defined inside an object, a method is.

user.logout();

// make a method to logout all the blogs - to do that we need to use the "this" keyword.
user.logsblogs(); //this user has written the following blogs
                 //why mac & cheese rules

// "this" keyword is a context object and it represents the context that the current code is executed. depend on where we use it, its value is going to be different.
console.log(this) //global context or window object

// when we use a normal function as a method and invoke that method JS sets the value of the "this" keyword to the object the method was used on. inside the function therefore we can use the "this" keyword to refer to the object itself. when we use an arrow function instead to create the method, JS now will not set the value of the "this" keyword to be the object when the method is a arrow function.
