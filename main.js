const SocialMedia = {
  github: 'Jotaset',
  youtube: 'channel/UCdmwp-dTD5pH7_Nct-PaX6w',
  facebook: 'Fillipe Alves (Lipeeh)',
  instagram: 'Lipeh_tritto4',
  twitter: 'fillipealvesdo2'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')
    li.children.href

    li.children.href = `https://${Social}.com/${SocialMedia[Social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html.url
      UserImage.src = data.avatar_url
    })
}
getGitHubProfileInfos()
