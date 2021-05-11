const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');


router.get('/get', (req, res, next) => {
    Todo.find()
        .then(data => res.json(data))
        .catch(next)
});

router.get('/get/:id', (req, res, next) => {
    Todo.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(next)
});



router.post('/add', (req, res, next) => {
    if (req.body.todo) {
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty!"
        })
    }
});

// router.put('/edit/:id', (req, res, next) => {
//     if (req.body.todo) {
//         Todo.findByIdAndUpdate({ '_id': req.params.id, },
//          todo: req.body.todo)
//             .then(data => res.json(data))
//             .catch(next)
//     } else {
//         res.json({
//             error: "The input field is empty!"
//         })
//     }


// })

router.put('/edit/:id', (req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id,
        {
            todo: req.body.todo,
        }, (err, docs) => {
            if (err) {
                res.json(err);
            }
            return res.json(docs)
        })
    // .then(data => res.json(data))
    // .catch(next)
});

router.delete('/delete/:id', (req, res, next) => {
    Todo.findOneAndDelete({ '_id': req.params.id })
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;