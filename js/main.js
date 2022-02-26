
const links = {
    github: "wevdiaz",
    youtube: "Wheversonful",
    facebook: "weverson.diaz",
    instagram: "jakeliny.gracielly",
    twitter: "Wverson"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class");
        li.children[0].href + links[social];
    }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`;
    
    fetch(url)
    .then( response =>  response.json() )
    .then( data => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userProfile.href = data.html_url;
        userAvatar.src = data.avatar_url;
        userLogin.textContent = data.login;
    })
}

getGithubProfileInfos();


