<!-- irb(main):001:0> greetings = Gre
(irb):1:in `<main>': uninitialized constant Gre (NameError)
irb(main):002:0> greetings = Greeting.create(sentence: 'hello man')
  TRANSACTION (0.4ms)  BEGIN
  Greeting Create (51.8ms)  INSERT INTO "greetings" ("sentence", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["sentence", "hello man"], ["created_at", "2023-07-11 10:34:01.863912"], ["updated_at", "2023-07-11 10:34:01.863912"]]
  TRANSACTION (70.8ms)  COMMIT
=> 
#<Greeting:0x000055d6f845aa18
... -->

<!-- Fix bugs yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader --dev
yarn add v1.22.19 -->

<div align="center">

  <h3><b>HELLO-RAILS-REACT</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 HELLO-RAILS-REACT <a name="about-project"></a>

**HELLO-RAILS-REACT** is web app which displays random greetings from the database

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> [Ruby on Rails](https://guides.rubyonrails.org/) (simplify as Rails) is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing.

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://guides.rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Greetings message**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- [Ruby and Rails on you operating system eg. for  Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-20-04)
- [Node.js](https://nodejs.dev/en/) installed
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [PostgreSQL](https://www.postgresql.org/) database installed

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git https://github.com/josuerushanika/hello_rails_frontend.git
```

### Install

Install this project with:

```sh
  cd hello_rails_react

  bundle install
```

### Usage

To run the project, execute the following command:

```sh
  ./bin/dev
```

### Run tests

To run tests, run the following command:

```sh
  bin/rails rspec spec
```

### Deployment

You can deploy this project using:

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Josue Rushanika**

- GitHub: [@githubhandle](https://github.com/josuerushanika)
- Twitter: [@twitterhandle](https://twitter.com/josuerushanika)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/josue-rushanika-336049b3/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [x] API authentication
- [x] API documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page]().

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly give me a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank [Microverse](https://www.microverse.org/) for inspiring this project
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **Is Rails still relevant?**

  - [Yes, Rails is still popular among developer](https://blog.railwaymen.org/is-ruby-on-rails-dead)

- **Is it easy to learn Ruby on Rails**

  - [It is very easy to learn compared to most of the programming languages](https://careerkarma.com/blog/why-learn-ruby-on-rails/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
