import { Router } from 'express';
import Table from '../table';


let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {
    console.log('got em');
    blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;

    blogs.getOne(id)
        .then((post) => {
            res.json(post)
        })
        .catch((err) => { 
            console.error(err)
        });
});

router.post('/', (req, res) => {
        blogs.insert({
            title: req.body.title,
            content: req.body.content
        })
        
        .then((id) => { 
            console.log(id);
        });
});

router.put('/:id', (req, res) => {
    blogs.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    blogs.delete(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;