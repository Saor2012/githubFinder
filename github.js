class GitHub {
  constructor() {
    this.client_id = '3b3c605bf3eba2dda83c'
    this.client_secret = '0cbb257b0a3306b07fc13cf84c0af962615d6d2a'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profile = await profileResponse.json()
    return {
      profile
    }
  }
}