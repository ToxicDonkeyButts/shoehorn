export default () =>
<div>
  <style jsx>{`
    body {
      margin: 0;
      font-family: sans-serif;
    }
    p {
      color: #222;
    }
    header {
      background-color: white;
      padding: 15px 4%;
    }
    header p {
      margin: 0;
      padding: 10px;
      border: 2px solid #222;
      display: inline-block;
      font-weight: bold;
    }
    .hero {
      padding: 0 4%;
    }
    .hero img {
      width: 100%;
      height: 470px;
      object-fit: cover;
    }
    .container {
      max-width: 1200px;
      padding: 0 4%;
      margin: 50px auto;
    }
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .flex-text {
      margin-right: 20px;
    }
  `}</style>
  <header>
    <p>Shoehorn</p>
  </header>
  <div className="hero">
    <img src="https://unsplash.it/1200/300/?random" />
  </div>
  <div className="container">
    <div className="flex">
      <div className="flex-text">
        <h2>Hjælp dig selv og andre.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis vel eros vestibulum congue posuere quis orci. Curabitur elementum luctus eleifend. Integer congue et mauris at condimentum. Proin egestas nisl ac ipsum pharetra, eget laoreet augue congue. Cras varius mauris erat, a aliquam nunc condimentum et. Vivamus condimentum, felis vel pulvinar hendrerit, nisl dui blandit dui, vel malesuada velit sapien sed felis. Praesent porta vestibulum sapien, a feugiat leo. Sed ac tristique tellus. Fusce tempor nec arcu ac finibus. Etiam in congue leo. Quisque rutrum mi ut augue tincidunt, id sollicitudin ipsum hendrerit.</p>
      </div>
      <img src="https://unsplash.it/500/300/?random" />
    </div>
    
  </div>
</div>
