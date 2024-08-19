
const blogData = [
    {
        id: "Introduction to react.js",
        title : "Introduction to react.js",
        description : "Tauri is a framework for building tiny, fast, and secure native applications using web technologies like HTML, CSS, and JavaScript. Unlike Electron, which bundles an entire Chromium instance, Tauri uses the native WebView provided by the operating system. This results in significantly smaller bundle sizes and better performance JavaScript has become more popular over the past few years. It is used to handle all of an app's views, whether it's a web app or a mobile app. It's also used to reuse user interface (UI) parts. ReactJS lets programmers build web apps that can change data without reloading the page. The best thing about ReactJS is that it is easy to use, and quick. It is also the same as a view in an MVC template. Most of the time, it works like a group of JavaScript libraries or frameworks.ReactJS's primary goal is to make user interfaces (UI) that make apps load faster. It also uses virtual DOM (JavaScript object), which also helps the ReactJS app run faster. In JavaScript, the virtual DOM is faster than the real DOM. ReactJS can be used on both the server and client-server sides, as well as with other frameworks. It uses data patterns and components to make the code easier to read and make app maintenance easier",
        author : {
            name : "Jordan Walke",
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTNRbGASMtlDp4HU0W8Uv8j8dWjylyV37Ck-8VvjUu_aGRrmgQJ2IAcsjN46Ode2WSKU&usqp=CAU"
        },
        date : "2020-12-12",
        image: 'https://asperbrothers.com/wp-content/uploads/2021/05/Jordan-Walke-React-300x168.png'
    },
    {
        id: "Introduction to TypeScript",
        title: "Introduction to TypeScript",
        description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static types, interfaces, and type inference to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.In JavaScript, all primitive values (apart from null and undefined) have object equivalents that wrap around the primitive values. These wrapper objects are String, Number, BigInt, Boolean, and Symbol. These wrapper objects provide the methods that allow the primitive values to be manipulated For those that have never studied primitive vs reference types, let's discuss the fundamental difference.If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value. Each primitive value is stored in a unique location in memory.If we have two variables, x and y, and they both contain primitive data, then they are completely independent of each other",
        author: {
            name: "Daniel Rosenwasser",
            "avatar": 'https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp'
        },
        date: "2024-07-04",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohKI64k7eDFfrjV2eglAFcNZFZpzq2wR2K4QelBBpEU9E_Pebnkn98lQzQI8QFXmdJsY&usqp=CAU'
    },
    {
        id:'Introduction of Express.js',
        title: "Introduction of Express.js",
        description: "What Is Express JS? Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes. Express is a versatile, unopinionated, and minimalistic web framework for building scalable and robust backend applications in Node.js. Over time, it has become so popular that most resources about Node.js actually refer to Express.Let’s now take a step back and explore its history before seeing how it works and how to get started with it.Express.js history: From zero to heroThe history of Express began in 2010, during the early days of Node.js. While Node.js brought JavaScript to server-side programming with an asynchronous and event-driven approach, it lacked key features like routing, templating, middleware, and robust error handling.Legendary open source developer TJ Holowaychuk decided to make the first move. Inspired by the Ruby philosophy embodied in Sinatra, he sought to create a web framework that was both simple and expressive. He borrowed some concepts from other web frameworks and created Express.As the Node.js ecosystem flourished, so did Express. In 2014, the management rights of the technology were acquired by StrongLoop, which caused discontent and concerns about the project becoming more commercially oriented.In response, some developers forked Express to create alternative frameworks like Koa. StrongLoop was later acquired by IBM in 2015, which decided to place Express in the Node.js Foundation incubator to ensure long-term sustainability and community involvement.Express gained popularity and has become a cornerstone of the MEAN, MERN, and MEVN stacks. Since the release of its fourth major version, Express.js has undergone significant enhancements. Version 4 introduced a new router, improved error handling, and a more modular architecture.The community is currently working on Express 5, which will introduce features like native support for promises and async/await programming.",
        author: {
            name: "TJ Holowaychuk",
            avatar: 'https://media.licdn.com/dms/image/D4D12AQFutpP9wVAeIg/article-cover_image-shrink_720_1280/0/1718341193276?e=2147483647&v=beta&t=8X3RDhzzdTLAdZ_MMn4Se9_ojxGY0s4_7bgGVYKIaYA'
        },
        date: "5 Oct 2023",
        image : 'https://danielpecos.com/assets/2013/12/ryan_dahl-300x172.jpg'
    },
    {
        id: 'Exploring Svelte',
        title: "Exploring Svelte",
        description: "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. This means you can write your code in a more declarative way and ship less code to the browser. What is Svelte and SvelteKit? Svelte is a component library like React, and SvelteKit is the app framework like Next.js. While similar, the reason Svelte stands apart from React is because it provides a different way to think about web apps.React uses virtual DOM diffing to decide the changes needed to update a UI, but Svelte is a compiler, which compiles your code and converts the Svelte components into JavaScript to render and update them, making it faster and lighter.SvelteKit then does all the heavy lifting of setting up an app with server-side rendering, routing, and more, just like Next.js. However, SvelteKit also uses an adapter that can export your app to a specific platform and adapts well to serverless architecture. Since serverless architecture is becoming more prominent, it’s a good reason to try SvelteKit out.You can use the official SvelteKit adapters for platforms like Netlify and Vercel.By also providing features including server-side rendering, code splitting, and more, SvelteKit is especially useful for beginnings.With that, let’s see how we can create a new project with SvelteKit.Setting up SvelteKit Before we code an example app, we’ll play with the demo app that you get when you create a new project with SvelteKit and review some key concepts that will familiarize you with the framework.Installation Begin with inputting the following code snippet into a terminal. This will set up an app in the current directory.",
        author: {
            name: "Rich Harris",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN4RuuCBMrng9Lm97v8s4KFwmpGPSveB60MtCvufryvAuVSClWsJs7CDCpYyYftbVy40&usqp=CAU'
        },
        date: "2024-07-02",
        image : 'https://static.frontendmasters.com/assets/courses/2023-06-13-sveltekit/posterframe.webp'
    },
    {
        id: 'Mastering Angular',
        title: "Mastering Angular",
        description: "Angular is a platform for building mobile and desktop web applications. It provides a robust framework that includes everything developers need to create, build, test, and deploy web applications. Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve development challenges.When I first started learning Angular, I had some experience with web development and had used other technologies like HTML, CSS, JavaScript, and JQuery. However, I found it difficult to understand the official documentation and follow along with tutorials. I often felt overwhelmed trying to connect all the pieces and remember what I had learned.But after working with Angular for over a year and a half, I’ve come to appreciate its power and flexibility. I’ve seen the community continue to improve and evolve Angular, making it an even more exciting tool to work with.If you’re new to Angular, don’t worry — you’re not too late to the game. You’ll be able to avoid many of the breaking changes and manual configurations that earlier versions required. And if you’re already familiar with Angular, our list of resources may help you discover something new.We recommend starting with the basics of JavaScript, HTML, and CSS for front-end development, and a backend framework before diving into Angular. And remember, learning is always more fun with a team! Feel free to share your own experiences and learning paths to help others navigate the steep learning curve of Angular",
        author: {
            name: "Miško Hevery",
            avatar: 'https://miro.medium.com/v2/resize:fit:1200/1*lhfGTouqSQ-fx7PRXaFI-Q.png'
        },
        date: "2024-07-01",
        image : 'https://asperbrothers.com/wp-content/uploads/2021/05/Mis%CC%81ko-Heveryangular-.jpg'
    },
    {
        id: 'Mongo DB',
        title: "Mongo DB",
        description: "Even for those of us who work in AI, keeping up with the latest news in the AI space can be head-spinning. In just the last few weeks, OpenAI introduced their newest model (GPT-4o), Anthropic continued to develop Claude with the launch of Claude 3.5 Sonnet, and Mistral launched Mixtral 8x22B, their most efficient open model to date. And those are only a handful of recent releases!In such an ever-changing space, partnerships are critical to combining the strengths of organizations to create solutions that would be challenging to develop independently. Also, it can be overwhelming for any one business to keep track of so much change. So there’s a lot of value in partnering with industry leaders and new players alike to bring the latest innovations to customers.I’ve been at MongoDB for less than a year, but in that time our team has already built dozens of strategic partnerships that are helping companies and developers build AI applications faster and safer. I love to see these collaborations take off!A compelling example is MongoDB’s recent work with Vercel. Our team developed an exciting sample application that allows users to deploy a retrieval-augmented generation (RAG) application on Vercel in just a few minutes. By leveraging a MongoDB URI and an OpenAI key, users can one-click deploy this application on Vercel.Another recent collaboration was with Netlify. Our team also developed a starter template that implements a RAG chatbot on top of their platform using LangChain and MongoDB Atlas Vector Search capabilities for storing and searching the knowledge base that powers the chatbot's responses.These examples demonstrate the power of combining MongoDB's robust database capabilities with other deployment platforms. They also show how quickly and efficiently users can set up fully functional RAG applications, and highlight the significant advantages that partnerships bring to the AI ecosystem.And the best part? We’re just getting started! Stay tuned for more information about the MongoDB AI Applications Program later this month.Welcoming new AI partners Speaking of partnerships, in June we welcomed seven AI partners that offer product integrations with MongoDB. Read on to learn more about each great new partner",
        author: {
            name: "Kevin P",
            avatar:'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png'
        },
        date: "2024-06-30",
        image : "https://webassets.mongodb.com/_com_assets/cms/Semih%20Korkmaz;%20Hantz%20F%C3%A9vry;%20Pierre%20Mombeleur-w14mojvg3k.jpg"
    }]

export default blogData