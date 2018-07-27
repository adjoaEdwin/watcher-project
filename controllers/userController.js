const User = require('../models/User');

exports.registerUser = async (req, res) => {

  if (!req.body.email && !req.body.threshold && !req.body.interest) {
    return res.status(400).json({
      status: false,
      msg: 'Make sure all 3 required fields were passed! {threshold, email, interets}'
    })
  }

  try {
    const user = await (User(req.body).save())
    return res.status(200).json({ 
      status: true, user 
    })
  } catch (err) {
    console.log(err)
    return res.status(501).json({ 
      status: false, 
      msg: 'Failed to store user data', 
      err: err
    })
  }
}