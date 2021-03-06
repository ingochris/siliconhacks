const React = require('react');

const FaqCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  },
  render() {
    const faqCardStyle = {
      fontFamily: 'Proxima Nova, Open Sans, sans-serif',
      marginBottom: '20px',
      backgroundColor: 'white',
      borderRadius: '4px',
      color: '#3E3E3E',
      padding: '40px 30px',
      position: 'relative',
      textAlign: 'left',
      width: '100%',
    };
    const cardTitleStyle = {
      fontSize: '20px',
      lineHeight: '1.5',
      marginBottom: '25px',
      fontWeight: 'bold',
    };
    const cardBodyStyle = {
      fontSize: '14px',
      lineHeight: '1.7',
      fontWeight: '400',
    };
    return (
      <div style={faqCardStyle} className="faq-card">
        <div className="card-title" style={cardTitleStyle}>{this.props.title}</div>
        <div className="card-body"
          dangerouslySetInnerHTML={{ __html: this.props.body }}
          style={cardBodyStyle}
        >
        </div>
      </div>
    );
  },
});

module.exports = FaqCard;
