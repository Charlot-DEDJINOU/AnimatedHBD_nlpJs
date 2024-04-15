exports.login = async (req, res) => {
  try {
    const { password } = req.body
    if (process.env.USER_PASSWORD == password) {
      res.status(200).json({ message: 'Authentication successful' })
      return
    }
    res.status(401).json({ message: 'Authentication failed' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
