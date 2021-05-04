import { RepositoryList } from './Components/RepositoryList'
import { Counter } from './Components/Counter'

import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList />
            <RepositoryList />
            <RepositoryList />
            <RepositoryList />
            <Counter />
        </>
    )
}