//const { router } = require("express");
const express = require('express');
const router = express.Router();
const { getHospitals,getHospital,createHospital,updateHospital,deleteHospitals } = require('../controllers/hospitals')

router.route('/').get(getHospitals).post(createHospital);
router.route('/:id').get(getHospital).put(updateHospital).delete(deleteHospitals);

module.exports = router;