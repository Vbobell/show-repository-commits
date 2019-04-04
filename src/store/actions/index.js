import { GET_REPOSITORIES, SELECTED_REPOSITORY, GET_COMMITS } from './type';

const BASE_URL_GIT = "https://api.github.com";

export async function getRepositories() {
    const response = await fetch(`${BASE_URL_GIT}/users/vbobell/repos`);
    let repositories = await response.json();

    repositories = repositories.map(( { id, name } ) => {
        return { id, name }
    });

    
    return {
        type: GET_REPOSITORIES,
        repositories
    }
}

export function getSelectedRepository(id) {
    let repositories = this.repositories.map((repository) => {
        repository.id === parseInt(id) ? repository.selected = true : repository.selected = false;
        return repository;
    });

    return {
        type: SELECTED_REPOSITORY,
        repositories
    }
}

export async function getCommitsRepository(repoName) {
    const response = await fetch(`${BASE_URL_GIT}/repos/vbobell/${repoName}/commits`);
    let commits = await response.json();

    commits = commits.map(( { commit, sha } ) => {
        return { commit, sha }
    });

    return {
        type: GET_COMMITS,
        commits
    }
}