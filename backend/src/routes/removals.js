const { Router } = require('express');
const router = Router();
const { getRemovals, getRemoval, createRemoval, deleteRemoval, updateRemoval } = require('../controllers/removals.controllers');

router.route('/')
    .get(getRemovals)
    .post(createRemoval);

router.route('/:id')
    .get(getRemoval)
    .delete(deleteRemoval)
    .put(updateRemoval)


module.exports = router;  