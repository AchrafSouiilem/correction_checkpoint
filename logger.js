const date = new Date
const currentHour = date.getHours()
const currentDay = date.getDay()

const logger = (req, res, next) => {
    if (currentHour > 8 && currentHour < 17 && currentDay >= 1 && currentDay < 6) {
        
        next()
    }
     else {
            res.send('<h1> sorry we are closed !</h1>')
        }
    
}

module.exports = logger 