const express = require('express');
const Job = require('./Database/Job');
const Employee = require('./Database/Employee')
const User = require('./Database/User');
require('./Database/connect');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 9000 || process.env.port;


// Register employee
app.post("/employeeregister", async (req, res) => {
    let employee = new Employee(req.body);
    let result = await employee.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

// Employee login
app.post("/employeelogin", async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let employee = await Employee.findOne(req.body).select("-password");
        if (employee) {
            res.send(employee);
        }
        else {
            res.send({ result: "No Employee found" });
        }
    }
    else {
        res.send({ result: "No Employee found" });
    }
})

// User register
app.post("/userregister", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

// User login
app.post("/userlogin", async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        }
        else {
            res.send({ result: "No User found" });
        }
    }
    else {
        res.send({ result: "No User found" });
    }
})

// Add job to portal
app.post("/add-job", async (req, res) => {
    let job = new Job(req.body);

    let result = await job.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
    // result = result.toObject();
})

// Access all job
app.get('/jobs', async (req, res) => {
    let jobs = await Job.find();
    if (jobs.length > 0) {
        res.send(jobs);
    }
    else {
        res.send({ result: "No products found" });
    }
})

//Delete the specific job 
app.delete('/job/:id', async (req, res) => {
    const result = await Job.deleteOne({ _id: req.params.id });
    res.send(result);
})

// Get the job details by using Id
app.get('/job/:id', async (req, res) => {
    const result = await Job.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "No record found!!" });
    }
})

// Update the job Information
app.put('/job/:id', async (req, res) => {
    let result = await Job.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
})

// Search job
app.get('/search/:key', async (req, res) => {
    let result = await Job.find({
        "$or": [
            { position: { $regex: req.params.key } },
            { skills: { $regex: req.params.key } },
            { salary: { $regex: req.params.key }},
            { company: { $regex: req.params.key } },
            { companyDescription: { $regex: req.params.key } }
        ]
    })
    res.send(result);
})

console.log("App is working");

app.listen(port);