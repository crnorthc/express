const fs = require('fs')
const moment = require('moment')

const logger = (req, res, next) => {
	fs.appendFile(path.join(__dirname, 'log.txt'), 
	`(${moment().format()}): ${req.protocol}://${req.get('host')}${req.originalUrl}\n`, 
	(err) => {
		if (err) throw err
		console.log('Logged Data...')
	})
	next()
}

modules.export = logger