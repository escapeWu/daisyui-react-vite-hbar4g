import './grid2.css';

function Grid2() {
  return (
    <div class="wrapper">
        <div class="item1 border">Start column line 1, span 3 column tracks.</div>
        <div class="item2 border">
            Start column line 6, span 4 column tracks. 2 row tracks.
        </div>
        <div class="item3 border">Start row 2 column line 2, span 2 column tracks.</div>
        <div class="item4 border">
            Start at column line 3, span to the end of the grid (-1).
        </div>
    </div>

  );
}

export default Grid2;
