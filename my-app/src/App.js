import React from 'react';
import ReactDOM from 'react-dom'

//random quote machine
const quotes = [
  {
    id: 0,
    quote:
      "If you feel like crying you should not hold back your tears. You should let it all out while you still can – because when you get bigger sometimes you can’t cry even if you have something to cry about.",
    author: "Tomoya Okazaki",
  },
  {
    id: 1,
    quote: "You are who you are. You have to do what you can.",
    author: "Tomoya Okazaki",
  },
  {
    id: 2,
    quote:
      "Nothing can stay unchanged. Fun things… Happy things… They can’t possibly remain the same.",
    author: "Nagisa Furukawa",
  },
  {
    id: 3,
    quote:
      "No matter how cold and distant people may become, on the inside something warm and precious always remains, something that never changes. To me, that’s what family is like.",
    author: "Tomoyo Sakagami",
  },
  {
    id: 4,
    quote: "Time and titles do not matter in the bonds between people.",
    author: "Tomoyo Sakagami",
  },
  {
    id: 5,
    quote:
      "Love is like a firework from the past… it’s more beautiful for it to go to pieces and scatter far off.",
    author: "Shima Katsuki",
  },
  {
    id: 6,
    quote:
      "If the results come true, it’s as if there’s only one future. If it fails, we can think that other futures exist… I want to believe that in our future there are many possibilities waiting.",
    author: "Kyou Fujibayashi",
  },
  {
    id: 7,
    quote: "If your life can change once, your life can change again.",
    author: "Sanae Furukawa",
  },
  {
    id: 8,
    quote:
      "If you have time to fantasize about a beautiful end, then just live beautifully 'til the end.",
    author: "Gintoki Sakata",
  },
  {
    id: 9,
    quote: "Honest feelings can sometimes lead to cruel endings.",
    author: "Gintoki Sakata",
  },
  {
    id: 10,
    quote:
      "There's no short-cut to becoming strong. Even if you try to look strong on the outside, that thin layer will soon fall off.",
    author: "Shimura Shinpachi",
  },
  {
    id: 11,
    quote: "Some lies are necessary for giving children dreams.",
    author: "Shimura Tae",
  },
  {
    id: 12,
    quote: "The night is darkest just before dawn. But keep your eyes open.",
    author: "Gintoki Sakata",
  },
  {
    id: 13,
    quote: "If you have faith, your dreams will surely come true.",
    author: "Kotarou Katsura",
  },
  {
    id: 14,
    quote: "You yourself have to change first, or nothing will change for you!",
    author: "Gintoki Sakata",
  },
];

const quoteLeft = "";
const quoteRight = "";
const l = quotes.length;
class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let r = this.props.random;
        const rColor = { color: "#" + this.props.randomColor };
        return /*#__PURE__*/(
            React.createElement(React.Fragment, null,
                quotes.map(item => {
                    const { id, quote, author } = item;
                    if (id === r) {
                        return /*#__PURE__*/(
                            React.createElement("div", { key: id }, /*#__PURE__*/
                                React.createElement("h4", { style: rColor, id: "text", quote: this.props.quote }, /*#__PURE__*/
                                    React.createElement("i", null, quoteLeft, " "),
                                    quote, /*#__PURE__*/
                                    React.createElement("i", null, " ", quoteRight, " ")), /*#__PURE__*/
                                React.createElement("p", { className: "text-end", id: "author" }, "- ",
                                    author)));
                    }
                })));
    }
}
class RandomQuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 1,
            randomColor: "b0adc0"
        };
        this.changeQuote = this.changeQuote.bind(this);
    }
    changeQuote() {
        this.setState({
            random: Math.floor(Math.random() * l),
            randomColor: (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
        });
    }
    render() {
        console.log("2: ", this.state.random);
        const rColor = { color: "#" + this.state.randomColor };
        const rBackgroundColor = { backgroundColor: "#" + this.state.randomColor };
        // const tweetContent = '#';
        return /*#__PURE__*/(
            React.createElement("div", {
                style: rBackgroundColor,
                className: "container mw-100 d-flex justify-content-center flex-column "
            }, /*#__PURE__*/
                React.createElement("div", {
                    id: "quote-box",
                    className: "row d-flex flex-row box d-flex justify-content-center align-self-center text-center" 
                }, /*#__PURE__*/
                    React.createElement("div", { className: "row" }, /*#__PURE__*/
                        React.createElement(RandomQuote, {
                            random: this.state.random,
                            randomColor: this.state.randomColor
                        })), /*#__PURE__*/
                    React.createElement("div", { className: "row" }, /*#__PURE__*/
                        React.createElement("div", { className: "col-6" }, /*#__PURE__*/
                            React.createElement("a", { id: "tweet-quote", href: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' }, /*#__PURE__*/
                                React.createElement("i", { style: rColor, class: "bi bi-twitter fa-2x mx-1" }))), /*#__PURE__*/
                        React.createElement("div", { className: "col-6 justify-content-end d-flex" }, /*#__PURE__*/
                            React.createElement("button", {
                                id: "new-quote",
                                style: rBackgroundColor,
                                className: "btn btn-primary rounded-pill ",
                                onClick: this.changeQuote
                            }, "New quote")))), /*#__PURE__*/
                React.createElement("div", { className: "row signature text-center my-2 text-light" }, /*#__PURE__*/
                    React.createElement("p", null, "Created by techMomma"))));
    }
}
function App() {
    return /*#__PURE__*/React.createElement(RandomQuoteMachine, null);
}
ReactDOM.render( /*#__PURE__*/
    React.createElement(React.StrictMode, null, /*#__PURE__*/
        React.createElement(App, null)),
    document.getElementById('root'));

export default App;