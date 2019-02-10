class GitHub {
  constructor() {
    this.client_id = '3b3c605bf3eba2dda83c'
    this.client_secret = '0cbb257b0a3306b07fc13cf84c0af962615d6d2a'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()
    return {
      profile,
      repos
    }
  }
}