export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto items-center w-screen">
      <header className="w-full h-16 text-gray-900 flex items-center justify-between px-8">
        <div className="font-bold">FEEDII</div>
        <div className="flex space-x-4">
          <button>Login</button>
          <button className="bg-gray-900 px-6 py-2 text-white rounded-md">
            Signup
          </button>
        </div>
      </header>
      <main className=""></main>
      <footer className=""></footer>
    </div>
  );
}