const express = require('express')
const router = express.Router()
const Phrase = require('../models/phrase')

router.get('/', async (req, res) => {
    try {
      const phrases = await Phrase.find()
      console.log(phrases);
      res.json(phrases)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  async function getPhrase(req, res, next) {
    try {
      phrase = await Phrase.findById(req.params.id)
      if (phrase == null) {
        return res.status(404).json({ message: 'Cant find phrase'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
    
    res.phrase = phrase
    next()
  }
  
  module.exports = router 