
function Form() {
  return (
    <>
    <form>
        <div className="mb-3">
            <label htmlFor="shopName">shop name</label>
            <input type="text" name="shopName" id="shopName" />
        </div>
        <div className="mb-3">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="phoneNumber">phone number</label>
            <input type="number" name="number" id="number" />
        </div>
        <div className="mb-3">
            <label htmlFor="address">address</label>
            <input type="text" name="address" id="address" />
        </div>
        <div className="mb-3">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
        </div>
    </form>
    </>
  )
}

export default Form