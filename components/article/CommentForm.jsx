const CommentForm = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <form className="form-contact contact_form mb-80" method="post">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100 error"
                  name="message"
                  id="message"
                  cols={30}
                  rows={4}
                  placeholder="Enter Message"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control error"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control error"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  className="form-control error"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="button boxed-btn"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
