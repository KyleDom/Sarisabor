import Head from 'next/head'

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Head>
        <title>Order Summary - Sari Sabor</title>
      </Head>
      <div className="flex flex-col items-center p-4">
        <img src="/logo.png" alt="Sari Sabor" className="w-1/2" />
        <div className="mt-4 w-full flex flex-col items-center">
          <div className="w-1/2 bg-white p-2">
            <h2>Delivery Address</h2>
            <p>Recipient: John Doe</p>
            <p>Phone Number: 09213456781</p>
            <h2 className="mt-4">Order Summary</h2>
            <div className="flex justify-between">
              <div>
                <img src="/productA.png" alt="Product A" className="w-1/2" />
                <p>Product A - Quantity: 2</p>
              </div>
              <div>
                <img src="/productB.png" alt="Product B" className="w-1/2" />
                <p>Product B - Quantity: 1</p>
              </div>
            </div>
            <div className="mt-4">
              <p>Order Total: ₱360</p>
              <p>Shipping Fee: ₱20</p>
              <p>Total: ₱380</p>
            </div>
            <button className="bg-red-500 text-white p-2 mt-4">Confirm</button>
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
