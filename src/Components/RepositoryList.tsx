import { useState, useEffect } from 'react'
import { RepositoryItem} from './RepositoryItem'

import '../styles/repositories.scss'

interface repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    let [repositories, setRepositories] = useState<repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/elisioWander/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
                
                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}
                </ul>
        </section>
    )
}