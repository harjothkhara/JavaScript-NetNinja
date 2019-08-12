// object literals - objects in arrays

// storing objects inside of arrays
// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ];

//console.log(blogs);

//object
let user = {
  // properties with key value pairs
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
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
    this.blogs.forEach(blog => { // now each blog is going to represent an object in the array
      console.log(blog.title, blog.likes);
    })
  }
};

// make a method to logout all the blogs - to do that we need to use the "this" keyword.
user.logsblogs();
// this user has written the following blogs
// why mac & cheese rules 30
// 10 things to make with marmite 50
