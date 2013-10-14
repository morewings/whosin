/**
 * @jsx React.DOM
 */

var data = [
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  },
  {
    firstName: "John",
    lastName: "Doe",
    position: "Marketing CEO",
    company: "ACME inc",
    imageUrl: "https://s3.amazonaws.com/ingo.production.images/3S5EOGAQFT33CDQR/temp-download-1731967200763740748-0_iJez0ZYIkcUsoR3aidQRJJidCb6soISaGH9ZJMKFdtbJDo088ddJUPwwjVy"
  }
];

var WidgetWrap = React.createClass({
  render: function() {
    return (
      <div class="ingo-widget2">
        <MiddleWrap data={this.props.data} />
        <BottomWrap />
      </div>
      );
  }
});


var MiddleWrap = React.createClass({
  render: function() {
    var usersList = this.props.data.map(function (userInfo) {
      return <UserEntry firstName={userInfo.firstName} lastName={userInfo.lastName} position={userInfo.position} company={userInfo.company} imageUrl={userInfo.imageUrl} />;
    });
    return (
      <div class="middle">
        <SearchForm />
        <div class="test"></div>

        <div class="test">
          <ul class="unstyled users">{usersList}</ul>
        </div>
      </div>
      );
  }
});


var SearchForm = React.createClass({
  render: function() {
    return (
      <form class="form search" action="#">
        <div class="search-wrap pull-left">
          <a class="icon" href="#"></a>
          <input type="text" id="search" placeholder="Search names, companies, positions" />
          <a class="clear-filter js-clear-filter" href="javascript:void(0);">×</a>
        </div>
      </form>
      );
  }
});


var UserEntry = React.createClass({
  render: function() {
    return (
      <div class="comment">
        <h2 class="commentAuthor">
          {this.props.author}
          <li>
            <span class="contact">
              <img alt="" src={this.props.imageUrl} />
              <span class="first-name">{this.props.firstName}</span>
              <div class="last-name">{this.props.lastName}</div>
              <div class="position">{this.props.position}</div>
              <div class="company">{this.props.Company}</div>
            </span>
          </li>
        </h2>
      </div>
      );
  }
});


var BottomWrap = React.createClass({
  render: function() {
    return (
      <div class="bottom">
        <div>
          <span>Who in your network is attending?</span>
        </div>
        <div class="social">
          <a class="js-facebook" href="#"></a>
          <a class="js-linkedin" href="#"></a>
        </div>
      </div>
      );
  }
});

React.renderComponent(
  <WidgetWrap data={data} />,
  document.getElementById('content')
);


