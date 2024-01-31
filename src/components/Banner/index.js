export default function Banner({ firstName = "Elisson" }) {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-xl font-medium mb-4">Olá {firstName}!</h1>
      </div>
    </>
  )
}