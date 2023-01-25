// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/css/style.css";
import Header from "../components/Header";



function App() {
  const text = "const obj = {name:Hello World Object}";
  const text1 = `const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] Show these in seperate tags `;
  const text2 = `const complex = [{company: 'XYZ', jobs: ['Javascript,' 'React']}, {company: 'ABC', jobs: ['AngularJs' 'Ionic']}]`;

  const name = "Hello World";
  const obj = {
    name1: "Hello World Object",
  };
  const arr = ["We", "are", "United"];

  const arr1 = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];

  const arr2 = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];

  const newarr1 = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      userId: 2,
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      userId: 2,
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
  ];

  const newarr2 = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];

  return (
    <>
      {/* <h1>{name}</h1> */}
      <Header />
      <div className="container my-5">
        <h1 className="my-2">It's All About React</h1>
        <span>Assignment (1)</span>
        <Accordion className="mt-3" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>What is React</h4>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                React.js was released by a software engineer working for
                Facebook – Jordane Walke in 2011. React is a JavaScript library
                focused on creating declarative user interfaces (UIs) using a
                component-based concept. It’s used for handling the view layer
                and can be used for web and mobile apps. React’s main goal is to
                be extensive, fast, declarative, flexible, and simple.
                <br />
                React is not a framework, it is specifically a library. The
                explanation for this is that React only deals with rendering UIs
                and reserves many things at the discretion of individual
                projects. The standard set of tools for creating an application
                using ReactJS is frequently called the stack.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>SPA V/S MPA</h5>
            </Accordion.Header>
            <Accordion.Body>
              <table>
                <tr>
                  <th>Single Page Application</th>
                  <th>Multi Page Application</th>
                </tr>
                <tr>
                  <td>
                    Single Page applications is Faster and responsible front-end
                    built.
                  </td>
                  <td>
                    Multi-Page Application is an app that has more than one page
                    with static information
                  </td>
                  {/* All the resources are loaded during one session */}
                </tr>
                <tr>
                  <td>
                    All the resources are loaded during one session, and then
                    when interacting with the page.
                  </td>
                  <td>
                    From one page to another, a browser reloads the content of a
                    page completely and downloads the resources again.
                  </td>
                </tr>
                <tr>
                  <td>
                    Most of the SPAs are developed using React, Vue.js, and
                    AngularJS, which is based on Google chrome.
                  </td>
                  <td>
                    Most of the MPAs are developed using HTML, CSS, and
                    Javascript, which is based on Google chrome.
                  </td>
                </tr>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>React V/S Angular</h5>
            </Accordion.Header>
            <Accordion.Body>
              <table className="w-100" cellPadding={12} cellSpacing={12}>
                <tr>
                  <th>React</th>
                  <th>Angular</th>
                </tr>
                <tr>
                  <td>ReactJS architecture is simplified.</td>
                  <td>Angular architecture is a bit Complex.</td>
                </tr>
                <tr>
                  <td>ReactJS is written in Javascript Language</td>
                  <td>Angular is written in TypeScript Language</td>
                </tr>
                <tr>
                  <td>The Latest version of Angular is 18.0.</td>
                  <td>The Latest version of Angular is 14.</td>
                </tr>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h5>Library V/S Framework</h5>
            </Accordion.Header>
            <Accordion.Body>
              <table className="w-100" cellPadding={12} cellSpacing={12}>
                <tr>
                  <th>Library</th>
                  <th>Framework</th>
                </tr>
                <tr>
                  <td>
                    LIbrary is a collection of higher function modules and
                    objects
                  </td>
                  <td>It is a collection of lots of libraries and APIs</td>
                </tr>
                <tr>
                  <td>You have full control on modfication and all.</td>
                  <td>
                    Framework has a default behaviour and gives you less control
                    on modification.
                  </td>
                </tr>
                <tr>
                  <td>
                    They are important in program linking and building process.
                  </td>
                  <td>
                    They provide a proper standard way to build and deploy
                    programs
                  </td>
                </tr>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h5>Real DOM V/S Virtual DOM</h5>
            </Accordion.Header>
            <Accordion.Body>
              <table className="w-100" cellPadding={12} cellSpacing={12}>
                <tr>
                  <th>Real DOM</th>
                  <th>Virtual DOM</th>
                </tr>
                <tr>
                  <td>DOM manipulation is very expensive.</td>
                  <td>DOM manipulation is very easy.</td>
                </tr>
                <tr>
                  <td>It can directly update HTML.</td>
                  <td>It can’t update HTML directly.</td>
                </tr>
                <tr>
                  <td>It represents the Ul of your application.</td>
                  <td>It is only a virtual representation of the DOM.</td>
                </tr>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="container my-5">
        <h1 className="my-2">It's All About React</h1>
        <span>Assignment (2)</span>
        <Accordion className="mt-3" defaultActiveKey="0">
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h5>
                Render these into component: <br /> const name = "Hello World";
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <h3>{name}</h3>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <h5>
                Render these into component: <br /> {text}{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <h3>{obj.name1}</h3>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <h5>
                Render these into component: <br /> const data = ['We', 'are',
                'United'] //Show these in seperate tags{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <ul>
                  {arr.map((value, index) => {
                    return (
                      <>
                        <li>{value} </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h5>{text1}</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <ul>
                  {arr1.map((value, index) => {
                    return (
                      <>
                        <li>{value.name} </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <h5>{text2}</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <ul>
                  {arr2.map((value, index) => {
                    return (
                      <>
                        <li>{value.company} </li>
                        {value.jobs.map((j, i) => (
                          <li>{j} </li>
                        ))}
                      </>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <h5>Copy array from the link</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <ul>
                  {newarr1.map((value, index) => {
                    return <li>{value.id + " " + value.title}</li>;
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <h5>Copy array from the link</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <ul>
                  {newarr2.map((value, index) => {
                    return <li>{value.id + " " + value.name}</li>;
                  })}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default App;
