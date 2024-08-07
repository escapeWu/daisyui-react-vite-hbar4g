import './grid1.css';

function Grid1() {
  return (
    <div class="wrapper1">
    <header class="main-head">The header - 使用网格模板区域</header>
    <nav class="main-nav">
      <ul>
        <li><a href="">Nav 1</a></li>
        <li><a href="">Nav 2</a></li>
        <li><a href="">Nav 3</a></li>
      </ul>
    </nav>
    <article class="content">
      <h1>Main article area</h1>
      <p>
        In this layout, we display the areas in source order for any screen less
        that 500 pixels wide. We go to a two column layout, and then to a three
        column layout by redefining the grid, and the placement of items on the
        grid.
      </p>
    </article>
    <aside class="side">Sidebar</aside>
    <div class="ad">Advertising</div>
    <footer class="main-footer">The footer</footer>
  </div>
  );
}

export default Grid1;