import React from "react";
import slugify from "slugify";
import axios from "axios";

import "./NameForm.css";


const NameForm = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: Record<string, unknown> = {
            title: event.target.title.value,
            meaning: event.target.meaning.value,
            extended_meaning: event.target.extended_meaning.value,
            poster: event.target.poster.value,
            slug: slugify(event.target.title.value)
        };

        // submit the data
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/names/create`, { ...formData });


        console.log("response >> ", response)
    }

  return (
        <section className="name_form_wrapper">
        <form method="POST" className="name_form" onSubmit={handleSubmit}>
            <div>
                <label>Title <em>(required)</em></label>
                <input name="title" type="text" required />
            </div>
            <div>
                <label>Meaning <em>(required)</em></label>
                <textarea name="meaning" rows={5} required></textarea>
            </div>
            <div>
                <label>Extended Meaning</label>
                <textarea name="extended_meaning" rows={5}></textarea>
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
