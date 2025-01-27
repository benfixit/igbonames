import Layout from "../Layout";
import "./NameForm.css";

const NameForm = () => {
  return (
        <section className="name_form_wrapper">
        <form method="POST" className="name_form">
            <div>
                <label>Title <em>(required)</em></label>
                <input name="title" type="text" required />
            </div>
            <div>
                <label>Meaning <em>(required)</em></label>
                <textarea name="meaning" rows="5" required></textarea>
            </div>
            <div>
                <label>Extended Meaning</label>
                <textarea name="extended_meaning" rows="5"></textarea>
            </div>
            <div>
                <label>Email <em>(required)</em></label>
                <input name="poster" type="email" required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
  )
}

export default NameForm
