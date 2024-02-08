import Selection from "./components/Selection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Go Blueprint
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Choose your desired features, and we'll generate a new GitHub
            repository pre-populated with the necessary boilerplate code.
          </p>
        </div>
        <Selection />
      </div>
    </main>
  );
}
