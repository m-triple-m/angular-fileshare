const Model = require('../models/fileModel')
const router = require('express').Router();
const multer =require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads/files');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload=multer({storage : storage})

router.post('/upload',upload.single('file'), (req,res)=>{
    res.json({message : "file upload success"})
})

router.post('/add', (req, res) => {
    let model = new Model(req.body);
    model.save()
    .then(data => {
        console.log('user data saved');
        res.status(200).json({message : 'success'});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.put('/update/:id', (req, res) => {
    id = req.params.id;
    Model.findByIdAndUpdate(id, req.body)
    .then(data => {
        console.log('user data saved');
        res.status(200).json({message : 'success'});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getbyadmin/:id', (req, res) => {

    Model.find({admin : req.params.id})
    .populate('members')
    .then(data => {

        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getshared/:mem_id', (req, res) => {
    console.log(req.params.mem_id);
    Model.find({"sharedto" : {"$in" : [req.params.mem_id]}})
    .then(data => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})


module.exports = router;