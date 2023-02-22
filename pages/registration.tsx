export default function Registration() {
  return (<>
  <form action="http://sportgym/auth/register" method="post" encType="multipart/form-data">
    <div>
      <label>Name</label>
      <input className="square border border-black" type="text" name ="name" id="name"></input>
    </div>
    <div>
      <label>Password</label>
      <input className="square border border-black" type="text" name ="password" id="password"></input>
    </div>
    <div>
      <label>Avater</label>
      <input className="square border border-black" type="file" name ="avatar" id="avatar"></input>
    </div>
    <button type="submit" value="Submit">submit</button>
  </form>
  </>);
}
