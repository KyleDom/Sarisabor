import Head from 'next/head'

export default function Order() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Head>
        <title>Order - Sari Sabor</title>
      </Head>
      <div className="flex flex-col items-center p-4">
        <img src="/logo.png" alt="Sari Sabor" className="w-1/2" />
        <div className="mt-4 w-full flex flex-col items-center">
          <div className="w-1/2 bg-white p-2">
            <div className="flex justify-between">
              <div>
                <img src="/productA.png" alt="Product A" className="w-1/2" />
                <p>Product A - ₱80</p>
              </div>
              <div>
                <img src="/productB.png" alt="Product B" className="w-1/2" />
                <p>Product B - ₱100</p>
              </div>
            </div>
            <form className="mt-4">
              <label>Name: <input type="text" name="name" className="border p-1 w-full" /></label>
              <label>Address: <input type="text" name="address" className="border p-1 w-full mt-2" /></label>
              <label>Phone: <input type="text" name="phone" className="border p-1 w-full mt-2" /></label>
              <div className="flex items-center mt-2">
                <label>Quantity:</label>
                <input type="number" name="quantity" className="border p-1 w-16 ml-2" />
              </div>
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-500 text-white p-2">Add to Cart</button>
                <button type="submit" className="bg-red-500 text-white p-2">Pay Now</button>
              </div>
            </form>
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
