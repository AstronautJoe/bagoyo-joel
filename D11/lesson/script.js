// Notes:

// Find one
// db.Books.findOne()

// Create
// Either through GUI -> Insert Document
// Or db.Books.insertOne()
// db.Books.insertMany();

// find and short by published year
// db.Books.find().sort({publishedYear: 1});

// db.Books.find().sort({ title: -1 });

// Find all books but limit results to 2
// db.Books.find().limit(2);

// Skip the first document and limit results to 2
// db.Books.find().skip(1).limit(2);

// Find british authors but show only the properties title and published year:
// db.Books.find({"author.nationality": "British"}, {title: 1, publishedYear: 1, _id: 0})

// Find books with published year before 2000 and with 'The' in the title
// db.Books.find({ $and: [{ publishedYear: {$lt: 2000 } },  { title: { $regex: "The"} } ]});

// Reference Approach:
// stating the object Id of the parent object

// Embedded approach:
// inserting the object itself and its properties in the parent object