use CloudDB;
db.students.insertMany([
    {
        student_id: 101,
        name: "Anushree",
        department: "BCA",
        year: 2,
        marks: 85
    },
    {
        student_id: 102,
        name: "Priya",
        department: "BCA",
        year: 2,
        marks: 90
    },
    {
        student_id: 103,
        name: "Rahul",
        department: "BSc",
        year: 1,
        marks: 78
    },
    {
        student_id: 104,
        name: "Kavin",
        department: "BCA",
        year: 2,
        marks: 88
    }
]);

db.students.find();

db.students.find({
    department: "BCA"
});

db.students.updateOne(
    { student_id: 101 },
    { $set: { marks: 95 } }
);

db.students.find({
    student_id: 101
});

db.students.countDocuments();

db.students.find().sort({
    marks: -1
});

db.students.deleteOne({
    student_id: 104
});

db.students.find();

db.stats();