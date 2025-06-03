import Card from "@/components/common/Card";

const HomePage = () => {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    title="Getting Started"
                    content="Learn the basics of setting up and navigating SoloForge."
                />
                <Card
                    title="Reusable Components"
                    content="Understand how to build and use reusable components in Next.js."
                />
                <Card
                    title="API Integration"
                    content="Fetch and display data from external APIs seamlessly."
                />
            </div>
        </main>
    );
};

export default HomePage;
