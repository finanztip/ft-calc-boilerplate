export default function TestCalculator() {
  const handleCick = () => {
    alert('You just clicked me!')
  }

  return (
    <div>
      <p>Click the button to see the secret message</p>
      <button onClick={handleCick}>Click me</button>
    </div>
  )
}
