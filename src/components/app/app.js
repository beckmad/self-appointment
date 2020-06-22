import React, {Component} from 'react';
import Rep from '../../services/rep';
import Header from '../header';
import Register from '../register';
import Iframe from '../iframe';
import Main from '../main';
import Footer from '../footer';
//import LazyLoad from '../lazy-load';
import Error from '../error';

import './app.css';
import 'animate.css/animate.min.css'


export default class App extends Component {
  state = {
    link: '',
    regPage: false,
    error: false,
  };
  repApi = new Rep();

  registerClick = () => {
    console.log('firstClick');
    this.setState((state) => {
      return {regPage: !state.regPage};
    });
    this.updateLink();

  };
  updateLink = () => {
    if (!localStorage.peopleList) {
      this.setState({error: true});
      return;
    }
    const peopleList = localStorage.peopleList.split(';');
    let index = Number(localStorage.peopleIndex);

    if (peopleList.length < 3) {
      this.repApi.getLink()
        .then(link => {
          localStorage.setItem('peopleList', `${localStorage.peopleList};${link}`);
        })
    }

    if (index < 2) {
      this.setState({link: peopleList[index]});
      localStorage.setItem('peopleIndex', `${++localStorage.peopleIndex}`);
    } else if (index === 2) {
      this.setState({link: peopleList[index]});
      localStorage.setItem('peopleIndex', '0');
    }

  };

  componentDidMount() {
    if (!localStorage.peopleList) {
      this.repApi.getLink()
        .then(link => {
          localStorage.setItem('peopleList', link);
          localStorage.setItem('peopleIndex', '0');
        })
        .catch(e => {
          this.setState({error: true});
          console.error(`PeopleList doesn't initiation. Error: ${e}`);
        });
    }
    console.log('componentDidMount');
  };

  componentDidCatch() {
    console.log('componentDidCatch');
    // this.setState({error: true});
  };

  render() {
    console.log('render: ', this.state, '\n', 'localStorage: ', localStorage);
    const {regPage, error, link} = this.state;
    const content = error ? <Error/> : <Iframe visibility={regPage} link={link}/>;
    return (
      <React.Fragment>
        <Header visibility={regPage}/>
        <Register visibility={regPage} updateLink={this.updateLink}/>
        <Main registerClick={this.registerClick} visibility={regPage}/>
        {content}
        <Footer visibility={regPage}/>
      </React.Fragment>
    )
  }
}

