const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false
  }
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"]
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"]
  }
];

const newUser = {
  username: "Brookkk",
  email: "brook@brnnnook.com",
  password: "1231bbb11",
  createdAt: "17/05/2019 9:45 AM",
  isLoggedIn: true
};

// Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (user) => {
  let User = users.find((User) => User.username === user.username);
  if (!User) {
    users.push(user);
    console.log(users);
  } else {
    console.log("you have already an account");
  }
};
signUp(users[0]);

const signIn = (username, password) => {
  let User = users.find(
    (User) => User.username === username && User.password === password
  );
  if (User) {
    console.log("you are sign in successfully");
  } else {
    console.log("your usename or password may wrong");
  }
};
signIn("Asab", "123456");

//Create a function called ***rateProduct*** which rates the product

const rateProduct = (_id, password, productname, rating) => {
  let User = users.find(
    (User) => User._id === _id && User.password === password
  );
  let Product = products.find((Product) => Product.name === productname);
  if (User && Product) {
    const rate = Product.ratings;
    rate.push({ userId: _id, rate: rating });
    console.log(rate);
    console.log("added rating");
  } else {
    console.log("user not found");
  }
};

rateProduct("ab12ex", "123123", "TV", 10);


const avgRating = (productname) => {
  let ratingSum = 0;
  let Product = products.find((Product) => Product.name === productname);
  if (Product) {
    Product.ratings.forEach((item) => {
      ratingSum = item.rate + ratingSum;
    });
    return console.log(ratingSum / Product.ratings.length);
  } else {
    return console.log("Product not found");
  }
};

avgRating("mobile phone");

const likeProduct = (userid, productname) => {
  let User = users.find((User) => User._id === userid);
  let Product = products.find((Product) => Product.name === productname);
  if (Product) {
    if (Product.likes.includes(userid)) {
      Product.likes.pop({ userId: userid });
      console.log("disliked");
    } else {
      Product.likes.push({ userId: userid });
      console.log("like added");
    }
  } else {
    console.log("product not found");
  }
};

likeProduct("fg12cy", "Laptop");

