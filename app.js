//redosled izvrsavanja funkcije call stack
//asihrono javascript
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Clanarina je validna");
//     reject("nemaaa");
//   }, 3000);
// });

// myPromise
//   .then((data) => {
//     // const newData = data + ", mozete da udjete u klub!";
//     return newData;s
//   })
//   .then((nestoPeto) => alert(nestoPeto))
//   .catch((data) => {
//     if (data === "nemaaa") {
//       alert("Neuspesan zahtev ka serveru, pokusajte opet");
//     }
//   });
//   .finally(() => alert("Provera je zavrsena"));
// fetch("https://dummyjson.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     const allPosts = data.posts;
//     const parniPostovi = allPosts.filter((post) => post.id % 2 === 0);
//     return parniPostovi;
//   })
//   .then((parniPostovi) => console.log(parniPostovi));
// then((data) => console.log(data));

// fetch(`https://dummyjson.com/posts`)
//   .then((res) => res.json())
//   .then((data) => data.posts)
//   .then((posts) => posts.filter((post) => post.id % 2 === 0))
//   .then(console.log);

// fetch("//dummyjson.com/posts")
//   .then((res) => res.json())
//   // .then((data) => data.posts)
//   // .then((posts) => posts.filter((el) => el.reactions.dislikes <= 10))
//   .then(console.log);

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((data) => data.users)
//   .then((users) => users.filter((el) => el.id % 2 === 0))
//   .then((users) => users.filter((el) => el.role === "user"))
//   .then((users) => users.filter((el) => el.height >= 175))
//   .then(console.log);

// fetch("https://dummyjson.com/carts")
//   .then((res) => res.json())
//   .then((data) => data.carts)
//   // .then((carts) => carts.filter((el) => el.id % 2 === 0))
//   // .then((carts) => carts.filter((el) => el.id <= 20))
//   .then(console.log);

// fetch("https://dummyjson.com/comments")
//   .then((res) => res.json())
//   .then((data) => data.comments)
//   .then((comments) => comments.filter((el) => el.likes < 4))
//   .then(console.log);

// fetch("https://dummyjson.com/recipes")
//   .then((res) => res.json())
//   .then(console.log);
