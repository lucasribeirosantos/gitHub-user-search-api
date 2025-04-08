const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML =`<div class="info">
                                        <img src="${user.avatarUrl}" alt="User profile picture" />
                                        <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado😢"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada😢"}</p>
                                            <ul>
                                                <li>Seguidores: ${user.followers}📌</li>
                                                <li>Seguindo: ${user.following}📌</li>
                                            </ul>
                                        </div>
                                    </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <br>
                                                                    <span class="span-item">🍴${repo.forks_count}</span>
                                                                    <span class="span-item">⭐${repo.stargazers_count}</span>
                                                                    <span class="span-item">👀${repo.watchers_count}</span>
                                                                    <span class="span-item">🧑‍💻${repo.language}</span>
                                                                </li>`
        )

        const renderRepositories = `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                    </div>`
                                
                                    this.userProfile.innerHTML += renderRepositories

        let eventsItens = ''
        if(user.events.length === 0) {
            eventsItens += `<p>O usuário não possui eventos</p>`
        } else {
            user.events.forEach(event => {
                if(event.type === "PushEvent") {
                    eventsItens += `<li><a><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</a>`
                } else if (event.type === "CreateEvent") {
                    eventsItens += `<li><a><span>${event.repo.name}</span> - Sem mensagem de commit</a>`
                }
            
            })
        }

        const renderEvents = `<div class="events section">
                                    <h2>Eventos</h2>
                                    <ul>${eventsItens}</ul>
                              </div>`

                              this.userProfile.innerHTML += renderEvents
                     
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }