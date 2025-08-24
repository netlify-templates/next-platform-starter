            ContactPage() {
   [submitted, setSubmitted] = useState(false);
 [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;
   handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    constdata = newFormData();
    data.set("name", formData.name || "Kholoud Khaled");
    data.set("email", formData.email || "kholood@example.com");
    data.set("message", formData.message || "مرحبًا! هذه رسالة تجربة من خلود. 💖");

 postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert("حدث خطأ: " + err));
  };

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert("حدث خطأ: " + err));
  };

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;
 fillAndSend = () => {
    setFormData({getNetlifyContext();
    // ابعت البيانات مباشرة بعد الملء
     data =  FormData();
    data.set("name", "Kholoud Khaled");
    data.set("email", "kholood@example.com");
    data.set("message", "مرحبًا! هذه رسالة تجربة من خلود. 💖");

exportdefaultfunctionPage() {
    fetch("/", { method: "POST", body: data })
      .then(() => setSubmitted(true))
      .catch((err) => alert("حدث خطأ: " + err));
  };

  i (submitted) {
    retur (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Netlify Platform Starter - Next.js</h1>
                <p className="mb-6 text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg sm:min-w-64">
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </div>
      <div className="max-w-md mx-auto p-6 bg-green-100 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">✅ شكراً!</h1>
        <p className="text-div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">اتركي ملاحظتك</h1>

      <button
        type="button"
        onClick={fillAndSend}
        className="mb-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
      >
        إرسال رسالة تجربة تلقائيًا
      </button>

      <form
        name="feedback"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="feedback" />

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border rounded p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني (اختياري)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border rounded p-2"
        />

        <textarea
          name="message"
          placeholder="الرسالة"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border rounded p-2 h-32"
        ></textarea>button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
              }  <button
    type="button"
    onClick={fillAndSend}
    className="mb-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
  >
    إرسال رسالة تجربة تلقائيًا
  </button>

  <form
    name="feedback"
    method="POST"
    data-netlify="true"
    onSubmit={handleSubmit}
    className="flex flex-col gap-4"
  >
    <input type="hidden" name="form-name" value="feedback" />

    <input
      type="text"
      name="name"
      placeholder="الاسم"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="border rounded p-2"
    />

    <input
      type="email"
      name="email"
      placeholder="البريد الإلكتروني (اختياري)"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="border rounded p-2"
    />

    <textarea
      name="message"
      placeholder="الرسالة"
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      className="border rounded p-2 h-32"
    ></textarea>button
      type="submit"
      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
    >
      إرسال
    </button>
  </form>
</div>
