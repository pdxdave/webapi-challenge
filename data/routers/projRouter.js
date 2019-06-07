// bring in express
const express = require('express');

// create express router
const router = express.Router();

// link to projects
const ProjectModel = require('../helpers/projectModel');

// GET projects
router.get('/', async (req, res) => {
    try {
        const pm = await ProjectModel.get()
        res.status(200).json(pm)
    } catch (error) {
        res.status(500).json({
            message: "The project information could not be retrieved"
        })
    }
});






module.exports = router;