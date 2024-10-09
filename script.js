async function fetchGitHubProfile() {
    const username = 'bensfull'; 
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();

        document.getElementById('profile-avatar').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.name || "Nome não disponível";
        document.getElementById('profile-username').textContent = `@${data.login}`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;
    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
    }
}

fetchGitHubProfile();
