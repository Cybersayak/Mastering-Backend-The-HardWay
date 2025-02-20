Here’s a comprehensive list of **MongoDB Community Edition** queries, categorized for easy reference.

---

## **1. Database Operations**
### **Show all databases**
```js
show dbs;
```
### **Switch to a database (or create one if it doesn’t exist)**
```js
use database_name;
```
### **Check current database**
```js
db;
```
### **Delete a database**
```js
db.dropDatabase();
```

---

## **2. Collection Operations**
### **Show all collections**
```js
show collections;
```
### **Create a collection**
```js
db.createCollection("collection_name");
```
### **Drop a collection**
```js
db.collection_name.drop();
```

---

## **3. Insert Documents**
### **Insert one document**
```js
db.collection_name.insertOne({ key: "value" });
```
### **Insert multiple documents**
```js
db.collection_name.insertMany([
  { key1: "value1" },
  { key2: "value2" }
]);
```

---

## **4. Read (Find) Documents**
### **Find all documents**
```js
db.collection_name.find();
```
### **Find all documents (pretty format)**
```js
db.collection_name.find().pretty();
```
### **Find specific document**
```js
db.collection_name.findOne({ key: "value" });
```
### **Find documents with conditions**
```js
db.collection_name.find({ age: { $gt: 20 } });  // age > 20
db.collection_name.find({ age: { $lt: 20 } });  // age < 20
db.collection_name.find({ age: { $gte: 18 } }); // age >= 18
db.collection_name.find({ age: { $lte: 18 } }); // age <= 18
```
### **Find using OR condition**
```js
db.collection_name.find({ $or: [{ age: 18 }, { name: "John" }] });
```
### **Find using AND condition**
```js
db.collection_name.find({ age: 18, name: "John" });
```
### **Find only specific fields**
```js
db.collection_name.find({}, { name: 1, age: 1, _id: 0 });
```

---

## **5. Update Documents**
### **Update one document**
```js
db.collection_name.updateOne(
  { key: "value" }, 
  { $set: { newKey: "newValue" } }
);
```
### **Update multiple documents**
```js
db.collection_name.updateMany(
  { key: "value" }, 
  { $set: { newKey: "newValue" } }
);
```
### **Replace a document**
```js
db.collection_name.replaceOne(
  { key: "value" }, 
  { newKey: "newValue" }
);
```

---

## **6. Delete Documents**
### **Delete one document**
```js
db.collection_name.deleteOne({ key: "value" });
```
### **Delete multiple documents**
```js
db.collection_name.deleteMany({ key: "value" });
```

---

## **7. Sorting & Limiting Data**
### **Sort documents in ascending order**
```js
db.collection_name.find().sort({ age: 1 });
```
### **Sort documents in descending order**
```js
db.collection_name.find().sort({ age: -1 });
```
### **Limit the number of results**
```js
db.collection_name.find().limit(5);
```
### **Skip first n documents**
```js
db.collection_name.find().skip(3);
```

---

## **8. Aggregation**
### **Group documents by field**
```js
db.collection_name.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } }
]);
```
### **Match specific documents**
```js
db.collection_name.aggregate([
  { $match: { age: { $gt: 20 } } }
]);
```
### **Project specific fields**
```js
db.collection_name.aggregate([
  { $project: { name: 1, age: 1, _id: 0 } }
]);
```

---

## **9. Indexing**
### **Create an index**
```js
db.collection_name.createIndex({ key: 1 });
```
### **List all indexes**
```js
db.collection_name.getIndexes();
```
### **Drop an index**
```js
db.collection_name.dropIndex("index_name");
```

---

## **10. Backup & Restore**
### **Backup a database**
```sh
mongodump --db database_name --out /backup/path
```
### **Restore a database**
```sh
mongorestore --db database_name /backup/path/database_name
```

---
