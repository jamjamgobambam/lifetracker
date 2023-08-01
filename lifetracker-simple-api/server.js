"use strict"

const app = require("./app")
const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
