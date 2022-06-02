import Header from "../components/Header";


export default function UserPage() {
  return (
    <div>
        <Header text='welcome to your page' />
        <div className="flex items-center min-h-screen justify-center gap-10 p-2">
            <div className="border-2">
                <p>manage transaction</p>
                <p>manage your transactions here</p>
            </div>
            <div className="border-2">
                <p>manage credit</p>
                <p>manage your credit here</p>
            </div>
        </div>
    </div>
  )
}
