import './App.scss';
import React from 'react';

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : "",
      author: "",
    };
    this.quoteArray = [
      {
        quote: "Either you run the day, or the day runs you.", 
        author: "Jim Rohn",
      },
      {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
      },
      {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
      },
      {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
      },
      {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
      },
      {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
      },
      {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
      },
      {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
      },
    ];
    this.getNewQuote = this.getNewQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.handleClick();
  }
  getNewQuote() {
    console.log("Enter getNewQuote()");
    const randIndex = Math.floor(Math.random() * 10) % this.quoteArray.length;
    const quoteObj = this.quoteArray.at(randIndex);
    console.log(quoteObj);
    return quoteObj;
  }
  handleClick() {
    const quoteObj = this.getNewQuote();
    this.setState({
      quote : quoteObj.quote,
      author: quoteObj.author,
    });
  }
  render() {
    return (
      <div id="quote-box">
        <Quote text={this.state.quote} author={this.state.author}/>
        <ButtonLayout onClick={this.handleClick} />
      </div>
    );
  };
}

class Quote extends React.Component {
  render() {
    return (
      <div class='center'>
        <i id="text">{this.props.text}</i>
        <br />
        <i id="author">- {this.props.author}</i>
      </div>
    );
  }
}

class ButtonLayout extends React.Component {
  render() {
    return (
      <div class='bottom'>
        <button onClick={this.props.onClick}  id="new-quote" class="btn btn-primary">New Quote</button>
        <a href="twitter.com/intent/tweet" target="_top" id="tweet-quote" class="fa fa-twitter">twitter</a>
      </div>
    );
  }
}

function App() {
  return (
    <QuoteContainer/>
  );
}

export default App;
