var React = require('react');
var Home = require('./Home');
var Forecast = require('./Forecast');
var Detail = require('./Detail');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h1>Clever Title</h1>
                <Home
                  direction='row'
                  onSubmitZipcode={function(city){
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    });
                  }}
                  zipcode={123} />
              </div>
            )
          }} />

          <Route exact path='/' render={function (props) {
            return (
              <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className='header'>Enter a City and State</h1>
                <Home
                  direction='column'
                  onSubmitZipcode={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                  zipcode={123} />
              </div>
            )
          }} />

          <Route path='/forecast' component={Forecast} />

          <Route path='/details/:city' component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;