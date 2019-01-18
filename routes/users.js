const express = require('express')
const router = express.Router()
const knex = require('../knex')

//**********Get user info*************
router.get('/:id', (req, res, next) => {
  knex.column('id', 'name', 'cycle_length').select().from('users').where({
    id: req.params.id
  }).then((response) => {
    res.json(response)
      // let data = []
      // rows.forEach((obj) => {
      //   let newObj = {
      //     id: obj.id,
      //     name: obj.name,
      //     message: obj.message
      //   }
      //   data.push(newObj)
      // })
      // res.json(data)
    })
    .catch((err) => {
      next(err)
    })

})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
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
