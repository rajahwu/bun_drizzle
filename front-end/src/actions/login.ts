import { redirect } from "react-router-dom";
import { createLanguageService } from "typescript";

export async function action({request}) {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    const errors = {}

    if(typeof username !== "string") {
        errors.username = "Please use valid characters"
    }

    if(typeof username !== "string" || username.length < 5) {
        "Username must be atleast five characters"
    }

    if (typeof password !== "string" || password.length < 6) {
        errors.password = "Password must be > 6 characters";
      }

      if(Object.keys(errors).length) {
        return errors
      }

      console.log({user: {username, password}})
      return redirect("/dashboard")
}
