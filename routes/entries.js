const express = require('express')
const router = express.Router()
const knex = require('../knex')

//takes type Date 
//returns type string
function formatDate (date){
    let months = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = 'month not found'
    //check if the index of the month is one digit
    if (months.indexOf(date.toString().substring(4, 7)) < 10){
        month = `0${months.indexOf(date.toString().substring(4, 7))}`
    } else{
        month = `${months.indexOf(date.toString().substring(4,7))}`
    }
     
    return `${date.toString().substring(11, 15)}-${month}-${date.toString().substring(8,10)}`

}

//********get all records for this user*******
router.get('/:user_id', (req, res, next) => {
    knex('entries').where({
        user_id: req.params.user_id
    })
        .then((rows) => {
            let data = []
            rows.forEach((obj) => {
                let newObj = {
                    id: obj.id,
                    user_id: obj.user_id,
                    date: formatDate(obj.date),
                    flow: obj.flow,
                    temp: obj.temp
                }
                data.push(newObj)
            })
            res.json(data)
        })
        .catch((err) => {
            next(err)
        })
})


// *******Post an entry****************
router.post('/:user_id', (req, res, next) => {
    //check the request content
    let {flow, date, temp} = req.body
    if(!date instanceof Date){
        date = new Date(date)
        console.log("date: ", date, "type of date: ", typeof date)
    }
    knex('entries')
        .insert({
            "user_id": req.params.user_id,
            "date": date,
            "flow": flow,
            "temp": temp,
        })
        .returning('*')
        .then((data) => {
            console.log("data: ")
            let retData = {
                id: data[0].id,
                date: formatDate(data[0].date),
                flow: data[0].flow,
                temp: data[0].temp
            }
            res.json(retData)
        })
        .catch((err) => {
            next(err)
        })
})
       

// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
    res.send('UPDATED RECORD')
})

// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
    res.send('DELETED RECORD')
})

module.exports = router