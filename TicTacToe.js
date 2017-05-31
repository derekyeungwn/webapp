import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import './TicTacToe.css';


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

//Funtional Component
function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

function SquareHighlighted(props) {
  return (
    <button className="square2" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  renderSquareHighlighted(i) {
    return <SquareHighlighted value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  constructCol(i){
    const colnum = 3;
    const line = this.props.line;
    var tmp = [];
    for (let y=i; y<i+colnum; y++){
      if (line && (y===line[0] || y===line[1] || y===line[2])){
        tmp.push(this.renderSquareHighlighted(y));
      }else{
        tmp.push(this.renderSquare(y));
      }
    }
    return tmp;
  }
  constructRow(){
    const rownum = 3;
    var tmp = [];
    for (let i=0; i<rownum; i++){
      tmp.push(<div className="board-row">{this.constructCol(i*rownum)}</div>);
    }
    return tmp;
  }
  render() {
    return (
      <div>
        {this.constructRow()}
      </div>
    );
  }
}

class TicTacToeApp extends Component {
  constructor() {
    super();
    this.state = {
    history: [{
      squares: Array(9).fill(null)
    }],
      xIsNext: true,
      stepNumber: 0,
      isAsc: true,
    };
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  handleToggle() {
    this.setState({
      isAsc: !this.state.isAsc,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + current.squares[winner[0]];
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    const moves = history.map((step, move) => {
      move = this.state.isAsc ? move : history.length - 1 - move;
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          {(move === this.state.stepNumber) ?
            <a href="#" onClick={() => this.jumpTo(move)}><b>{desc}</b></a> :
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>}
        </li>
      );
    })
    return (
        <div className="game">
          <div className="game-board">
            <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            line={winner}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          <div>
            <Toggle label="" onToggle={() => this.handleToggle()}/>
          </div>
        </div>
    );
  }
}

export default TicTacToeApp;
