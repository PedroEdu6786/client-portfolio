require('dotenv').config
const request = require('request')

const subscriptionHandler = async (req, res) => {
  const { email } = req.body

  const mcData = {
    members: [
      {
        email_address: email,
        status: 'pending',
      },
    ],
  }

  const mcDataPost = JSON.stringify(mcData)

  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const mailchimpKey = process.env.MAILCHIMP_API_KEY

  const options = {
    url: `https://us2.api.mailchimp.com/3.0/lists/${audienceId}`,
    method: 'POST',
    headers: {
      Authorization: `auth ${mailchimpKey}`,
    },
    body: mcDataPost,
  }

  if (email) {
    request(options, (err, response, body) => {
      if (err) {
        res.json({ err })
      } else {
        res.status(200).send({ message: 'success' })
      }
    })
  } else {
    res.status(404).send({ message: 'failed' })
  }
}

export default subscriptionHandler
