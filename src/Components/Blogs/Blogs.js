import React from "react";
import { FaQuestion } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="container full-height bg-light p-3 my-5 border">
      <div>
        <h4 className="inventory-header mt-4 mb-2">
          <FaQuestion className="icon" /> Difference between javascript and
          Nodejs?
        </h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">javascript</th>
              <th scope="col">nodejs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>javascript is a programming language</td>
              <td>
                It is aRuntime environment that use several libraries to easily
                access js programs
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Client side scripting language</td>
              <td>Server side scripting language</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>It is capable to add HTML and perform dom operations</td>
              <td>Not Capable to add HTML</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Perform os specific non blocking task</td>
              <td>It can perform non blocking task unique to the os</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="inventory-header mt-5 mb-2">
          <FaQuestion className="icon" /> When should you use nodejs and when
          should you use mongodb?
        </h4>
        <p className="p-2">
          Mongodb database can be used for documents as collections where
          different collection can have different data structure. This database
          can use for sore data more flexible.
        </p>
        <p className="p-2">
          Nodejs s a server environment which used for connect the mongodb or
          mysql database
        </p>
      </div>
      <div>
        <h4 className="inventory-header mt-5 mb-2">
          <FaQuestion className="icon" /> Differences between sql and nosql
          databases?
        </h4>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">sql</th>
              <th scope="col">nosql</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                Open source relational dbms which is more Secure and structured
              </td>
              <td>
                It is an Open source database which use json like documents that
                is very flexible to use
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Store as row of table</td>
              <td>
                Each Record store as document, group of document stored as
                collection
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                Not possible to store different structure structured data inside
                same collection table
              </td>
              <td>
                Different document of a collection can have different data
                structure
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="inventory-header mt-5 mb-2">
          <FaQuestion className="icon" /> What is the purpose of jwt and how
          does it work
        </h4>
        <p className="pt-2">
          Json web token securely transmits information from client to server to
          prevent unauthorized access to data. It is mainly used for
          authorization(what a user can do, activities of users), not
          authentication.
        </p>
        <h6 className="p-2"> jwt working process:</h6>
        <ul className="mb-5">
          <li>Client login with username and password</li>
          <li>
            Server creates a token(consist of header,payload,signature part) for
            the user and send it to cilent
          </li>
          <li>
            Client store the token on either localStorage or browser cookie
          </li>
          <li>
            Next time client makes a request a copy of the token is send to the
            server for authorization
          </li>
          <li>Server verify the token signature to give authorization</li>
          <li>Server send response</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
