import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Head>
        <title>Sari Sabor</title>
      </Head>
      <div className="flex flex-col items-center p-4">
        <img src="/logo.png" alt="Sari Sabor" className="w-1/2" />
        <p className="text-center mt-4">SARISABOR Lorem ipsum dolor sit amet consectetur. In eget massa tellus posuere consectetur. Auctor euismod sit proin tortor duis amet ac.</p>
        <div className="flex justify-center mt-4">
          <img src="/products.png" alt="Products" className="w-1/2" />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-red-600">FEATURING</h2>
          <div className="flex flex-col items-start mt-2">
            <div className="flex items-center">
              <span>✔️ Rich in Vitamin C</span>
            </div>
            <div className="flex items-center">
              <span>✔️ Infused with Antioxidants</span>
            </div>
            <div className="flex items-center">
              <span>✔️ Aids Digestion</span>
            </div>
            <div className="flex items-center">
              <span>✔️ Good for Diet</span>
            </div>
            <div className="flex items-center">
              <span>✔️ Less Sugar Content</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-pink-200 p-2 flex justify-between">
        <button className="flex-1 text-center">Home</button>
        <button className="flex-1 text-center">Order</button>
        <button className="flex-1 text-center">Cart</button>
      </nav>
    </div>
  )
}
