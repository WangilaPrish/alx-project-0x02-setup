import Header from '../components/layout/Header'

const HomePage = () => (
    <>
        <Header />
        <main className="p-4">
            <h1 className="text-3xl font-bold">Welcome to SoloForge!</h1>
            <p className="mt-2">Explore posts and users fetched from external APIs.</p>
        </main>
    </>
)

export default HomePage
