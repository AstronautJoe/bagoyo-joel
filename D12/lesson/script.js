// Embedding and Referencing 

// Authors object id:

// _id
// 673dc3709cf80875f4a53433
// name
// "John Doe"


// _id
// 673dc3709cf80875f4a53434
// name
// "Jane Smith"


// _id
// 673dc3709cf80875f4a53435
// name
// "Alice Johnson"

// Notes:
// find by author with an object id of ...
// db.blog_posts.find({ author: ObjectId("673dc3709cf80875f4a53433") })

// Find all posts and include the authors name (join equivalent)
// db.blog_posts.aggregate([
//     {
//       $lookup: {
//         from: "authors",
//         localField: "author",
//         foreignField: "_id",
//         as: "author_details"
//       }
//     }
//   ])

// Count the number of posts per author
// db.blog_posts.aggregate([
//     { $group: { _id: "$author", postCount: { $sum: 1 } } }
//   ])

// $group groups documents by the author field then sum calculates the total number of posts

// make a new collection named products and insert the following:
// [
//   {
//     "name": "Smartphone",
//     "description": "High-performance device",
//     "reviews": [
//       { "rating": 5, "comment": "Excellent!", "reviewer": "John Doe" },
//       { "rating": 4, "comment": "Good value.", "reviewer": "Jane Smith" }
//     ]
//   },
//   {
//     "name": "Laptop",
//     "description": "Lightweight and powerful",
//     "reviews": [
//       { "rating": 5, "comment": "Amazing performance!", "reviewer": "Alice Johnson" },
//       { "rating": 3, "comment": "Could be better.", "reviewer": "John Doe" }
//     ]
//   }
// ]

// find all reviews with the name smart phone 
// db.products.find({ name: "Smartphone" }, { reviews: 1, name: 1 })

// Count the number of reviews per product
// db.products.aggregate([
//     { $unwind: "$reviews" },
//     { $group: 
//         { 
//             _id: "$name", 
//             reviewCount: { $sum: 1 } 
//         } 
//     }
//   ])

// When to use embedded and when to use reference?

// Note: Remember to use PascalCase for users

// Scenario: Social Networking

// Insert this into a new collection called Users. Use compass's insert document
// [
//     {
//       "name": "John Doe",
//       "friends": []
//     },
//     {
//       "name": "Jane Smith",
//       "friends": []
//     },
//     {
//       "name": "Alice Johnson",
//       "friends": []
//     }
//  ]

// What if you want to add it manually like adding friends one by one?

// Under Johnson (in the friends table), Add Jane Smith and Alice Johnson as friends.
// db.Users.updateOne(
//     { _id: ObjectId("673dccbf3f85f6222df2bc59")},
//     { $set: {friends:[ObjectId("673dccbf3f85f6222df2bc5a"), ObjectId("673dccbf3f85f6222df2bc5b")]}}
// )

// // Under Jane Smith, add john doe as a friend
// db.Users.updateOne(
//     { _id: ObjectId("673dccbf3f85f6222df2bc5a")},
//     { $set: {friends:[ObjectId("673dccbf3f85f6222df2bc59")]}}
// )


// // Under Alice Johnson add Jane Smith add as a friend
// db.Users.updateOne(
//     { _id: ObjectId("673dccbf3f85f6222df2bc5a")},
//     { $set: {friends:[ObjectId("673dccbf3f85f6222df2bc59")]}}
// )

// find all friends of a certain user
// db.Users.find({_id: ObjectId("673dce6f954f8b5304c356db")}, { friends: 1})


// count the number of friends for each user
// db.users.aggregate([
//     { $project: { name: 1, friendCount: { $size: "$friends" } } }
//   ])

// - Check common friends between two users:
// db.users.aggregate([
//     { $match: { _id: { $in: [ObjectId("USER_ID_1"), ObjectId("USER_ID_2")] } } },
//     { $project: { friends: 1 } }
//   ])



