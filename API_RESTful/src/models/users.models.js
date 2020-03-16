const mongoose = require('mongoose');
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require('bcryptjs');
