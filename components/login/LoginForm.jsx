const LoginForm = () => {
  return (
    <div className="col-lg-6">
      <div className="login_part_form">
        <div className="login_part_form_iner">
          <h3>
            Welcome Back ! <br />
            Please Sign in now
          </h3>
          <form className="row contact_form" action="#" method="post">
            <div className="col-md-12 form-group p_star">
              <input type="text" className="form-control" id="name" name="name" defaultValue placeholder="Username" />
            </div>
            <div className="col-md-12 form-group p_star">
              <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Password" />
            </div>
            <div className="col-md-12 form-group">
              <div className="creat_account d-flex align-items-center">
                <input type="checkbox" id="f-option" name="selector" />
                <label htmlFor="f-option">Remember me</label>
              </div>
              <button type="submit" value="submit" className="btn_3">
                log in
              </button>
              <a className="lost_pass" href="#">forget password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginForm