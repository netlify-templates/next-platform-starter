'use client';

export function FeedbackForm() {
    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
      
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        console.log("done!")
      };

    return (
        <form name="feedback" onSubmit={handleFormSubmit} 
            className="text-black flex flex-col gap-3 max-w-xs">
            <input type="hidden" name="form-name" value="feedback" />
            <input name="name" type="text" className="input input-bordered w-full max-w-xs"/>
            <input name="email" type="text" className="input input-bordered w-full max-w-xs"/>
            <input name="message" type="text" className="input input-bordered w-full" />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}
