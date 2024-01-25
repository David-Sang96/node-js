const http = require("http");
const port = 3010;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  res.write(
    " <h1>Hello Node js</h1> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cum est natus labore beatae quae blanditiis ex, perferendis alias quisquam similique debitis sunt tenetur veniam repudiandae sed velit laboriosam omnis asperiores modi deleniti aspernatur. A magnam, cupiditate ipsam reprehenderit nam, ullam corporis nesciunt dolor maxime aperiam saepe modi hic laboriosam nihil. Ipsum eum hic sed? Neque deleniti inventore provident et possimus repellat, eaque dolorum veritatis distinctio pariatur accusamus debitis eligendi! Doloribus mollitia culpa nihil atque odit assumenda, rerum sed error accusamus, reprehenderit similique earum nemo ex deleniti nam doloremque impedit. Dolores repellat voluptatibus facere sed culpa at necessitatibus quasi porro.</p>"
  );
  res.end();
});

server.listen(port, "localhost", () => {
  console.log("server listening on port 3010");
});
