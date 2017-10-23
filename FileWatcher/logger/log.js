/**
 * Created by Kiryl_Bahdanets on 10/23/2017.
 */

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.File({ filename: './error.log', level: 'error' }),
        new transports.File({ filename: './Creation_updating_deleting_renaming_csv_Files.log', level: 'info' })
    ]
});

module.exports = logger;

